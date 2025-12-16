export type StreetGroup =
    | 'fashion'      // Thời trang
    | 'beauty'       // Mỹ phẩm
    | 'electronics'  // Điện tử
    | 'home'         // Gia dụng
    | 'baby'         // Mẹ & Bé
    | 'food'         // Thực phẩm
    | 'sports'       // Thể thao
    | 'books';       // Sách & Văn phòng phẩm

export interface Street {
    id: string;
    name: string;
    description: string;
    icon: string;
    group: StreetGroup;
    trending?: boolean;
    subcategories: Subcategory[];
}

export interface Subcategory {
    id: string;
    name: string;
    streetId: string;
}

export interface GenerationRequest {
    id: string;
    subcategoryId: string;
    streetId: string;
    imageFile: File | null;
    imagePreview: string | null;
    productUrl: string;
    createdAt: Date;
}

export interface GenerationResult {
    id: string;
    requestId: string;
    videoUrl: string | null;
    status: 'idle' | 'processing' | 'success' | 'error';
    streetName: string;
    subcategoryName: string;
    productUrl: string;
    fileName: string;
    errorMessage?: string;
    createdAt: Date;
}

// Hanoi 36 Streets data
export const streets: Street[] = [
    {
        id: 'pho-thoi-trang',
        name: 'Phố Thời Trang',
        description: 'Quần áo, giày dép, phụ kiện thời trang nam nữ',
        icon: '👗',
        group: 'fashion',
        trending: true,
        subcategories: [
            { id: 'clothing', name: 'Quần áo', streetId: 'pho-thoi-trang' },
            { id: 'shoes', name: 'Giày dép', streetId: 'pho-thoi-trang' },
            { id: 'accessories', name: 'Phụ kiện', streetId: 'pho-thoi-trang' },
        ],
    },
    {
        id: 'pho-my-pham',
        name: 'Phố Mỹ Phẩm',
        description: 'Mỹ phẩm, skincare, làm đẹp',
        icon: '💄',
        group: 'beauty',
        trending: true,
        subcategories: [
            { id: 'skincare', name: 'Chăm sóc da', streetId: 'pho-my-pham' },
            { id: 'makeup', name: 'Trang điểm', streetId: 'pho-my-pham' },
            { id: 'fragrance', name: 'Nước hoa', streetId: 'pho-my-pham' },
        ],
    },
    {
        id: 'pho-dien-tu',
        name: 'Phố Điện Tử',
        description: 'Điện thoại, laptop, thiết bị điện tử',
        icon: '📱',
        group: 'electronics',
        subcategories: [
            { id: 'phones', name: 'Điện thoại', streetId: 'pho-dien-tu' },
            { id: 'laptops', name: 'Laptop', streetId: 'pho-dien-tu' },
            { id: 'accessories', name: 'Phụ kiện', streetId: 'pho-dien-tu' },
        ],
    },
    {
        id: 'pho-gia-dung',
        name: 'Phố Gia Dụng',
        description: 'Đồ gia dụng, nội thất, trang trí',
        icon: '🏠',
        group: 'home',
        subcategories: [
            { id: 'kitchen', name: 'Nhà bếp', streetId: 'pho-gia-dung' },
            { id: 'furniture', name: 'Nội thất', streetId: 'pho-gia-dung' },
            { id: 'decor', name: 'Trang trí', streetId: 'pho-gia-dung' },
        ],
    },
    {
        id: 'pho-me-be',
        name: 'Phố Mẹ & Bé',
        description: 'Đồ cho mẹ bầu, em bé, đồ chơi trẻ em',
        icon: '👶',
        group: 'baby',
        subcategories: [
            { id: 'maternity', name: 'Mẹ bầu', streetId: 'pho-me-be' },
            { id: 'baby', name: 'Em bé', streetId: 'pho-me-be' },
            { id: 'toys', name: 'Đồ chơi', streetId: 'pho-me-be' },
        ],
    },
    {
        id: 'pho-thuc-pham',
        name: 'Phố Thực Phẩm',
        description: 'Thực phẩm tươi sống, đồ ăn vặt, đặc sản',
        icon: '🍜',
        group: 'food',
        subcategories: [
            { id: 'fresh', name: 'Tươi sống', streetId: 'pho-thuc-pham' },
            { id: 'snacks', name: 'Đồ ăn vặt', streetId: 'pho-thuc-pham' },
            { id: 'specialty', name: 'Đặc sản', streetId: 'pho-thuc-pham' },
        ],
    },
    {
        id: 'pho-the-thao',
        name: 'Phố Thể Thao',
        description: 'Dụng cụ thể thao, quần áo, giày thể thao',
        icon: '⚽',
        group: 'sports',
        subcategories: [
            { id: 'equipment', name: 'Dụng cụ', streetId: 'pho-the-thao' },
            { id: 'sportswear', name: 'Quần áo', streetId: 'pho-the-thao' },
            { id: 'shoes', name: 'Giày thể thao', streetId: 'pho-the-thao' },
        ],
    },
    {
        id: 'pho-sach-vpp',
        name: 'Phố Sách & VPP',
        description: 'Sách, văn phòng phẩm, dụng cụ học tập',
        icon: '📚',
        group: 'books',
        subcategories: [
            { id: 'books', name: 'Sách', streetId: 'pho-sach-vpp' },
            { id: 'stationery', name: 'Văn phòng phẩm', streetId: 'pho-sach-vpp' },
            { id: 'supplies', name: 'Dụng cụ học tập', streetId: 'pho-sach-vpp' },
        ],
    },
];

export const getStreetById = (id: string): Street | undefined => {
    return streets.find((street) => street.id === id);
};

export const getSubcategoryById = (streetId: string, subcategoryId: string): Subcategory | undefined => {
    const street = getStreetById(streetId);
    return street?.subcategories.find((sub) => sub.id === subcategoryId);
};
