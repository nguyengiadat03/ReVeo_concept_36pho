# 🏗️ PROJECT RESTRUCTURE PLAN

## 📊 Current Structure (Before)

```
ReVeo_concept_36pho/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── i18n/
│   ├── layout/
│   ├── lib/
│   └── pages/
├── node_modules/
├── package.json
└── vite.config.ts
```

---

## 🎯 Optimized Structure (After)

```
ReVeo_concept_36pho/
├── 📁 src/                          # Frontend source code
│   ├── 📁 app/                      # App configuration
│   │   ├── providers/               # Context providers
│   │   └── router.tsx               # Route configuration
│   ├── 📁 components/               # Reusable components
│   │   ├── auth/                    # Authentication components
│   │   ├── common/                  # Common UI components
│   │   ├── dao-pho/                 # DaoPho specific components
│   │   ├── home/                    # Home specific components
│   │   ├── pho/                     # Pho card components
│   │   └── xuong/                   # Studio components
│   ├── 📁 features/                 # Feature-based modules (NEW)
│   │   ├── auth/                    # Auth feature
│   │   ├── pho-phuong/              # Pho Phuong feature
│   │   ├── dao-pho/                 # Dao Pho feature
│   │   ├── xuong-video/             # Video studio feature
│   │   └── xuong-hinh-anh/          # Image studio feature
│   ├── 📁 hooks/                    # Custom React hooks (NEW)
│   │   ├── useAuth.ts
│   │   ├── useTheme.ts
│   │   └── useI18n.ts
│   ├── 📁 i18n/                     # Internationalization
│   │   └── translations.ts
│   ├── 📁 layout/                   # Layout components
│   │   ├── AppShell.tsx
│   │   ├── Sidebar.tsx
│   │   └── Topbar.tsx
│   ├── 📁 lib/                      # Utilities & helpers
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── images.ts
│   ├── 📁 pages/                    # Page components
│   │   ├── auth/
│   │   ├── home/
│   │   └── ...
│   ├── 📁 services/                 # API services (NEW)
│   │   ├── api/
│   │   ├── pho.service.ts
│   │   └── video.service.ts
│   ├── 📁 store/                    # State management (NEW)
│   │   └── index.ts
│   ├── 📁 types/                    # TypeScript types (NEW)
│   │   ├── pho.types.ts
│   │   ├── user.types.ts
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── 📁 public/                       # Static assets (NEW)
│   ├── 📁 images/                   # Images
│   │   ├── pho/                     # Pho images
│   │   ├── banners/                 # Banner images
│   │   ├── icons/                   # Icons
│   │   └── logos/                   # Logos
│   ├── 📁 videos/                   # Video assets
│   └── 📁 fonts/                    # Custom fonts
│
├── 📁 server/                       # Backend (Future) (NEW)
│   ├── 📁 src/
│   │   ├── 📁 api/                  # API routes
│   │   ├── 📁 controllers/          # Controllers
│   │   ├── 📁 models/               # Database models
│   │   ├── 📁 services/             # Business logic
│   │   ├── 📁 middleware/           # Middleware
│   │   ├── 📁 utils/                # Utilities
│   │   └── server.ts                # Entry point
│   ├── package.json
│   └── tsconfig.json
│
├── 📁 docs/                         # Documentation (NEW)
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
│
├── 📁 scripts/                      # Build & deploy scripts (NEW)
│   ├── build.sh
│   ├── deploy.sh
│   └── seed-data.ts
│
├── 📁 tests/                        # Tests (NEW)
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example                     # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎯 Key Improvements

### 1. **Feature-Based Architecture**
```
features/
├── auth/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── types/
└── dao-pho/
    ├── components/
    ├── hooks/
    ├── services/
    └── types/
```

### 2. **Separation of Concerns**
- `src/` - Frontend only
- `public/` - Static assets
- `server/` - Backend (future)
- `docs/` - Documentation
- `tests/` - All tests

### 3. **Better Asset Management**
```
public/
├── images/
│   ├── pho/
│   │   ├── pho-thoi-trang.jpg
│   │   ├── pho-my-pham.jpg
│   │   └── ...
│   ├── banners/
│   └── icons/
└── videos/
```

### 4. **Type Safety**
```
types/
├── pho.types.ts
├── user.types.ts
├── api.types.ts
└── index.ts
```

### 5. **Service Layer**
```
services/
├── api/
│   ├── client.ts
│   └── endpoints.ts
├── pho.service.ts
├── video.service.ts
└── auth.service.ts
```

---

## 📋 Migration Steps

### Step 1: Create New Directories
```bash
mkdir -p public/{images/{pho,banners,icons,logos},videos,fonts}
mkdir -p server/src/{api,controllers,models,services,middleware,utils}
mkdir -p docs
mkdir -p scripts
mkdir -p tests/{unit,integration,e2e}
mkdir -p src/{features,hooks,services,store,types}
```

### Step 2: Move Files
1. Move images to `public/images/`
2. Create feature modules in `src/features/`
3. Extract hooks to `src/hooks/`
4. Create services in `src/services/`
5. Define types in `src/types/`

### Step 3: Update Imports
- Update all import paths
- Use path aliases (@/)
- Update vite.config.ts

### Step 4: Add Configuration
- Create .env.example
- Update tsconfig.json with path aliases
- Add ESLint & Prettier configs

---

## 🔧 Configuration Updates

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@services': path.resolve(__dirname, './src/services'),
      '@types': path.resolve(__dirname, './src/types'),
      '@assets': path.resolve(__dirname, './public'),
    },
  },
});
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@features/*": ["./src/features/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@lib/*": ["./src/lib/*"],
      "@services/*": ["./src/services/*"],
      "@types/*": ["./src/types/*"],
      "@assets/*": ["./public/*"]
    }
  }
}
```

---

## 🎯 Benefits

### ✅ Scalability
- Easy to add new features
- Clear separation of concerns
- Modular architecture

### ✅ Maintainability
- Organized by feature
- Easy to find files
- Clear dependencies

### ✅ Team Collaboration
- Clear structure
- Easy onboarding
- Consistent patterns

### ✅ Performance
- Better code splitting
- Lazy loading ready
- Optimized assets

### ✅ Future-Ready
- Backend folder ready
- Testing structure ready
- Documentation ready

---

## 📝 Next Steps

1. **Approve structure** - Review and confirm
2. **Create directories** - Run mkdir commands
3. **Move files** - Migrate existing files
4. **Update imports** - Fix all import paths
5. **Add configs** - Update vite & tsconfig
6. **Test** - Ensure everything works

---

**Status**: ⏸️ **AWAITING APPROVAL**

Bạn có muốn tôi proceed với restructure này không?
