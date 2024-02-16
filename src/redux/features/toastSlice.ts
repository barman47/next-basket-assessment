import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Toast {
    open?: boolean;
    autoHideDuration?: number;
    message: string | null;
    type: 'error' | 'info' | 'success' | 'warning' | null;
}

const initialState: Toast = {
    open: false,
    autoHideDuration: 3000,
    message: null,
    type: null
};

export const toast = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        clearToast: (state) => {
            state.open = false;
            state.message = null;
            state.type = null;
        },

        setToast: (state, action: PayloadAction<Toast>) => {
            state.open = true;
            state.autoHideDuration = action.payload.autoHideDuration || initialState.autoHideDuration;
            state.message = action.payload.message,
            state.type = action.payload.type
        }
    }
});

export const {
    clearToast,
    setToast
} = toast.actions;

export const selectIsToastOpen = (state: RootState) => state.toast.open;
export const selectAutoHideDuration = (state: RootState) => state.toast.autoHideDuration;
export const selectToastMessage = (state: RootState) => state.toast.message;
export const selectToastType = (state: RootState) => state.toast.type;

export default toast.reducer;