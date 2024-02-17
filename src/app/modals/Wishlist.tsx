'use client';

import * as React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Divider, 
    IconButton, 
    Modal,
    Stack,
    Theme,
    Tooltip,
    Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { WHITE } from '@/theme';
import { ModalRef } from '@/utils/constants';
import { AppDispatch } from '@/redux/store';
import { CartOff, Close } from 'mdi-material-ui';
import { WishlistItem } from '@/interfaces';
import { removeItemFromWishList, selectWishlistItems } from '@/redux/features/wishlistSlice';
import Link from 'next/link';

const useStyles = makeStyles()((theme: Theme) => ({
    root: {
        backgroundColor: WHITE,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        padding: theme.spacing(2, 2, 5, 2),
        transform: 'translate(-50%, -50%)',
        width: theme.spacing(100),

        [theme.breakpoints.down('md')]: {
            width: '75%'
        },
        
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    },

    wishlistRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2),
        columnGap: theme.spacing(2),

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
            columnGap: theme.spacing(1)
        }
    },

    label: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1)
        }
    },

    productImage: {
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(5),
            height: theme.spacing(5)
        },

        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(3),
            height: theme.spacing(3)
        }
    },

    wishlistContent: {
        height: '70vh',
        overflowY: 'auto'
    },

    title: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        textAlign: 'center',
        lineHeight: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },

    producTitle: {
        color: theme.palette.text.primary,
        fontSize: theme.spacing(2),
        fontWeight: 700,
        lineHeight: theme.spacing(3),

        [theme.breakpoints.down('md')]: {
            fontSize: theme.spacing(1.3)
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1)
        }
    },

    price: {
        color: theme.palette.text.secondary,
        fontWeight: 400,

        [theme.breakpoints.down('md')]: {
            fontSize: theme.spacing(1.3)
        },
        
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1)
        }
    },

    button: {
        '&.MuiButtonGroup-grouped': {
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(0),
                minWidth: '20px',
            }
        },

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0)
        }
    },

    total: {
        color: theme.palette.text.primary,
        fontSize: theme.spacing(2),
        fontWeight: 700,
        lineHeight: theme.spacing(3),

        [theme.breakpoints.down('md')]: {
            fontSize: theme.spacing(1)
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(0.8)
        }
    },

    icon: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(2)
        }
    },

    grandTotal: {
        color: theme.palette.text.primary,
        fontSize: theme.spacing(2),
        fontWeight: 700,
        lineHeight: theme.spacing(3),
    },

    emptyWishlist: {
        color: theme.palette.text.disabled,
        fontSize: theme.spacing(20)
    },

    emptyWishlistText: {
        fontWeight: 700,
        color: theme.palette.text.primary
    }
}));

interface Props {
    ref: any;
}

const WishlistModal: React.FC<Props> = React.forwardRef<ModalRef, Props>((_props: Props, ref: any) => {
    const { classes } = useStyles();
    const dispatch: AppDispatch = useDispatch();
    
    const wishlistItems = useSelector(selectWishlistItems);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useImperativeHandle(ref, () => ({
        openModal: () => {
            handleOpen();
        },

        closeModal: () => {
            handleClose();
        }
    }));

    const handleRemoveWishlistItem = (id: number): void => {
        dispatch(removeItemFromWishList(id));
    };
    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="wishlist-modal"
            disableEscapeKeyDown
        >
            <Box component="section" className={classes.root}>
                <IconButton onClick={handleClose} sx={{ alignSelf: 'flex-end' }} aria-label="close-button">
                    <Close />
                </IconButton>
                {wishlistItems.length > 0 && <Typography variant="h5" className={classes.title}>Your Wishlist ({wishlistItems.length} {`Item${wishlistItems.length === 1 ? '' : 's'}`})</Typography>}
                {wishlistItems.length > 0 ? 
                    <>
                        <Box component="div" className={classes.wishlistRow}>
                            <Typography variant="body1" component="p" className={classes.label}>Item</Typography>
                            <Typography variant="body1" component="p" className={classes.label}>Name</Typography>
                            <Typography variant="body1" component="p" className={classes.label}></Typography>
                        </Box>
                        <Divider />
                        <Box component="section" className={classes.wishlistContent}>
                            {wishlistItems.map((wishlistItem: WishlistItem) => (
                                <Box key={wishlistItem.id} component="div" className={classes.wishlistRow}>
                                    <Link href={`/products/${wishlistItem.id}`} onClick={handleClose}>
                                        <Image 
                                            src={wishlistItem.thumbnail}
                                            width={100}
                                            height={100}
                                            alt={wishlistItem.title}
                                            priority
                                            className={classes.productImage}
                                        />
                                    </Link>
                                    <Typography variant="h6" className={classes.producTitle}>{wishlistItem.title}</Typography>
                                    <IconButton 
                                        color="error" 
                                        onClick={() => handleRemoveWishlistItem(wishlistItem.id)}
                                        sx={{ justifySelf: 'center' }}
                                        aria-label="close-button"
                                    >
                                        <Tooltip title="Remove Item" arrow placement="bottom">
                                            <Close className={classes.icon} />
                                        </Tooltip>
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </>
                    :
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <CartOff className={classes.emptyWishlist} />
                        <Typography variant="h6" className={classes.emptyWishlistText}>No Items in Wishlist</Typography>
                    </Stack>
                }
            </Box>
        </Modal>
    );
});

WishlistModal.displayName = 'WishlistModal';

export default WishlistModal;