# 🏮 36 Phố Phường - Concept-Driven UX Refactor

## ⚠️ IMPORTANT - Please Review Before Implementation

Đây là một refactor lớn thay đổi toàn bộ navigation và naming để phản ánh concept "36 Phố Phường". 

**Trước khi implement, hãy xác nhận:**
1. Bạn đồng ý với new naming structure
2. Bạn muốn tiếp tục với refactor này
3. Bạn hiểu rằng điều này sẽ thay đổi nhiều files

---

## 📊 Navigation Changes Summary

### Current (Generic SaaS)
```
🏠 36 Phố          → /home
🎬 Tạo Video       → /streets/:id
📋 Templates       → /templates
📁 Dự án          → /projects
🛒 Marketplace     → /marketplace
🎓 Academy         → /academy
💰 Credits         → /credits
⚙️ Cài đặt        → /settings
```

### Proposed (Concept-Driven)
```
🏮 Phố Phường      → /home (Overview only)
🚶‍♂️ Dạo Phố        → /dao-pho (Main experience)
🎬 Xưởng Video     → /xuong-video/:phoSlug/:productId
🖼️ Xưởng Hình Ảnh  → /xuong-hinh-anh/:phoSlug/:productId
🧩 Mẫu Phố         → /mau-pho
🛒 Chợ Phố         → /cho-pho
🎓 Học Viện Phố    → /hoc-vien-pho
💰 Ví Phố          → /vi-pho
⚙️ Cài Đặt        → /cai-dat
```

---

## 🎯 Key Concept Changes

### 1. **Phố Phường** (Home)
- **Old**: Grid of 36 streets + create video
- **New**: Overview + inspiration ONLY
- **Purpose**: Welcome page, introduce concept
- **CTA**: "Bắt đầu Dạo Phố" → takes to /dao-pho

### 2. **Dạo Phố** (NEW - Main Experience)
- **Replaces**: Current /home functionality
- **Purpose**: Browse streets → select products → create content
- **Flow**: 
  ```
  List of Streets
    → Click Street
      → Show Products
        → Click Product
          → Choose: Video or Image
  ```

### 3. **Xưởng Video/Hình Ảnh**
- **Old**: /streets/:id (mixed purpose)
- **New**: Separate studios for Video and Image
- **Purpose**: ONLY for creating content
- **Entry**: From Dạo Phố after selecting product

---

## 🎨 UX Philosophy

### Story-Driven Navigation
- "Dạo Phố" = Walking through market streets
- "Xưởng" = Workshop/Studio where you create
- "Chợ" = Marketplace (not generic "Marketplace")
- "Ví" = Wallet (not generic "Credits")

### User Journey as Story
```
1. Arrive at Phố Phường (Welcome)
2. Start Dạo Phố (Explore)
3. Browse Streets (Like walking through market)
4. Select Product (Like choosing goods)
5. Go to Xưởng (Workshop to create)
6. Create Content (Make your video/image)
```

---

## 📝 Translation Updates Needed

### Navigation Keys
```typescript
// OLD
'nav.home': '36 Phố'
'nav.create': 'Tạo Video'
'nav.templates': 'Templates'
'nav.marketplace': 'Marketplace'
'nav.academy': 'Academy'
'nav.credits': 'Credits'

// NEW
'nav.pho-phuong': 'Phố Phường'
'nav.dao-pho': 'Dạo Phố'
'nav.xuong-video': 'Xưởng Video'
'nav.xuong-hinh-anh': 'Xưởng Hình Ảnh'
'nav.mau-pho': 'Mẫu Phố'
'nav.cho-pho': 'Chợ Phố'
'nav.hoc-vien-pho': 'Học Viện Phố'
'nav.vi-pho': 'Ví Phố'
```

---

## 🔄 Files That Will Change

### New Files to Create
- `src/pages/PhoPhuong.tsx` - Overview page
- `src/pages/DaoPho.tsx` - Main experience
- `src/pages/XuongHinhAnh.tsx` - Image studio
- `src/components/dao-pho/PhoGrid.tsx`
- `src/components/dao-pho/ProductGrid.tsx`

### Files to Rename
- `TemplatesPage.tsx` → `MauPho.tsx`
- `MarketplacePage.tsx` → `ChoPho.tsx`
- `AcademyPage.tsx` → `HocVienPho.tsx`
- `CreditsPage.tsx` → `ViPho.tsx`
- `SettingsPage.tsx` → `CaiDat.tsx`
- `StreetWorkspacePage.tsx` → `XuongVideo.tsx`

### Files to Update
- `src/app/router.tsx` - All routes
- `src/layout/Sidebar.tsx` - Navigation items
- `src/i18n/translations.ts` - All translations
- `src/pages/HomePage.tsx` → Become overview only

---

## ⚠️ Breaking Changes

### Routes
- `/home` - Still exists but different content
- `/streets/:id` → `/xuong-video/:phoSlug/:productId`
- `/templates` → `/mau-pho`
- `/marketplace` → `/cho-pho`
- `/academy` → `/hoc-vien-pho`
- `/credits` → `/vi-pho`
- `/settings` → `/cai-dat`

### Navigation
- All sidebar labels change
- New main page: `/dao-pho`
- Separate video/image creation

---

## 🎯 Benefits

### For Users
1. **Clearer Purpose**: Each page has one job
2. **Better Story**: Navigation tells a journey
3. **More Memorable**: Unique, not generic
4. **Intuitive Flow**: Natural progression

### For Product
1. **Stronger Brand**: Concept-driven
2. **Differentiation**: Not another SaaS
3. **Vietnamese Identity**: Local market feel
4. **Scalability**: Clear structure for growth

---

## 🚦 Decision Points

### Option A: Full Refactor (Recommended)
- Implement all changes
- Complete concept alignment
- Best UX clarity
- **Time**: 2-3 hours

### Option B: Partial Refactor
- Keep current structure
- Only update labels
- Quick win
- **Time**: 30 minutes

### Option C: No Change
- Keep as is
- Generic SaaS feel
- **Time**: 0 minutes

---

## 📋 Implementation Checklist

If you approve, I will:

### Phase 1: Translations (15 min)
- [ ] Update all navigation keys
- [ ] Add new page translations
- [ ] Update button/action labels

### Phase 2: Routes (20 min)
- [ ] Update router.tsx
- [ ] Add new routes
- [ ] Set up redirects

### Phase 3: Sidebar (10 min)
- [ ] Update navigation items
- [ ] Update icons
- [ ] Update active states

### Phase 4: Pages (60 min)
- [ ] Create PhoPhuong (overview)
- [ ] Create DaoPho (main)
- [ ] Create XuongHinhAnh
- [ ] Rename existing pages
- [ ] Update imports

### Phase 5: Components (30 min)
- [ ] Create PhoGrid
- [ ] Create ProductGrid
- [ ] Update wizards

### Phase 6: Testing (20 min)
- [ ] Test all routes
- [ ] Test navigation
- [ ] Test user flow

**Total Time**: ~2.5 hours

---

## ❓ Questions to Answer

1. **Do you want full refactor or partial?**
   - Full = Complete concept alignment
   - Partial = Just rename labels

2. **Should we keep old routes as redirects?**
   - Yes = Better for bookmarks/SEO
   - No = Clean break

3. **Image creation feature - implement now or later?**
   - Now = Complete experience
   - Later = Focus on video first

4. **Product grid - use mock data or integrate with backend?**
   - Mock = Quick demo
   - Backend = Real integration

---

## 🎬 Next Steps

**Please confirm:**
1. ✅ I approve the concept
2. ✅ I want full refactor
3. ✅ I understand the changes

**Then I will:**
1. Update translations
2. Update routes
3. Create new pages
4. Update navigation
5. Test everything

---

**Status**: ⏸️ **AWAITING APPROVAL**

Please review and let me know if you want to proceed with this refactor.
