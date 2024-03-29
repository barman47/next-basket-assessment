'use client';

import * as React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Breadcrumbs,
    Button,
    Divider,
    Grid,
    IconButton,
    Link,
    Rating,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { CartOutline, ChevronLeft, ChevronRight, Eye, HeartOutline } from 'mdi-material-ui';
import { CartItem, Product, WishlistItem } from '@/interfaces';
import { BLACK, LIGHT_GREY, WHITE } from '@/theme';
import numbro from 'numbro';
import { AppDispatch } from '@/redux/store';
import { addItemToCart, selectCartItems } from '@/redux/features/cartSlice';
import { addItemToWishList, selectWishlistItems } from '@/redux/features/wishlistSlice';
import { setToast } from '@/redux/features/toastSlice';

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: LIGHT_GREY,
        marginTop: theme.spacing(20),
        padding: theme.spacing(5, 17, 10, 17),

        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(10),
        },

        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            padding: theme.spacing(6.9, 5),
        },

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6.9, 3)
        }
    },

    thumbnail: {
        width: '100%',
        height: theme.spacing(56),
        objectFit: 'cover',
        objectPosition: 'center'
    },

    image: {
        cursor: 'pointer',
        objectFit: 'cover',
        width: theme.spacing(12.5),
        height: theme.spacing(9.4),

        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(4),
            height: theme.spacing(4)
        }
    },

    currentImage: {
        border: `2px solid ${theme.palette.primary.main}`
    },

    leftButton: {
        position: 'absolute',
        left: 20,
        top: 210
    },

    rightButton: {
        position: 'absolute',
        right: 0,
        top: 210
    },

    buttonIcon: {
        color: WHITE,
        fontSize: theme.spacing(10)
    },

    productName: {
        color: theme.palette.text.primary,
        fontWeight: 400,
        fontSize: theme.spacing(2.5),
        lineHeight: theme.spacing(3.75)  
    },

    details: {
        color: theme.palette.text.secondary,
        lineHeight: theme.spacing(3),
        fontSize: theme.spacing(1.75),
        fontWeight: 700
    },

    price: {
        color: theme.palette.text.primary,
        lineHeight: theme.spacing(4),
        fontSize: theme.spacing(3),
        fontWeight: 700
    },

    circle: {
        borderRadius: '50%',
        cursor: 'pointer',
        width: '30px',
        height: '30px'
    },

    iconButton: {
        border: '1px solid #E8E8E8'
    },

    icon: {
        color: BLACK
    },

    disabledIcon: {
        color: `${theme.palette.text.disabled} !important`
    }
}));

interface Props {
    product: Product;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
    const { classes, cx } = useStyles();
    const dispatch: AppDispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    const wishListItems = useSelector(selectWishlistItems);
    const { id, images, price, rating, stock, thumbnail, title } = product;

    const isItemInCart = (id: number): boolean => {
        const itemIndex = cartItems.findIndex(item => item.id === id);
        return itemIndex === -1 ? false : true;
    };

    const isItemInWishlist = (id: number): boolean => {
        const itemIndex = wishListItems.findIndex(item => item.id === id);
        return itemIndex === -1 ? false : true;
    };

    const [currentImage, setCurrentImage] = React.useState(thumbnail);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(images.findIndex(image => image === thumbnail));
    
    const itemExistsInCart = isItemInCart(id);
    const itemExistsInWishlist = isItemInWishlist(id);

    const showNextImage = (): void => {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0);
            setCurrentImage(images[0])
        } else {
            setCurrentImageIndex(prevIndex => {
                setCurrentImage(images[prevIndex + 1]);
                return prevIndex + 1;
            });
        }
    };

    const showPreviousImage = (): void => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
            setCurrentImage(images[images.length - 1])
        } else {
            setCurrentImageIndex(prevIndex => {
                setCurrentImage(images[prevIndex - 1]);
                return prevIndex - 1;
            });
        }
    };

    const handleShowImage = (image: string): void => {
        setCurrentImage(image);
        setCurrentImageIndex(images.findIndex(item => item === image))
    };

    const handleAddItemToCart = (cartItem: CartItem): void => {
        dispatch(addItemToCart(cartItem));
        dispatch(setToast({
            type: 'success',
            message: 'Item added to cart'
        }));
    };

    const handleAddItemToWishlist = (wishlistItem: WishlistItem): void => {
        dispatch(addItemToWishList(wishlistItem));
        dispatch(setToast({
            type: 'success',
            message: 'Item added to wishlist'
        }));
    };

    return (
        <Box component="section" className={classes.root}>
            <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRight />}
            >
                <Link href="/" component={NextLink}>Home</Link>
                <Link href="#!" component={NextLink} color="text.secondary">Shop</Link>
            </Breadcrumbs>
            <Grid container direction="row" mt={1} spacing={4}>
                <Grid item md={12} lg={6} sx={{ position: 'relative', width: '100%' }}>
                    <Image 
                        src={currentImage}
                        width={506}
                        height={450}
                        alt={title}
                        priority
                        className={classes.thumbnail}
                    />
                    <IconButton className={classes.leftButton} onClick={showPreviousImage} aria-label="previous-button">
                        <ChevronLeft className={classes.buttonIcon} />
                    </IconButton>
                    <IconButton className={classes.rightButton} onClick={showNextImage} aria-label="next-button">
                        <ChevronRight className={classes.buttonIcon} />
                    </IconButton>
                    <Stack direction="row" spacing={2} mt={1}>
                        {images.map((image: string) => (
                            <Image 
                                key={image}
                                src={image}
                                width={100}
                                height={75}
                                alt={title}
                                priority
                                className={cx(classes.image, {[classes.currentImage]: image === currentImage })}
                                onClick={() => handleShowImage(image)}
                            />  
                        ))}
                    </Stack>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Stack direction="column" spacing={10}>
                        <Stack direction="column" spacing={2}>
                            <Typography variant="h6" className={classes.productName}>{title}</Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Rating value={rating} readOnly />
                                <Typography variant="body2" component="p" className={classes.details}>10 Reviews</Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.price}>&#36;{numbro(price).format({ thousandSeparated: true, mantissa: 2 })}</Typography>
                            <Typography variant="body2" component="p" className={classes.details}>
                                Availability: &nbsp;
                                <Typography 
                                    variant="subtitle2" 
                                    component="span" 
                                    color={stock ? 'primary' : 'error'}
                                >
                                    {stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Typography>
                            </Typography>
                        </Stack>
                        <Stack direction="column" spacing={2}>
                            <Divider />
                            <Stack direction="row" spacing={1}>
                                <Box component="div" className={classes.circle} sx={{ backgroundColor: '#23A6F0' }}></Box>
                                <Box component="div" className={classes.circle} sx={{ backgroundColor: '#2DC071' }}></Box>
                                <Box component="div" className={classes.circle} sx={{ backgroundColor: '#E77C40' }}></Box>
                                <Box component="div" className={classes.circle} sx={{ backgroundColor: '#252B42' }}></Box>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="medium"
                                aria-label="options-button"
                            >
                                Select Options
                            </Button>
                            <IconButton 
                                className={classes.iconButton} 
                                onClick={() => handleAddItemToWishlist({
                                    id,
                                    thumbnail,
                                    title
                                })}
                                disabled={itemExistsInWishlist}
                                aria-label="wishlist-button"
                            >
                                <Tooltip title="Add to Wishlist" arrow placement="bottom">
                                    <HeartOutline className={cx(classes.icon, {[classes.disabledIcon]: itemExistsInWishlist})} />
                                </Tooltip>
                            </IconButton>
                            <IconButton 
                                className={classes.iconButton}
                                onClick={() => {
                                    handleAddItemToCart({
                                        id,
                                        price,
                                        title,
                                        thumbnail,
                                        quantity: 1,
                                        total: price
                                    });
                                }}
                                disabled={itemExistsInCart}
                                aria-label="cart-button"
                            >
                                <Tooltip title="Add to Cart" arrow placement="bottom">
                                    <CartOutline className={cx(classes.icon, {[classes.disabledIcon]: itemExistsInCart})} />
                                </Tooltip>
                            </IconButton>
                            <IconButton className={classes.iconButton} aria-label="view-button">
                                <Eye className={classes.icon} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetail;
