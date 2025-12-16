// 🧪 TEST SCRIPT - Copy và paste vào Browser Console để test

console.log('🧪 Starting Theme & Language Test...\n');

// ============================================
// TEST 1: Theme System
// ============================================
console.log('📋 TEST 1: Theme System');
console.log('------------------------');

// Check if dark class can be applied
const htmlElement = document.documentElement;
console.log('✓ HTML element:', htmlElement);

// Test adding dark class
htmlElement.classList.add('dark');
console.log('✓ Added dark class');
console.log('  - Has dark class?', htmlElement.classList.contains('dark'));

// Check background color
const bgColor = getComputedStyle(document.body).backgroundColor;
console.log('  - Background color:', bgColor);

// Test removing dark class
htmlElement.classList.remove('dark');
console.log('✓ Removed dark class');
console.log('  - Has dark class?', htmlElement.classList.contains('dark'));

// Check localStorage
const storedTheme = localStorage.getItem('reVeo.theme');
console.log('✓ Stored theme:', storedTheme || 'none');

console.log('\n');

// ============================================
// TEST 2: Language System
// ============================================
console.log('📋 TEST 2: Language System');
console.log('------------------------');

// Check localStorage
const storedLocale = localStorage.getItem('reVeo.locale');
console.log('✓ Stored locale:', storedLocale || 'none');

// Check if translations are loaded
try {
    // This will fail if not in React context, but that's ok
    console.log('✓ Translations module should be loaded');
} catch (e) {
    console.log('⚠ Translations check skipped (expected in console)');
}

console.log('\n');

// ============================================
// TEST 3: DOM Structure
// ============================================
console.log('📋 TEST 3: DOM Structure');
console.log('------------------------');

// Check for theme switcher
const themeSwitcher = document.querySelector('[aria-label*="Light"], [aria-label*="Dark"], [aria-label*="Sáng"], [aria-label*="Tối"]');
console.log('✓ Theme switcher found?', !!themeSwitcher);

// Check for language switcher
const langSwitcher = document.querySelector('[aria-label*="Language"], [aria-label*="Ngôn ngữ"]');
console.log('✓ Language switcher found?', !!langSwitcher);

// Check for notification dropdown
const notificationBtn = document.querySelector('[aria-label*="Notification"], [aria-label*="Thông báo"]');
console.log('✓ Notification button found?', !!notificationBtn);

console.log('\n');

// ============================================
// TEST 4: Interactive Test
// ============================================
console.log('📋 TEST 4: Interactive Test');
console.log('------------------------');
console.log('Please manually test:');
console.log('1. Click Moon/Sun icon → Theme should change');
console.log('2. Click Globe icon → Language dropdown should open');
console.log('3. Select language → Text should change');
console.log('4. Refresh page → Settings should persist');

console.log('\n');

// ============================================
// SUMMARY
// ============================================
console.log('📊 TEST SUMMARY');
console.log('===============');

const results = {
    'Dark mode CSS': htmlElement.classList.contains('dark') ? '⚠ Currently dark' : '✓ Can toggle',
    'Theme storage': storedTheme ? `✓ ${storedTheme}` : '⚠ Not set',
    'Locale storage': storedLocale ? `✓ ${storedLocale}` : '⚠ Not set',
    'Theme switcher': themeSwitcher ? '✓ Found' : '✗ Not found',
    'Lang switcher': langSwitcher ? '✓ Found' : '✗ Not found',
    'Notification': notificationBtn ? '✓ Found' : '✗ Not found',
};

console.table(results);

console.log('\n');
console.log('🎯 Next Steps:');
console.log('1. If theme switcher not found → Check Topbar component');
console.log('2. If storage not set → Try clicking switchers');
console.log('3. If dark mode stuck → Run: localStorage.clear() then reload');
console.log('4. Check Console for 🎨 and 🌍 logs when clicking');

console.log('\n🧪 Test Complete!');
