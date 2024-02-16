import React from 'react';
import { clearToast, selectAutoHideDuration, selectIsToastOpen, selectToastMessage, selectToastType } from '@/redux/features/toastSlice';
import {
    Alert,
    IconButton,
    Snackbar 
} from '@mui/material';
import { Close } from 'mdi-material-ui';
import { useDispatch, useSelector } from 'react-redux';

const Toast: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const open = useSelector(selectIsToastOpen);
    const autoHideDuration = useSelector(selectAutoHideDuration);
    const type = useSelector(selectToastType);
    const message = useSelector(selectToastMessage);

    const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(clearToast());
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    if (!open) {
        return null;
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
            disableWindowBlurListener={true}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert
                title='Alert Title'
                severity={type!}
                action={action}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Toast;