import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WishlistItem } from '@/interfaces';
import { RootState } from '../store';

interface WishlistState {
    products: WishlistItem[];
};

const initialState: WishlistState = {
    products: []
};


export const wishlist = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItemToWishList: (state, action: PayloadAction<WishlistItem>) => {
            state.products = [...state.products, action.payload];
        },

        removeItemFromWishList: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(item => item.id !== action.payload);
        }
    }
});

export const {
    addItemToWishList,
    removeItemFromWishList
} = wishlist.actions;

export const selectWishlistItems = (state: RootState) => state.wishlist.products;

export default wishlist.reducer;