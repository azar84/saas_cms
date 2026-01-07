'use client';

import { useEffect, useState } from 'react';

interface DynamicFaviconProps {
  faviconUrl?: string | null;
}

export default function DynamicFavicon({ faviconUrl }: DynamicFaviconProps) {
  const [dynamicFaviconUrl, setDynamicFaviconUrl] = useState<string | null>(faviconUrl || null);

  useEffect(() => {
    // If faviconUrl is provided as prop, use it
    if (faviconUrl) {
      setDynamicFaviconUrl(faviconUrl);
      return;
    }

    // Otherwise fetch favicon data from API
    const fetchFavicon = async () => {
      try {
        const response = await fetch('/api/admin/site-settings');
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            const settings = data.data;
            // Try to get the most appropriate favicon
            const favicon = settings.faviconDarkUrl || settings.faviconLightUrl || settings.faviconUrl || '/favicon.svg';
            setDynamicFaviconUrl(favicon);
          } else {
            // If no data structure, try to use the response directly
            const settings = data;
            const favicon = settings.faviconDarkUrl || settings.faviconLightUrl || settings.faviconUrl || '/favicon.svg';
            setDynamicFaviconUrl(favicon);
          }
        } else {
          console.warn('Failed to fetch site settings, using default favicon');
          setDynamicFaviconUrl('/favicon.svg');
        }
      } catch (error) {
        console.error('Failed to fetch favicon:', error);
        setDynamicFaviconUrl('/favicon.svg');
      }
    };

    fetchFavicon();
  }, [faviconUrl]);

  useEffect(() => {
    if (typeof window === 'undefined' || !dynamicFaviconUrl) return;

    const ensureLink = (rel: string, options: { type?: string } = {}) => {
      const selector = `link[rel="${rel}"]`;
      let link = document.querySelector<HTMLLinkElement>(selector);

      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }

      link.href = dynamicFaviconUrl;

      if (options.type) {
        link.type = options.type;
      }
    };

    const type = dynamicFaviconUrl.endsWith('.svg') ? 'image/svg+xml' : 'image/x-icon';

    ensureLink('icon', { type });
    ensureLink('shortcut icon', { type });
    ensureLink('apple-touch-icon');
  }, [dynamicFaviconUrl]);

  return null; // This component doesn't render anything
} 