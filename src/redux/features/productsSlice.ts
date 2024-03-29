import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { handleError } from '@/utils/handleError';
import { ApiErrorResponse, ApiResponse, Pagination } from '@/utils/constants';
import { Product } from '@/interfaces';
import { RootState } from '../store';

const API = `${process.env.NEXT_PUBLIC_API}/products`;

interface ProductsState {
    isLoading: boolean;
    pagination: Pagination;
    products: Product[];
    msg: string | null;
    error: string | null;
};

const initialState: ProductsState = {
    isLoading: false,
    pagination: {
        skip: 0,
        limit: 0,
        total: 0
    },
    products: [],
    msg: null,
    error: null
};

export const getProducts = createAsyncThunk<ApiResponse, number, { rejectValue: ApiErrorResponse }>('products/getProducts', async (skip, { rejectWithValue }) => {
    try {
        const res = await axios.get<ApiResponse>(`${API}/?limit=10&skip=${skip}`);
        return res.data;
    } catch (err) {
        return handleError(err, rejectWithValue, 'Failed to get products');
    }
});


export const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },

        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers(builder) {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload.skip === 0 ? action.payload.products : [...state.products, ...action.payload.products];
            state.pagination = { total: action.payload.total, skip: action.payload.skip, limit: action.payload.limit };
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.msg || 'Failed to get products';
        })
    }
});

export const {
    clearError,
    setProducts,
} = products.actions;

export const selectProductError = (state: RootState) => state.products.error;
export const selectIsProductsLoading = (state: RootState) => state.products.isLoading;
export const selectPagination = (state: RootState) => state.products.pagination;
export const selectProducts = (state: RootState) => state.products.products;

export default products.reducer;