# ReVeo Studio - Architecture Documentation

## 📐 Project Structure

```
ReVeo_concept_36pho/
├── src/                    # Frontend source code
├── public/                 # Static assets
├── server/                 # Backend (Future)
├── docs/                   # Documentation
├── scripts/                # Build & deploy scripts
└── tests/                  # Testing
```

## 🎯 Architecture Principles

### 1. Feature-Based Organization
- Code organized by feature/domain
- Each feature is self-contained
- Easy to scale and maintain

### 2. Separation of Concerns
- **Components**: UI components only
- **Services**: API calls and business logic
- **Hooks**: Reusable React logic
- **Types**: TypeScript definitions
- **Store**: State management

### 3. Type Safety
- All data structures typed
- API responses typed
- Component props typed

### 4. Service Layer
- Centralized API calls
- Error handling
- Request/response transformation

## 📁 Directory Structure

### `/src`
Frontend application source code

#### `/src/components`
Reusable UI components
- `auth/` - Authentication components
- `common/` - Common UI elements
- `pho/` - Pho-specific components
- `dao-pho/` - DaoPho feature components
- `xuong/` - Studio components

#### `/src/features`
Feature-based modules (Future)
- Each feature contains its own components, hooks, services

#### `/src/hooks`
Custom React hooks
- `useAuth.ts` - Authentication hook
- `useTheme.ts` - Theme management
- `useI18n.ts` - Internationalization

#### `/src/services`
API services and business logic
- `api/client.ts` - HTTP client
- `pho.service.ts` - Pho API calls
- `video.service.ts` - Video API calls

#### `/src/types`
TypeScript type definitions
- `pho.types.ts` - Pho-related types
- `user.types.ts` - User-related types
- `api.types.ts` - API types

#### `/src/lib`
Utilities and helpers
- `utils.ts` - Utility functions
- `constants.ts` - App constants
- `images.ts` - Image helpers

### `/public`
Static assets

#### `/public/images`
- `pho/` - Pho images
- `banners/` - Banner images
- `icons/` - Icons
- `logos/` - Logos

#### `/public/videos`
Video assets

#### `/public/fonts`
Custom fonts

### `/server` (Future)
Backend application

#### `/server/src/api`
API routes and controllers

#### `/server/src/models`
Database models

#### `/server/src/services`
Business logic

### `/docs`
Documentation

### `/tests`
Testing
- `unit/` - Unit tests
- `integration/` - Integration tests
- `e2e/` - End-to-end tests

## 🔧 Configuration

### Path Aliases
```typescript
@/ → ./src/
@components/ → ./src/components/
@features/ → ./src/features/
@hooks/ → ./src/hooks/
@lib/ → ./src/lib/
@services/ → ./src/services/
@types/ → ./src/types/
@store/ → ./src/store/
@assets/ → ./public/
```

### Environment Variables
See `.env.example` for all available variables

## 🚀 Development Workflow

1. **Feature Development**
   - Create feature in `/src/features/`
   - Add types in `/src/types/`
   - Create services in `/src/services/`
   - Build components in `/src/components/`

2. **Component Development**
   - Keep components small and focused
   - Use TypeScript for props
   - Extract logic to hooks

3. **State Management**
   - Use Context API for global state
   - Use hooks for local state
   - Consider Zustand/Redux for complex state

4. **API Integration**
   - Define types first
   - Create service methods
   - Handle errors properly
   - Add loading states

## 📝 Best Practices

### Code Organization
- One component per file
- Group related files together
- Use index files for exports

### Naming Conventions
- Components: PascalCase
- Files: camelCase or kebab-case
- Types: PascalCase with Type suffix
- Hooks: camelCase with use prefix

### TypeScript
- Always define types
- Avoid `any` type
- Use interfaces for objects
- Use enums for constants

### Performance
- Lazy load routes
- Optimize images
- Use React.memo for expensive components
- Implement code splitting

## 🔐 Security

### Frontend
- Validate user input
- Sanitize data
- Use HTTPS only
- Implement CSRF protection

### Backend (Future)
- JWT authentication
- Rate limiting
- Input validation
- SQL injection prevention

## 📊 Monitoring

### Logging
- Console logs in development
- Structured logging in production
- Error tracking (Sentry)

### Analytics
- User behavior tracking
- Performance monitoring
- Error reporting

## 🚢 Deployment

### Frontend
- Build: `npm run build`
- Preview: `npm run preview`
- Deploy to Vercel/Netlify

### Backend (Future)
- Docker containerization
- Deploy to AWS/GCP
- CI/CD pipeline

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

**Last Updated**: 2025-12-16
**Version**: 1.0.0
