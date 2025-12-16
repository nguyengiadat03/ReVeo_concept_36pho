# 🏮 36 Phố Phường - UX Refactor Complete

## 🎯 Concept-Driven Navigation

### **Old vs New**

| Old (Generic SaaS) | New (36 Phố Concept) |
|-------------------|---------------------|
| Home | 🏮 Phố Phường |
| Create Video | 🚶‍♂️ Dạo Phố |
| Templates | 🧩 Mẫu Phố |
| Marketplace | 🛒 Chợ Phố |
| Academy | 🎓 Học Viện Phố |
| Credits | 💰 Ví Phố |
| Settings | ⚙️ Cài Đặt |

---

## 📍 New Page Structure

### 1️⃣ **Phở Phường** (Home Overview) - `/home`
**Purpose**: Trang chào - truyền cảm hứng - định hướng

**Content**:
- Hero banner: "Chào mừng bạn đến với 36 Phố Phường"
- Giới thiệu concept 36 Phố
- Banner hình ảnh các Phố nổi bật
- CTA duy nhất: "Bắt đầu Dạo Phố" → `/dao-pho`

**NOT**:
- ❌ Không tạo video tại đây
- ❌ Không có grid Phố chi tiết
- ❌ Chỉ là overview + inspiration

---

### 2️⃣ **Dạo Phố** (Main Experience) - `/dao-pho`
**Purpose**: Khám phá Phố → chọn sản phẩm → tạo nội dung

**User Flow**:
```
Danh sách Phố
  ↓ Click Phố (VD: Hàng Gai)
Hiển thị sản phẩm thuộc Phố
  ↓ Click sản phẩm
Chọn:
  - 🎬 Tạo Video
  - 🖼️ Tạo Hình Ảnh
```

**Content**:
- Grid các Phố (card lớn, hình ảnh sống động)
- Click vào Phố → Hiển thị grid sản phẩm
- Filter theo loại sản phẩm
- UX: "Đi chợ - chọn hàng"

---

### 3️⃣ **Xưởng Video** - `/tao-video/:phoSlug/:productId`
**Purpose**: Tạo video từ sản phẩm đã chọn

**Content**:
- Wizard/Editor tạo video
- Input: Phố + Sản phẩm + Ảnh
- ❌ KHÔNG hiển thị danh sách Phố

---

### 4️⃣ **Xưởng Hình Ảnh** - `/tao-hinh-anh/:phoSlug/:productId`
**Purpose**: Tạo hình ảnh AI

**Content**:
- Wizard tương tự Video
- Modes: Ảnh sản phẩm, Poster, Banner
- Output: Image thay vì Video

---

### 5️⃣ **Mẫu Phố** - `/templates`
**Purpose**: Thư viện templates theo Phố

---

### 6️⃣ **Chợ Phố** - `/marketplace`
**Purpose**: Marketplace tài nguyên

---

### 7️⃣ **Học Viện Phố** - `/academy`
**Purpose**: Courses & tutorials

---

### 8️⃣ **Ví Phố** - `/credits`
**Purpose**: Credits management

---

### 9️⃣ **Cài Đặt** - `/settings`
**Purpose**: User settings

---

## 🎨 UX Naming Rules

### ✅ DO
- "Dạo Phố" - khám phá
- "Xưởng" - nơi tạo ra
- "Chợ" - marketplace
- "Ví" - credits
- Gợi không khí chợ - phố - nghề

### ❌ DON'T
- "Create" - quá generic
- "Dashboard" - quá SaaS
- "Workspace" - quá kỹ thuật
- Thuật ngữ technical

---

## 🗺️ User Journey

```
1. Landing → Phố Phường (Overview)
   ↓
2. "Bắt đầu Dạo Phố" → Dạo Phố
   ↓
3. Chọn Phố (VD: Hàng Gai)
   ↓
4. Xem sản phẩm trong Phố
   ↓
5. Chọn sản phẩm
   ↓
6. Chọn:
   - Tạo Video → Xưởng Video
   - Tạo Hình Ảnh → Xưởng Hình Ảnh
   ↓
7. Tạo nội dung
   ↓
8. Download/Share
```

---

## 📁 Component Structure

```
src/
├── pages/
│   ├── PhoPhường.tsx          ✨ NEW - Home overview
│   ├── DaoPho.tsx             ✨ NEW - Main experience
│   ├── XuongVideo.tsx         🔄 RENAME from StreetWorkspace
│   ├── XuongHinhAnh.tsx       ✨ NEW - Image studio
│   ├── MauPho.tsx             🔄 RENAME from Templates
│   ├── ChoPho.tsx             🔄 RENAME from Marketplace
│   ├── HocVienPho.tsx         🔄 RENAME from Academy
│   ├── ViPho.tsx              🔄 RENAME from Credits
│   └── CaiDat.tsx             🔄 RENAME from Settings
│
├── components/
│   ├── pho-phuong/
│   │   ├── HeroBanner.tsx
│   │   ├── ConceptIntro.tsx
│   │   └── PhoShowcase.tsx
│   │
│   ├── dao-pho/
│   │   ├── PhoGrid.tsx
│   │   ├── ProductGrid.tsx
│   │   └── PhoDetail.tsx
│   │
│   └── xuong/
│       ├── VideoWizard.tsx
│       └── ImageWizard.tsx
```

---

## 🎯 Implementation Checklist

### Phase 1: Navigation
- [ ] Update Sidebar labels
- [ ] Update routes
- [ ] Update i18n translations

### Phase 2: Pages
- [ ] Create PhoPhường (overview)
- [ ] Create DaoPho (main experience)
- [ ] Rename XuongVideo
- [ ] Create XuongHinhAnh
- [ ] Rename other pages

### Phase 3: Components
- [ ] Extract PhoGrid
- [ ] Create ProductGrid
- [ ] Create ConceptIntro
- [ ] Update wizards

### Phase 4: UX Polish
- [ ] Update all copy
- [ ] Add transitions
- [ ] Test user flow
- [ ] Ensure consistency

---

## 🎨 Design Language

### Voice & Tone
- **Playful**: "Dạo phố", "Xưởng", "Chợ"
- **Local**: Vietnamese market vibes
- **Memorable**: Not generic SaaS
- **Story-driven**: Journey metaphor

### Visual Elements
- Market/street imagery
- Vietnamese aesthetics
- Warm colors (orange, red)
- Handcrafted feel

---

## ✅ Success Criteria

1. **Clear Separation**: Each page has 1 purpose
2. **Story-Driven**: Navigation tells a story
3. **Memorable**: Unique, not generic
4. **Intuitive**: User flow is obvious
5. **Delightful**: Fun to use

---

**Status**: 📋 **PLANNED** - Ready for implementation
