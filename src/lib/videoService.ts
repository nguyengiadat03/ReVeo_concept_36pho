import { GenerationRequest, GenerationResult } from '../data/streets';

// Mock API service for video generation
export const generateVideo = async (request: GenerationRequest): Promise<GenerationResult> => {
    // Simulate API call with 3 second delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Simulate 90% success rate
    const isSuccess = Math.random() > 0.1;

    const result: GenerationResult = {
        id: Math.random().toString(36).substr(2, 9),
        requestId: request.id,
        videoUrl: isSuccess ? 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' : null,
        status: isSuccess ? 'success' : 'error',
        streetName: request.streetId,
        subcategoryName: request.subcategoryId,
        productUrl: request.productUrl,
        fileName: request.imageFile?.name || 'unknown',
        errorMessage: isSuccess ? undefined : 'Không thể tạo video. Vui lòng thử lại.',
        createdAt: new Date(),
    };

    return result;
};

export const validateProductUrl = (url: string): boolean => {
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
        return false;
    }
};
