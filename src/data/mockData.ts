export interface Template {
    id: string;
    name: string;
    thumbnail: string;
    phoId: string;
    phoName: string;
    category: string;
    duration: number;
    views: number;
    isTrending: boolean;
    isPremium: boolean;
}

export const templates: Template[] = [
    {
        id: 'tpl-1',
        name: 'Flash Sale Thời Trang',
        thumbnail: '🎬',
        phoId: 'pho-thoi-trang',
        phoName: 'Phố Thời Trang',
        category: 'Trending',
        duration: 15,
        views: 12500,
        isTrending: true,
        isPremium: false,
    },
    {
        id: 'tpl-2',
        name: 'Skincare Routine',
        thumbnail: '✨',
        phoId: 'pho-my-pham',
        phoName: 'Phố Mỹ Phẩm',
        category: 'Beauty',
        duration: 30,
        views: 8900,
        isTrending: true,
        isPremium: true,
    },
    {
        id: 'tpl-3',
        name: 'Unboxing Điện Thoại',
        thumbnail: '📱',
        phoId: 'pho-dien-tu',
        phoName: 'Phố Điện Tử',
        category: 'Tech',
        duration: 45,
        views: 15200,
        isTrending: false,
        isPremium: false,
    },
    {
        id: 'tpl-4',
        name: 'Đồ Gia Dụng Thông Minh',
        thumbnail: '🏠',
        phoId: 'pho-gia-dung',
        phoName: 'Phố Gia Dụng',
        category: 'Home',
        duration: 20,
        views: 6700,
        isTrending: false,
        isPremium: false,
    },
    {
        id: 'tpl-5',
        name: 'Sản Phẩm Cho Bé',
        thumbnail: '👶',
        phoId: 'pho-me-be',
        phoName: 'Phố Mẹ & Bé',
        category: 'Baby',
        duration: 25,
        views: 9100,
        isTrending: true,
        isPremium: false,
    },
    {
        id: 'tpl-6',
        name: 'Đồ Ăn Vặt Trending',
        thumbnail: '🍜',
        phoId: 'pho-thuc-pham',
        phoName: 'Phố Thực Phẩm',
        category: 'Food',
        duration: 15,
        views: 11300,
        isTrending: true,
        isPremium: false,
    },
    {
        id: 'tpl-7',
        name: 'Giày Thể Thao Hot',
        thumbnail: '⚽',
        phoId: 'pho-the-thao',
        phoName: 'Phố Thể Thao',
        category: 'Sports',
        duration: 20,
        views: 7800,
        isTrending: false,
        isPremium: true,
    },
    {
        id: 'tpl-8',
        name: 'Sách Bestseller',
        thumbnail: '📚',
        phoId: 'pho-sach-vo',
        phoName: 'Phố Sách Vở',
        category: 'Books',
        duration: 30,
        views: 5400,
        isTrending: false,
        isPremium: false,
    },
];

export interface Project {
    id: string;
    name: string;
    phoId: string;
    phoName: string;
    thumbnail: string;
    status: 'draft' | 'review' | 'completed';
    createdAt: Date;
    updatedAt: Date;
    duration?: number;
}

export const projects: Project[] = [
    {
        id: 'proj-1',
        name: 'Video Áo Thun Mùa Hè',
        phoId: 'pho-thoi-trang',
        phoName: 'Phố Thời Trang',
        thumbnail: '👗',
        status: 'completed',
        createdAt: new Date('2024-12-10'),
        updatedAt: new Date('2024-12-12'),
        duration: 15,
    },
    {
        id: 'proj-2',
        name: 'Serum Vitamin C',
        phoId: 'pho-my-pham',
        phoName: 'Phố Mỹ Phẩm',
        thumbnail: '💄',
        status: 'review',
        createdAt: new Date('2024-12-14'),
        updatedAt: new Date('2024-12-15'),
        duration: 30,
    },
    {
        id: 'proj-3',
        name: 'iPhone 15 Pro Max',
        phoId: 'pho-dien-tu',
        phoName: 'Phố Điện Tử',
        thumbnail: '📱',
        status: 'draft',
        createdAt: new Date('2024-12-15'),
        updatedAt: new Date('2024-12-15'),
    },
    {
        id: 'proj-4',
        name: 'Nồi Chiên Không Dầu',
        phoId: 'pho-gia-dung',
        phoName: 'Phố Gia Dụng',
        thumbnail: '🏠',
        status: 'completed',
        createdAt: new Date('2024-12-08'),
        updatedAt: new Date('2024-12-09'),
        duration: 20,
    },
    {
        id: 'proj-5',
        name: 'Bỉm Cho Bé',
        phoId: 'pho-me-be',
        phoName: 'Phố Mẹ & Bé',
        thumbnail: '👶',
        status: 'draft',
        createdAt: new Date('2024-12-16'),
        updatedAt: new Date('2024-12-16'),
    },
];

export interface MarketplaceItem {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    thumbnail: string;
    isPremium: boolean;
    downloads: number;
}

export const marketplaceItems: MarketplaceItem[] = [
    {
        id: 'mkt-1',
        name: 'Pack 50 Template Thời Trang',
        description: '50 template video chuyên nghiệp cho ngành thời trang',
        category: 'Templates',
        price: 500,
        thumbnail: '🎨',
        isPremium: true,
        downloads: 1200,
    },
    {
        id: 'mkt-2',
        name: 'Voice Pack Premium',
        description: '20 giọng đọc AI cao cấp với cảm xúc tự nhiên',
        category: 'Voice',
        price: 300,
        thumbnail: '🎙️',
        isPremium: true,
        downloads: 850,
    },
    {
        id: 'mkt-3',
        name: 'Music Library Pro',
        description: '100+ nhạc nền bản quyền cho video bán hàng',
        category: 'Music',
        price: 200,
        thumbnail: '🎵',
        isPremium: false,
        downloads: 2100,
    },
    {
        id: 'mkt-4',
        name: 'Transition Effects Pack',
        description: '50 hiệu ứng chuyển cảnh chuyên nghiệp',
        category: 'Effects',
        price: 150,
        thumbnail: '✨',
        isPremium: false,
        downloads: 1500,
    },
    {
        id: 'mkt-5',
        name: 'Text Animation Bundle',
        description: '30 kiểu chữ động cho video TikTok/Shopee',
        category: 'Text',
        price: 100,
        thumbnail: '📝',
        isPremium: false,
        downloads: 980,
    },
    {
        id: 'mkt-6',
        name: 'Product Showcase Templates',
        description: '25 template giới thiệu sản phẩm 3D',
        category: 'Templates',
        price: 400,
        thumbnail: '🎬',
        isPremium: true,
        downloads: 670,
    },
];

export interface Course {
    id: string;
    title: string;
    platform: string;
    description: string;
    duration: string;
    lessons: number;
    progress: number;
    thumbnail: string;
}

export const courses: Course[] = [
    {
        id: 'course-1',
        title: 'Bán Hàng Hiệu Quả Trên TikTok Shop',
        platform: 'TikTok',
        description: 'Học cách tạo video viral và tăng doanh số trên TikTok',
        duration: '3 giờ',
        lessons: 12,
        progress: 65,
        thumbnail: '🎵',
    },
    {
        id: 'course-2',
        title: 'Shopee Marketing Mastery',
        platform: 'Shopee',
        description: 'Chiến lược marketing toàn diện cho Shopee seller',
        duration: '4 giờ',
        lessons: 15,
        progress: 30,
        thumbnail: '🛍️',
    },
    {
        id: 'course-3',
        title: 'Lazada Seller Pro',
        platform: 'Lazada',
        description: 'Tối ưu hóa shop và tăng đơn hàng trên Lazada',
        duration: '2.5 giờ',
        lessons: 10,
        progress: 0,
        thumbnail: '🏪',
    },
    {
        id: 'course-4',
        title: 'Facebook Live Selling',
        platform: 'Facebook',
        description: 'Kỹ thuật livestream bán hàng chuyên nghiệp',
        duration: '3.5 giờ',
        lessons: 14,
        progress: 100,
        thumbnail: '📱',
    },
];
