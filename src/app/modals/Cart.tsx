'use client';

import * as React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Button, 
    ButtonGroup, 
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
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart, selectCartItemCount, selectCartItems, selectCartTotal } from '@/redux/features/cartSlice';
import { CartOff, Close } from 'mdi-material-ui';
import { CartItem } from '@/interfaces';
import numbro from 'numbro';
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

    cartRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
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

    cartContent: {
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

    emptyCart: {
        color: theme.palette.text.disabled,
        fontSize: theme.spacing(20)
    },

    emptyCartText: {
        fontWeight: 700,
        color: theme.palette.text.primary
    }
}));

interface Props {
    ref: any;
}

const CartModal: React.FC<Props> = React.forwardRef<ModalRef, Props>((_props: Props, ref: any) => {
    const { classes } = useStyles();
    const dispatch: AppDispatch = useDispatch();
    
    const cartItemCount = useSelector(selectCartItemCount);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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

    const handleIncreaseCartItemCount = (id: number): void => {
        dispatch(increaseItemQuantity(id));
    };

    const handleDecreaseCartItemCount = (id: number): void => {
        dispatch(decreaseItemQuantity(id));
    };

    const handleRemoveCartItem = (id: number): void => {
        dispatch(removeItemFromCart(id));
    };
    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="cart-modal"
            disableEscapeKeyDown
        >
            <Box component="section" className={classes.root}>
                <IconButton onClick={handleClose} sx={{ alignSelf: 'flex-end' }} aria-label="close-button">
                    <Close />
                </IconButton>
                {cartItemCount > 0 && <Typography variant="h5" className={classes.title}>Your Cart ({cartItemCount} {`Item${cartItemCount === 1 ? '' : 's'}`})</Typography>}
                {cartItemCount ? 
                    <>
                        <Box component="div" className={classes.cartRow}>
                            <Typography variant="body1" component="p" className={classes.label}>Item</Typography>
                            <Typography variant="body1" component="p" className={classes.label}>Name</Typography>
                            <Typography variant="body1" component="p" className={classes.label}>Price</Typography>
                            <Typography variant="body1" component="p" className={classes.label}>Quantity</Typography>
                            <Typography variant="body1" component="p" className={classes.label}>Total</Typography>
                        </Box>
                        <Divider />
                        <Box component="section" className={classes.cartContent}>
                            {cartItems.map((cartItem: CartItem) => (
                                <Box key={cartItem.id} component="div" className={classes.cartRow}>
                                    <Link href={`/products/${cartItem.id}`} onClick={handleClose}>
                                        <Image 
                                            src={cartItem.thumbnail}
                                            width={100}
                                            height={100}
                                            alt={cartItem.title}
                                            priority
                                            className={classes.productImage}
                                        />
                                    </Link>
                                    <Typography variant="h6" className={classes.producTitle}>{cartItem.title}</Typography>
                                    <Typography variant="body2" component="p" className={classes.price}>&#36;{numbro(cartItem.price).format({ thousandSeparated: true, mantissa: 2 })}</Typography>
                                    <ButtonGroup size="small" aria-label="item-quantity">
                                        <Button
                                            onClick={() => handleDecreaseCartItemCount(cartItem.id)}
                                            disabled={cartItem.quantity === 1}
                                            classes={{ root: classes.button }}
                                            aria-label="decrease-quantity-button"
                                        >
                                            -
                                        </Button>
                                        <Button 
                                            disabled
                                            classes={{ root: classes.button }}
                                            aria-label="quantity-value"
                                        >
                                            {cartItem.quantity}
                                        </Button>
                                        <Button 
                                            onClick={() => handleIncreaseCartItemCount(cartItem.id)}
                                            classes={{ root: classes.button }}
                                            aria-label="increase-quantity-button"
                                        >
                                            +
                                        </Button>
                                    </ButtonGroup>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Typography variant="h6" className={classes.total}>&#36;{numbro(cartItem.total).format({ thousandSeparated: true, mantissa: 2 })}</Typography>
                                        <IconButton 
                                            color="error" 
                                            onClick={() => handleRemoveCartItem(cartItem.id)}
                                            aria-label="close-button"
                                        >
                                            <Tooltip title="Remove Item" arrow placement="bottom">
                                                <Close className={classes.icon} />
                                            </Tooltip>
                                        </IconButton>
                                    </Stack>
                                </Box>
                            ))}
                        </Box>
                        <Stack 
                            direction="row" spacing={5} 
                            alignItems="center" 
                            justifyContent="flex-end" 
                            sx={{ position: 'fixed', bottom: 0, left: 30 }}
                        >
                            <Typography variant="h6" color="primary">Total:</Typography>
                            <Typography variant="h6" className={classes.grandTotal}>{numbro(cartTotal).format({ thousandSeparated: true, mantissa: 2 })}</Typography>
                        </Stack>
                    </>
                    :
                    <Stack direction="column" justifyContent="center" alignItems="center">
                        <CartOff className={classes.emptyCart} />
                        <Typography variant="h6" className={classes.emptyCartText}>No Item in Cart</Typography>
                    </Stack>
                }
            </Box>
        </Modal>
    );
});

CartModal.displayName = 'CartModal';

export default CartModal;