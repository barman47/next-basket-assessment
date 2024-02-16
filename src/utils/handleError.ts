export const handleError = (error: any, rejectWithValue: any, msg: string) => {
    if (error.message === 'Network Error') {
        return  rejectWithValue({
            msg: 'Network Error',
            success: false,
            statusCode: 503
        });
    }

    rejectWithValue({
        msg,
        success: false,
        statusCode: 503
    });
};