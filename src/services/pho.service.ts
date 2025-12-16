import { apiClient } from './api/client';
import type { ApiResponse, PaginatedResponse } from '@types';
import type { Pho, Product } from '@types';

export class PhoService {
    // Get all Pho (Streets)
    static async getAllPho(): Promise<ApiResponse<Pho[]>> {
        return apiClient.get<Pho[]>('/pho');
    }

    // Get Pho by ID
    static async getPhoById(id: string): Promise<ApiResponse<Pho>> {
        return apiClient.get<Pho>(`/pho/${id}`);
    }

    // Get products in a Pho
    static async getProductsByPho(phoId: string): Promise<ApiResponse<Product[]>> {
        return apiClient.get<Product[]>(`/pho/${phoId}/products`);
    }

    // Search Pho
    static async searchPho(query: string): Promise<ApiResponse<Pho[]>> {
        return apiClient.get<Pho[]>(`/pho/search?q=${encodeURIComponent(query)}`);
    }
}

// For now, return mock data
export const phoService = {
    getAllPho: async () => {
        // TODO: Replace with actual API call
        return { success: true, data: [] };
    },
    getPhoById: async (id: string) => {
        // TODO: Replace with actual API call
        return { success: true, data: null };
    },
    getProductsByPho: async (phoId: string) => {
        // TODO: Replace with actual API call
        return { success: true, data: [] };
    },
};
