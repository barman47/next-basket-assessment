import axios from 'axios';
// import store from '@/redux/store';
// import { logout } from '@/redux/features/authSlice';
// import setAuthToken from './setAuthToken';

export const handleError = (error: any, rejectWithValue: any, msg: string) => {
    // if (error.response.status === 401) {
    //     // user is not authenticated
    //     store.dispatch(logout());
    //     setAuthToken(undefined);
    //     return;
    // }
    if (error.message === 'Network Error') {
        return  rejectWithValue({
            data: { msg: 'Network Error' },
            success: false,
            statusCode: 503
        });
    }

    if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue({
            data: error.response.data.errors,
            success: false,
            statusCode: error.response.status
        });
    }
    return rejectWithValue({
        data: { msg },
        success: false,
        statusCode: 500
    });
};