// Image asset mappings
// For now using Unsplash placeholders - replace with local assets later

export const bannerImages = {
    phoHero: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=600&fit=crop',
    hangBac: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=400&fit=crop',
    hangSac: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=400&fit=crop',
    hangDien: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=400&fit=crop',
};

// Generate gradient placeholder as fallback
export const generateGradientPlaceholder = (color1: string, color2: string): string => {
    return `data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${encodeURIComponent(color1)};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:${encodeURIComponent(color2)};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='400' fill='url(%23grad)' /%3E%3C/svg%3E`;
};

export const placeholders = {
    hero: generateGradientPlaceholder('#FF6A00', '#EC4899'),
    luxury: generateGradientPlaceholder('#FFD700', '#FFA500'),
    beauty: generateGradientPlaceholder('#FF69B4', '#FF1493'),
    tech: generateGradientPlaceholder('#4169E1', '#1E90FF'),
};
