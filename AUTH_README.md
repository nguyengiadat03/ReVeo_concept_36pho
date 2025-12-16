# ReVeo - Authentication Flow Documentation

## 🔐 Authentication System

Complete authentication flow with React Router, form validation, and simulated backend.

## 📁 Updated Project Structure

```
src/
├── app/
│   ├── providers/
│   │   └── AuthProvider.tsx       # Auth context & state management
│   └── router.tsx                 # React Router configuration
├── components/
│   ├── auth/
│   │   ├── AuthCard.tsx          # Main auth container
│   │   ├── AuthTabs.tsx          # Login/Signup tab switcher
│   │   ├── AuthFormLogin.tsx     # Login form with validation
│   │   ├── AuthFormSignup.tsx    # Signup form with validation
│   │   ├── AuthSocialButton.tsx  # Google OAuth button
│   │   ├── AuthShowcase.tsx      # Rotating industry showcase
│   │   ├── AuthScanMock.tsx      # Animated product scan demo
│   │   └── ForgotPasswordModal.tsx # Password reset modal
│   └── ui/
│       ├── Button.tsx            # Reusable button component
│       ├── Input.tsx             # Reusable input with validation
│       └── Modal.tsx             # Reusable modal component
├── lib/
│   └── validators.ts             # Form validation utilities
├── pages/
│   ├── LandingPage.tsx          # Home page (existing)
│   ├── AuthPage.tsx             # Authentication page
│   └── OnboardingPage.tsx       # Post-auth onboarding
└── App.tsx                       # Router + Auth provider setup
```

## 🚀 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | LandingPage | Marketing landing page |
| `/auth` | AuthPage | Login/Signup page |
| `/onboarding` | OnboardingPage | Post-authentication flow |

## 🎨 Auth Page Features

### Visual Elements
- ✅ **Gradient Background** - Orange → Pink with glowing orbs
- ✅ **Noise Texture** - Subtle grain effect
- ✅ **Grid Lines** - Lightweight CSS-only background
- ✅ **Rotating Showcase** - 4 industries with smooth transitions
- ✅ **Scan Animation** - Product analysis mock with progress bar

### Form Features
- ✅ **Tab Switching** - Login ↔ Signup
- ✅ **Email Validation** - Format checking
- ✅ **Password Validation** - Minimum 8 characters
- ✅ **Confirm Password** - Match validation
- ✅ **Name Validation** - Minimum 2 characters
- ✅ **Inline Errors** - Field-level error messages
- ✅ **Error Summary** - Alert banner for form errors
- ✅ **Loading States** - Spinner on submit buttons
- ✅ **Enter to Submit** - Keyboard accessibility

### Authentication Methods
1. **Email/Password Login**
2. **Email/Password Signup**
3. **Google OAuth** (simulated)
4. **Forgot Password** (modal with email reset)

## 🔧 Auth Provider API

```typescript
const { 
  user,              // User object or null
  isAuthenticated,   // Boolean auth status
  isLoading,         // Loading state
  login,             // (email, password) => Promise<void>
  signup,            // (name, email, password) => Promise<void>
  loginWithGoogle,   // () => Promise<void>
  logout             // () => void
} = useAuth();
```

## 💾 State Persistence

User session is persisted in `localStorage` with key `reveo_user`:
- Survives page refresh
- Auto-login on app load
- Cleared on logout

## 🎯 User Flow

```
Landing Page
    ↓ (Click "Đăng nhập" or "Dùng thử miễn phí")
Auth Page
    ↓ (Login/Signup Success)
Onboarding Page
    ↓ (Complete onboarding)
Dashboard (Future)
```

## 🧪 Testing the Auth Flow

### Test Login
1. Navigate to `/auth`
2. Enter any email (e.g., `test@example.com`)
3. Enter password (min 8 chars, e.g., `password123`)
4. Click "Đăng nhập"
5. Wait for 1.5s simulation
6. Redirected to `/onboarding`

### Test Signup
1. Navigate to `/auth`
2. Click "Đăng ký" tab
3. Fill in all fields:
   - Name: `Nguyễn Văn A`
   - Email: `test@example.com`
   - Password: `password123`
   - Confirm: `password123`
4. Click "Đăng ký"
5. Redirected to `/onboarding`

### Test Google Login
1. Navigate to `/auth`
2. Click "Tiếp tục với Google"
3. Wait for simulation
4. Redirected to `/onboarding`

### Test Forgot Password
1. Navigate to `/auth`
2. Click "Quên mật khẩu?"
3. Enter email in modal
4. Click "Gửi link"
5. See success message

## 🎨 Design System Compliance

All auth components follow the established design system:

### Colors
- Primary: `#FF6A00` (Orange)
- Gradients: Orange → Pink
- White backgrounds
- Subtle accent glows

### Typography
- Inter font family
- Clear hierarchy
- Comfortable spacing

### Components
- Rounded cards (`rounded-2xl`)
- Soft shadows
- Smooth transitions (300ms)
- Hover states on all interactive elements

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Focus rings on inputs
- ✅ Error announcements (`aria-live`)
- ✅ Keyboard navigation
- ✅ Tab order
- ✅ Screen reader support

## 🔒 Validation Rules

### Email
- Required
- Valid email format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)

### Password
- Required
- Minimum 8 characters

### Name (Signup)
- Required
- Minimum 2 characters

### Confirm Password (Signup)
- Required
- Must match password field

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: SM, MD, LG
- Stacked layout on mobile
- Side-by-side on desktop
- Touch-friendly buttons

## 🚀 Next Steps

To extend the authentication system:

1. **Backend Integration**
   - Replace simulated API calls in `AuthProvider.tsx`
   - Add real JWT token handling
   - Implement refresh token logic

2. **Protected Routes**
   - Add route guards
   - Redirect unauthenticated users

3. **Email Verification**
   - Add verification flow
   - Resend verification email

4. **Password Reset**
   - Implement actual reset flow
   - Add reset token validation

5. **Social OAuth**
   - Integrate real Google OAuth
   - Add Facebook, Apple login

---

**Auth system ready for production UI testing!** 🎉
