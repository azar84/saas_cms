import { prisma } from '@/lib/db';
import path from 'path';
import { readFile } from 'fs/promises';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const FALLBACK_FILE = path.join(process.cwd(), 'public', 'favicon.svg');

const ICO_CONTENT_TYPE = 'image/x-icon';
const SVG_CONTENT_TYPE = 'image/svg+xml';
const PNG_CONTENT_TYPE = 'image/png';

const MAX_AGE_SECONDS = 60 * 60 * 24; // 24 hours

async function fetchRemoteAsset(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }

    const arrayBuffer = await response.arrayBuffer();
    const contentTypeFromResponse =
      response.headers.get('content-type') ?? guessContentType(url);

    return {
      body: arrayBuffer,
      contentType: contentTypeFromResponse,
    };
  } catch (error) {
    console.error('[favicon] Failed to fetch remote asset', { url, error });
    return null;
  }
}

function guessContentType(url: string) {
  const normalized = url.toLowerCase();
  if (normalized.endsWith('.svg')) {
    return SVG_CONTENT_TYPE;
  }
  if (normalized.endsWith('.png')) {
    return PNG_CONTENT_TYPE;
  }
  if (normalized.endsWith('.ico')) {
    return ICO_CONTENT_TYPE;
  }
  return ICO_CONTENT_TYPE;
}

function normalizeCandidateUrl(candidate: string | null | undefined, requestUrl: string) {
  if (!candidate) return null;

  const trimmed = candidate.trim();
  if (!trimmed) return null;

  try {
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }

    if (trimmed.startsWith('//')) {
      const requestOrigin = new URL(requestUrl).origin;
      return `${new URL(requestOrigin).protocol}${trimmed}`;
    }

    if (trimmed.startsWith('/')) {
      const base = new URL(requestUrl);
      base.pathname = trimmed;
      base.search = '';
      base.hash = '';
      return base.toString();
    }
  } catch (error) {
    console.error('[favicon] Failed to normalize candidate URL', { candidate, error });
  }

  return null;
}

export async function GET(request: Request) {
  const requestUrl = request.url;
  const settingsCandidates: string[] = [];

  try {
    const settings = await prisma.siteSettings.findFirst({
      select: {
        faviconDarkUrl: true,
        faviconLightUrl: true,
        faviconUrl: true,
      },
    });

    const prioritized = [
      settings?.faviconDarkUrl,
      settings?.faviconLightUrl,
      settings?.faviconUrl,
    ];

    for (const candidate of prioritized) {
      const normalized = normalizeCandidateUrl(candidate, requestUrl);
      if (normalized && normalized !== requestUrl) {
        settingsCandidates.push(normalized);
      }
    }
  } catch (error) {
    console.error('[favicon] Failed to load site settings', error);
  }

  for (const candidateUrl of settingsCandidates) {
    const asset = await fetchRemoteAsset(candidateUrl);
    if (asset) {
      return new Response(asset.body, {
        headers: {
          'Content-Type': asset.contentType,
          'Cache-Control': `public, max-age=${MAX_AGE_SECONDS}`,
        },
      });
    }
  }

  try {
    const fallbackSvg = await readFile(FALLBACK_FILE);
    return new Response(fallbackSvg, {
      headers: {
        'Content-Type': SVG_CONTENT_TYPE,
        'Cache-Control': `public, max-age=${MAX_AGE_SECONDS}`,
      },
    });
  } catch (error) {
    console.error('[favicon] Failed to read fallback favicon', error);
  }

  return new Response(null, { status: 404 });
}

