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

        removeItemFromCart: (state, action: PayloadAction<number>) => {
            let itemIndex = - 1;
            const item: CartItem = state.products.find((item: CartItem, index: number) => {
                if (item.id === action.payload) {
                    itemIndex = index;
                    return item;
                }
            })!;

            const products = [...state.products];
            products.splice(itemIndex, 1);
            
            state.products = products;
            state.total = state.total - item.total;
        },

        increaseItemQuantity: (state, action: PayloadAction<number>) => {
            let itemIndex = - 1;
            const item: CartItem = state.products.find((item: CartItem, index: number) => {
                if (item.id === action.payload) {
                    itemIndex = index;
                    return item;
                }
            })!;

            item.total = item.total + item.price;
            item.quantity = item.quantity + 1;
            const products = [...state.products];
            products.splice(itemIndex, 1, item);

            state.products = products;
            state.total = state.total + item.price;
        },

        decreaseItemQuantity: (state, action: PayloadAction<number>) => {
            let itemIndex = - 1;
            const item: CartItem = state.products.find((item: CartItem, index: number) => {
                if (item.id === action.payload) {
                    itemIndex = index;
                    return item;
                }
            })!;

            item.total = item.total - item.price;
            item.quantity = item.quantity - 1;
            const products = [...state.products];
            products.splice(itemIndex, 1, item);

            state.products = products;
            state.total = state.total - item.price;
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
export const selectCartItemCount = (state: RootState) => state.cart.products.length;
export const selectCartTotal = (state: RootState) => state.cart.total;

export default cart.reducer;