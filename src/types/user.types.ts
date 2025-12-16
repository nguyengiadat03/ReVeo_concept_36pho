// User Types
export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role: UserRole;
    plan: UserPlan;
    credits: number;
    createdAt: Date;
    updatedAt: Date;
}

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
    MODERATOR = 'moderator',
}

export enum UserPlan {
    FREE = 'free',
    BASIC = 'basic',
    PRO = 'pro',
    ENTERPRISE = 'enterprise',
}

// Auth Types
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterData {
    email: string;
    password: string;
    name: string;
}

export interface AuthResponse {
    user: User;
    token: string;
    refreshToken: string;
}

// Session Types
export interface Session {
    user: User;
    token: string;
    expiresAt: Date;
}
