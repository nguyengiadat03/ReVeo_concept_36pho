// Pho (Street) Types
export interface Pho {
    id: string;
    name: string;
    description: string;
    icon: string;
    group: PhoGroup;
    subcategories: Subcategory[];
}

export interface Subcategory {
    id: string;
    name: string;
    description: string;
}

export enum PhoGroup {
    FASHION = 'fashion',
    BEAUTY = 'beauty',
    ELECTRONICS = 'electronics',
    HOME = 'home',
    FOOD = 'food',
    HEALTH = 'health',
    BOOKS = 'books',
    OTHER = 'other',
}

// Product Types
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    images: string[];
    phoId: string;
    subcategoryId?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Video Types
export interface VideoProject {
    id: string;
    name: string;
    productId: string;
    phoId: string;
    status: VideoStatus;
    videoUrl?: string;
    thumbnailUrl?: string;
    duration?: number;
    createdAt: Date;
    updatedAt: Date;
}

export enum VideoStatus {
    DRAFT = 'draft',
    PROCESSING = 'processing',
    COMPLETED = 'completed',
    FAILED = 'failed',
}

// Image Types
export interface ImageProject {
    id: string;
    name: string;
    productId: string;
    phoId: string;
    mode: ImageMode;
    status: ImageStatus;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

export enum ImageMode {
    PRODUCT = 'product',
    POSTER = 'poster',
    BANNER = 'banner',
}

export enum ImageStatus {
    DRAFT = 'draft',
    PROCESSING = 'processing',
    COMPLETED = 'completed',
    FAILED = 'failed',
}
