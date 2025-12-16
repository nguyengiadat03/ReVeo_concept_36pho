# ReVeo - AI Video E-commerce Platform

## 🎯 Concept: Hà Nội 36 Phố Phường

ReVeo is an AI-powered video creation platform designed specifically for Vietnamese e-commerce sellers. Inspired by Hanoi's famous 36 streets (36 Phố Phường), each "Phố" represents a distinct product category.

## 🚀 Tech Stack

- **React 18** - Modern functional components with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Responsive navigation with mobile menu
│   ├── HeroSection.tsx     # Hero with gradient background & CTAs
│   ├── PhoCategories.tsx   # 36 Phố Phường category grid
│   ├── HowItWorks.tsx      # 4-step process explanation
│   ├── Features.tsx        # Feature highlights with stats
│   ├── CTASection.tsx      # Final call-to-action
│   └── Footer.tsx          # Comprehensive footer
├── pages/
│   └── LandingPage.tsx     # Main landing page assembly
├── data/
│   └── phoCategories.ts    # 36 category definitions
├── App.tsx                 # Root component
├── main.tsx               # React entry point
└── index.css              # Global styles & design system
```

## 🎨 Design System

### Colors
- **Primary**: `#FF6A00` (Orange)
- **Secondary**: `#FFFFFF` (White)
- **Gradients**: Orange → Pink for accents

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear heading scales (XL → SM)
- **Line height**: Relaxed for readability

### Components
- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Cards**: `.card` with hover effects
- **Sections**: `.section-padding`, `.container-custom`

## 🏃‍♂️ Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

## ✨ Key Features

### 1. **36 Phố Phường Categories**
All 36 Vietnamese e-commerce categories including:
- Phố Thời Trang (Fashion)
- Phố Mỹ Phẩm (Cosmetics)
- Phố Điện Tử (Electronics)
- And 33 more...

### 2. **Responsive Design**
- Mobile-first approach
- Breakpoints: SM, MD, LG, XL
- Hamburger menu for mobile

### 3. **Modern UX**
- Smooth transitions & hover effects
- Gradient backgrounds
- Card lift animations
- Floating elements

### 4. **Vietnamese Content**
- All text in Vietnamese
- Tailored for Shopee/TikTok Shop sellers
- Local market focus

## 🎯 Target Users

- Shopee sellers
- TikTok Shop merchants
- Lazada vendors
- Vietnamese e-commerce entrepreneurs

## 📱 Sections

1. **Hero** - Main value proposition with CTAs
2. **36 Phố** - Interactive category grid
3. **How It Works** - 4-step process
4. **Features** - 6 key features + stats
5. **CTA** - Final conversion section
6. **Footer** - Links & information

## 🎨 Design Principles

✅ **Clean & Modern** - SaaS-style aesthetics
✅ **Breathable** - Large spacing, comfortable reading
✅ **Interactive** - Hover states, smooth transitions
✅ **Accessible** - Semantic HTML, proper contrast
✅ **Performance** - Optimized components, lazy loading ready

## 📝 Notes

- No external UI libraries (MUI, Ant, Chakra)
- Pure Tailwind CSS styling
- Functional components only
- TypeScript strict mode enabled

---

**Made with ❤️ in Vietnam**
