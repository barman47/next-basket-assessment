import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cart from './features/cartSlice';
import products from './features/productsSlice';
import wishlist from './features/wishlistSlice';

const rootReducer = combineReducers({
    cart,
    products,
    wishlist
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'wishlist']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig = {
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production'
};

const store = configureStore(storeConfig);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;