'use client'

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import store, { persistor } from './store';
import Toast from '@/components/Toast';


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Toast />
                {children}
            </PersistGate>
        </Provider>
    );
}