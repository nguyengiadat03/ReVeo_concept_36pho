# 🔧 QUICK FIX - Theme & Language Not Working

## ⚡ Giải pháp nhanh

### Bước 1: Hard Refresh Browser
```bash
1. Mở browser
2. Nhấn Ctrl + Shift + R (Windows) hoặc Cmd + Shift + R (Mac)
3. Hoặc Ctrl + F5
```

### Bước 2: Clear localStorage
```javascript
// Mở Console (F12) và chạy:
localStorage.clear()
location.reload()
```

### Bước 3: Kiểm tra Console
```bash
1. Mở Console (F12)
2. Refresh page
3. Xem các log:
   🎨 ThemeProvider mounted, initial theme: light
   🌍 I18nProvider initial locale: vi
```

---

## 🐛 Debug Steps

### Test Theme Switching

1. **Mở Console (F12)**
2. **Chạy lệnh này để test theme:**
```javascript
// Test apply theme trực tiếp
document.documentElement.classList.add('dark')
// Nếu background đổi sang đen → Tailwind dark mode hoạt động ✅

// Test remove
document.documentElement.classList.remove('dark')
// Nếu background đổi sang trắng → Tailwind dark mode hoạt động ✅
```

3. **Click icon Moon/Sun trong Topbar**
4. **Xem Console logs:**
```
🎨 ThemeSwitcher render - actualTheme: light
🎨 Switching theme from light to dark
🎨 setTheme called with: dark
🎨 Theme changed: dark → Actual theme: dark
🎨 Applying theme to DOM: dark
🎨 ThemeSwitcher render - actualTheme: dark
```

5. **Kiểm tra DOM:**
```javascript
// Chạy trong Console:
document.documentElement.classList.contains('dark')
// Nên return true nếu dark mode
```

### Test Language Switching

1. **Mở Console (F12)**
2. **Click icon Globe trong Topbar**
3. **Chọn English**
4. **Xem Console logs:**
```
🌍 LanguageSwitcher render - locale: vi
🌍 Switching language from vi to en
🌍 setLocale called with: en
🌍 I18nProvider render - current locale: en
🌍 LanguageSwitcher render - locale: en
```

5. **Kiểm tra localStorage:**
```javascript
// Chạy trong Console:
localStorage.getItem('reVeo.locale')
// Nên return "en"
```

---

## 🔍 Troubleshooting

### Vấn đề 1: Theme không đổi

**Kiểm tra:**
```javascript
// 1. Check Tailwind config
console.log('Dark mode enabled?')
// Xem file tailwind.config.js có darkMode: 'class'

// 2. Check HTML class
console.log(document.documentElement.className)
// Nên có 'dark' khi dark mode

// 3. Check CSS
console.log(getComputedStyle(document.body).backgroundColor)
// Nên khác nhau giữa light/dark
```

**Giải pháp:**
1. Clear cache: Ctrl + Shift + R
2. Clear localStorage: `localStorage.clear()`
3. Restart dev server: Stop npm run dev và chạy lại

### Vấn đề 2: Language không đổi

**Kiểm tra:**
```javascript
// 1. Check locale
console.log(localStorage.getItem('reVeo.locale'))

// 2. Check translations
import { translations } from './src/i18n/translations'
console.log(translations.en['nav.home'])
// Nên return "36 Streets"

// 3. Force re-render
// Click Globe → Select language → Refresh page
```

**Giải pháp:**
1. Clear localStorage: `localStorage.clear()`
2. Hard refresh: Ctrl + Shift + R
3. Check Console for errors

---

## ✅ Verification Checklist

### Theme Switching
- [ ] Console shows: `🎨 ThemeProvider mounted`
- [ ] Click Moon icon → Console shows: `🎨 Switching theme`
- [ ] Icon changes from Moon to Sun
- [ ] Background changes from white to dark
- [ ] All text changes color
- [ ] Sidebar changes color
- [ ] Topbar changes color
- [ ] `document.documentElement.classList.contains('dark')` returns true

### Language Switching
- [ ] Console shows: `🌍 I18nProvider initial locale`
- [ ] Click Globe → Dropdown opens
- [ ] Click English → Console shows: `🌍 Switching language`
- [ ] Sidebar text changes: "36 Phố" → "36 Streets"
- [ ] Topbar text changes: "Video mới" → "New Video"
- [ ] `localStorage.getItem('reVeo.locale')` returns "en"

---

## 🚨 Nếu vẫn không hoạt động

### Option 1: Manual Test
```javascript
// Mở Console và chạy từng dòng:

// Test Theme
document.documentElement.classList.add('dark')
// → Background nên đổi sang đen

document.documentElement.classList.remove('dark')
// → Background nên đổi sang trắng

// Test Locale
localStorage.setItem('reVeo.locale', 'en')
location.reload()
// → Text nên đổi sang tiếng Anh
```

### Option 2: Check Files
```bash
# Kiểm tra các file này tồn tại:
src/app/providers/ThemeProvider.tsx  ✅
src/app/providers/I18nProvider.tsx   ✅
src/i18n/translations.ts             ✅
src/components/common/ThemeSwitcher.tsx    ✅
src/components/common/LanguageSwitcher.tsx ✅
```

### Option 3: Restart Everything
```bash
1. Stop dev server (Ctrl + C)
2. Clear node_modules/.vite cache:
   rm -rf node_modules/.vite
3. Restart:
   npm run dev
4. Hard refresh browser:
   Ctrl + Shift + R
```

---

## 📝 Expected Console Output

### On Page Load:
```
🎨 ThemeProvider mounted, initial theme: light
🌍 I18nProvider initial locale: vi
🎨 Applying theme to DOM: light
🌍 I18nProvider render - current locale: vi
```

### On Theme Switch:
```
🎨 ThemeSwitcher render - actualTheme: light
🎨 Switching theme from light to dark
🎨 setTheme called with: dark
🎨 Theme changed: dark → Actual theme: dark
🎨 Applying theme to DOM: dark
🎨 ThemeSwitcher render - actualTheme: dark
```

### On Language Switch:
```
🌍 LanguageSwitcher render - locale: vi
🌍 Switching language from vi to en
🌍 setLocale called with: en
🌍 I18nProvider render - current locale: en
🌍 LanguageSwitcher render - locale: en
```

---

## 💡 Tips

1. **Always check Console first** - Tất cả actions đều có log
2. **Hard refresh after changes** - Ctrl + Shift + R
3. **Clear localStorage if stuck** - `localStorage.clear()`
4. **Check DOM directly** - `document.documentElement.classList`
5. **Verify translations exist** - Check `src/i18n/translations.ts`

---

Nếu sau khi làm tất cả các bước trên mà vẫn không hoạt động, hãy:
1. Copy toàn bộ Console output
2. Check Network tab xem có errors không
3. Verify file paths đúng
4. Restart dev server
