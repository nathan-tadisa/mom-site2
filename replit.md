# Replit.md

## Overview

This is a full-stack web application built with React and Express.js featuring a style and wardrobe consultation website. The application uses a modern monorepo structure with a React frontend using shadcn/ui components and an Express.js backend with PostgreSQL database integration via Drizzle ORM.

## Recent Changes

### January 9, 2025 - Figma to Replit Migration Complete
- Successfully migrated project from Figma to Replit environment
- Enhanced UnlockWardrobePotentialSection with horizontal scrolling carousel
- Completely redesigned testimonials section (ReadyToTransformWardrobeSection) with:
  - Professional testimonial header "What Our Students Say"
  - 4 diverse, authentic testimonials from different professionals
  - Interactive pagination with clickable dots and position indicator
  - Improved responsive design and accessibility features
- All components are fully functional with proper client/server separation
- Application running successfully on port 5000 with hot reloading

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Storage**: connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reloading with Vite integration

### Monorepo Structure
```
/
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared TypeScript types and schemas
└── migrations/      # Database migration files
```

## Key Components

### Frontend Components
- **Landing Page Sections**: Multiple modular sections for the style consultation website
- **UI Components**: Complete shadcn/ui component library including forms, navigation, cards, and interactive elements
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Backend Components
- **Express Server**: RESTful API server with middleware for logging and error handling
- **Storage Interface**: Abstract storage layer with in-memory implementation (ready for database integration)
- **Route Registration**: Modular route system with placeholder for API endpoints

### Shared Components
- **Database Schema**: Drizzle schema definitions with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express.js routes handle requests and interact with storage layer
3. **Data Persistence**: Drizzle ORM manages database operations with PostgreSQL
4. **Response Handling**: Type-safe responses flow back through the storage interface to the client

## External Dependencies

### Frontend Dependencies
- **UI**: Radix UI primitives, Lucide icons, React Hook Form
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **State**: TanStack Query for server state management
- **Utilities**: date-fns for date manipulation, clsx for conditional classes

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with drizzle-zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL session storage

### Development Dependencies
- **Build**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across the stack
- **Development**: tsx for TypeScript execution, Replit-specific plugins

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with file watching for automatic restarts
- **Database**: Environment variable configuration for database URL

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild creates a single bundled Node.js file in `dist/`
- **Deployment**: Single command (`npm start`) runs the production server

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable required
- **Migrations**: Drizzle Kit handles schema migrations with `npm run db:push`
- **Static Assets**: Express serves built frontend assets in production

The application is designed for easy deployment on platforms like Replit, with automatic database provisioning and a streamlined build process that bundles both frontend and backend for production.