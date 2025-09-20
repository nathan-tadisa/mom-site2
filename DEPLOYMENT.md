# 🚀 Quick Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (run this in the project directory)
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: mom-website (or your preferred name)
# - Directory: ./
# - Override settings? No
```

### Method 2: Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Vercel will auto-detect the Vite configuration
5. Click "Deploy"

## Environment Variables (Optional)

If you need database functionality, add these in Vercel project settings:

- `DATABASE_URL`: Your PostgreSQL connection string

## What's Already Configured

✅ Vercel configuration (`vercel.json`)  
✅ Build scripts (`package.json`)  
✅ Static build output  
✅ Replit dependencies removed  
✅ Production optimizations  

## After Deployment

Your site will be available at: `https://your-project-name.vercel.app`

## Troubleshooting

- **Build fails**: Check that all dependencies are in `package.json`
- **Assets not loading**: Verify `vercel.json` output directory is correct
- **Database errors**: Set up `DATABASE_URL` environment variable

## Need Help?

Check the full [README.md](./README.md) for detailed setup instructions.
