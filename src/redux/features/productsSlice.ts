import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { handleError } from '@/utils/handleError';
import { ApiErrorResponse, ApiResponse, Error, Pagination } from '@/utils/constants';
import { Product } from '@/interfaces';
import { RootState } from '../store';

export type ProductError = Error & Product;

const API = 'https://dummyjson.com/products';

interface ProductsState {
    isLoading: boolean;
    pagination: Pagination;
    product: Product;
    products: Product[];
    msg: string | null;
    error: ProductError;
};

const initialState: ProductsState = {
    isLoading: false,
    pagination: {
        skip: 0,
        limit: 0,
        total: 0
    },
    product: {} as Product,
    products: [],
    msg: null,
    error: {} as ProductError
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
        setProduct: (state, action: PayloadAction<Product>) => {
            state.product = action.payload;
        },

        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },

        clearError: (state) => {
            state.error = {} as ProductError;
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
            // state.error = action.payload?.data;
        })
    }
});

export const {
    clearError,
    setProduct,
    setProducts,
} = products.actions;

export const selectProductErrors = (state: RootState) => state.products.error;
export const selectIsProductsLoading = (state: RootState) => state.products.isLoading;
export const selectPagination = (state: RootState) => state.products.pagination;
export const selectProduct = (state: RootState) => state.products.product;
export const selectProducts = (state: RootState) => state.products.products;

export default products.reducer;