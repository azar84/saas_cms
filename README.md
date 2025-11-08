# SaaS CMS - Complete Website Management System

A comprehensive, enterprise-ready content management system for SaaS businesses, built with modern web technologies. This CMS provides a complete solution for building, managing, and optimizing business websites with advanced features for content management, SEO, analytics, and more.

## 🚀 Features Overview

### 🎨 **Website Builder & Content Management**
- **Dynamic Page Builder**: Drag-and-drop interface for creating custom pages
- **Hero Sections**: Customizable hero sections with animations and media support
- **Media Sections**: Rich media content blocks with multiple layout options
- **Feature Groups**: Organized feature displays with custom styling
- **Team Sections**: Professional team member showcases
- **FAQ Management**: Comprehensive FAQ system with categories and sections
- **HTML/Script Injection**: Custom HTML and JavaScript integration
- **Menu Management**: Dynamic navigation menu system

### 📝 **Forms & Contact Management**
- **Advanced Form Builder**: Custom forms with multiple field types
- **Contact Sections**: Pre-built contact forms with validation
- **Form Submissions**: Complete submission tracking and management
- **Email Notifications**: Automated email responses and notifications
- **Newsletter Management**: Subscriber management system
- **Captcha Integration**: Built-in creative captcha system

### 💰 **Pricing & Plans**
- **Pricing Sections**: Configurable pricing tables and plans
- **Billing Cycles**: Multiple billing period support
- **Feature Limits**: Detailed feature comparison tables
- **Plan Management**: Complete pricing plan administration
- **CTA Integration**: Call-to-action buttons with event tracking

### 🔧 **Admin Panel Features**
- **Dashboard**: Comprehensive analytics and quick actions
- **User Management**: Admin user accounts and role management
- **Media Library**: Cloudinary-integrated media management
- **Design System**: Consistent styling with customizable color schemes
- **Site Settings**: Global site configuration and branding
- **SEO Manager**: Complete SEO audit and optimization tools

### 🔒 **Security & Authentication**
- **JWT Authentication**: Secure admin panel access
- **Password Hashing**: bcrypt password security
- **Role-based Access**: Admin user role management
- **Session Management**: Secure session handling
- **Middleware Protection**: Route-level security

### 📧 **Email & Communications**
- **SMTP Integration**: Configurable email service
- **Email Templates**: Customizable email templates
- **Automated Notifications**: Form submission notifications
- **Email Logging**: Comprehensive email tracking
- **Rate Limiting**: Email rate limiting protection

### 📊 **SEO & Analytics**
- **Google Analytics**: GA4 integration
- **Google Tag Manager**: GTM container support
- **Sitemap Generation**: Automatic XML sitemap creation
- **Meta Tag Management**: Dynamic meta tag optimization
- **SEO Auditing**: Comprehensive SEO analysis tools
- **Search Console Integration**: Google Search Console API
- **Structured Data**: JSON-LD schema markup

### 🎨 **Design System**
- **CSS Variables**: Dynamic theming system
- **Color Management**: Comprehensive color palette
- **Typography System**: Consistent font and spacing
- **Component Library**: Reusable UI components
- **Responsive Design**: Mobile-first approach
- **Animation Support**: Framer Motion integration

### 🗄️ **Database & API**
- **PostgreSQL**: Production-ready database
- **Prisma ORM**: Type-safe database operations
- **RESTful APIs**: Comprehensive API endpoints
- **Data Validation**: Zod schema validation
- **Error Handling**: Robust error management
- **Database Migrations**: Version-controlled schema changes

## 🛠️ Technology Stack

### **Frontend**
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **State Management**: React hooks and context

### **Backend**
- **Runtime**: Node.js 22.x
- **Framework**: Next.js API routes
- **Database**: PostgreSQL (production) / SQLite (development)
- **ORM**: Prisma 6.x
- **Authentication**: JWT with bcryptjs
- **Email**: Nodemailer with SMTP
- **File Upload**: Cloudinary integration
- **Validation**: Zod schemas

### **Development & Deployment**
- **Package Manager**: npm 10.x
- **Build Tool**: Next.js with Turbopack
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Deployment**: Vercel (recommended) / Docker / Heroku
- **Database**: Heroku Postgres / Vercel Postgres

### **External Services**
- **Media Storage**: Cloudinary
- **Analytics**: Google Analytics 4, Google Tag Manager
- **SEO**: Google Search Console API
- **Email**: SMTP-compatible email services
- **Monitoring**: Built-in error tracking

## 🚀 Getting Started

### **Prerequisites**
- Node.js 22.x or higher
- npm 10.x or higher
- PostgreSQL database (for production)

### **Installation**

1. **Clone the repository**
```bash
git clone <repository-url>
cd saas_cms
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/saas_cms"

# Authentication
JWT_SECRET="your-secure-jwt-secret-min-32-characters"

# Cloudinary (Optional)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email (Optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Analytics (Optional)
GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"
GOOGLE_TAG_MANAGER_ID="GTM-XXXXXXX"

# Application
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NODE_ENV="development"
```

4. **Database Setup**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Seed database (optional)
npm run db:seed
```

5. **Start Development Server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`
Admin panel at `http://localhost:3000/admin-panel`

### **First Time Setup**

1. **Create Admin User**
```bash
# Run the seed script to create default admin
npm run db:seed
```
Default admin credentials:
- Username: `admin`
- Password: `admin123`

2. **Configure Site Settings**
- Navigate to Admin Panel → Site Settings
- Upload logo and favicon
- Configure company information
- Set up SMTP for email functionality

3. **Set up Cloudinary (Optional)**
- Create Cloudinary account
- Add credentials to environment variables
- Enable in Site Settings → Cloudinary

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Connect Repository**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

2. **Environment Variables**
Set up all required environment variables in Vercel dashboard

3. **Database**
Use Vercel Postgres or external PostgreSQL service

### **Docker Deployment**

```dockerfile
# Dockerfile included in project
docker build -t saas-cms .
docker run -p 3000:3000 saas-cms
```

### **Heroku Deployment**

```bash
# Using app.json configuration
git push heroku main
```

## 🛡️ Security Features

### **Authentication**
- JWT-based admin authentication
- Password hashing with bcrypt
- Session management
- Route protection middleware

### **Data Protection**
- Input validation with Zod
- SQL injection prevention (Prisma)
- XSS protection
- CSRF protection
- Rate limiting

### **Security Headers**
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Content Security Policy

## 📊 Key Features Summary

✅ **Complete CMS** - Full content management system  
✅ **Admin Panel** - Comprehensive admin interface  
✅ **Form Builder** - Advanced form creation tools  
✅ **SEO Tools** - Complete SEO optimization suite  
✅ **Email System** - SMTP integration with templates  
✅ **Media Management** - Cloudinary integration  
✅ **Analytics** - GA4 and GTM support  
✅ **Security** - JWT authentication and protection  
✅ **Design System** - Consistent theming system  
✅ **API-First** - RESTful API architecture  
✅ **TypeScript** - Full type safety  
✅ **Responsive** - Mobile-first design  
✅ **Production Ready** - Enterprise-grade features

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support & Documentation

### **Additional Documentation**
- `docs/ADMIN_PANEL_DESIGN_SYSTEM.md` - Admin panel styling guide
- `docs/WEBSITE_FRONTEND_DESIGN_SYSTEM.md` - Frontend design system
- `docs/DEVELOPMENT_INSTRUCTIONS.md` - Development guidelines
- `docs/CRON_SETUP.md` - Scheduled task configuration

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Prisma**

> Triggering deployment pipeline update.
