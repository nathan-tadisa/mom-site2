# Mom Website - Wardrobe Organization & Style

A modern React application for wardrobe organization and styling services.

## 🚀 Deployment to Vercel

This project is configured for easy deployment to Vercel. Follow these steps:

### 1. Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- A PostgreSQL database (recommended services below)

### 2. Database Setup

You'll need a PostgreSQL database. Here are some recommended services:

- **Neon** (https://neon.tech) - Free tier available
- **Supabase** (https://supabase.com) - Free tier available  
- **Railway** (https://railway.app) - Free tier available
- **PlanetScale** (https://planetscale.com) - Free tier available

### 3. Deploy to Vercel

#### Option A: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add DATABASE_URL
# Enter your PostgreSQL connection string when prompted
```

#### Option B: Deploy via Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect this as a Vite project
5. Add environment variables in the project settings:
   - `DATABASE_URL`: Your PostgreSQL connection string

### 4. Environment Variables

Set the following environment variable in your Vercel project:

- `DATABASE_URL`: Your PostgreSQL database connection string
  - Example: `postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require`

### 5. Database Migration

After deployment, you may need to run database migrations. You can do this by:

1. Setting up a local development environment
2. Running `npm run db:push` to push the schema to your database

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL

# Run development server
npm run dev
```

## 📁 Project Structure

- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared types and database schema
- `attached_assets/` - Image assets

## 🎨 Features

- Modern React with TypeScript
- Tailwind CSS for styling
- Radix UI components
- Framer Motion animations
- Responsive design
- Database integration with Drizzle ORM

## 📝 Notes

- The project uses a full-stack architecture with Express.js backend
- For Vercel deployment, only the frontend is deployed as a static site
- Backend API routes would need to be deployed separately or converted to Vercel serverless functions if needed
