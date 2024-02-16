import { Product } from '@/interfaces';

export interface Error {
    msg?: string;
}

export interface ApiResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}

export interface ModalRef {
    openModal: () => void;
    closeModal: () => void;
}

export type Pagination = Omit<ApiResponse, 'products'>;

export type ApiErrorResponse = Omit<ApiResponse, 'token'>;