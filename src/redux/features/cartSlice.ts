import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/interfaces';
import { RootState } from '../store';

interface CartState {
    products: CartItem[];
    total: number;
};

const initialState: CartState = {
    products: [],
    total: 0
};


export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            state.products = [...state.products, action.payload];
            state.total = state.total + action.payload.price;
        },

        removeItemFromCart: (state, action: PayloadAction<{ id: number; price: number }>) => {
            state.products = state.products.filter(item => item.id !== action.payload.id);
            state.total = state.total - action.payload.price;
        },

        increaseItemQuantity: (state, action: PayloadAction<CartItem>) => {
            state.products = [...state.products, action.payload];
            state.total = state.total + action.payload.price;
        },

        decreaseItemQuantity: (state, action: PayloadAction<CartItem>) => {
            state.products = [...state.products, action.payload];
            state.total = state.total - action.payload.price;
        }
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = cart.actions;

export const selectCartItems = (state: RootState) => state.cart.products;
export const selectCartTotal = (state: RootState) => state.cart.total;

export default cart.reducer;