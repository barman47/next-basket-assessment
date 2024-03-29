'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { 
    AppBar, 
    Stack, 
    Link,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AccountOutline, CartOutline, ChevronDown, EmailOutline, Facebook, HeartOutline, Instagram, Magnify, PhoneOutline, Twitter, Youtube } from 'mdi-material-ui';

import { WHITE } from '@/theme';
import CustomizedBadge from './CustomizedBadge';
import MobileDrawer from './Drawer';
import CartModal from '@/app/modals/Cart';
import { ModalRef } from '@/utils/constants';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '@/redux/features/cartSlice';
import { selectWishlistItemCount } from '@/redux/features/wishlistSlice';
import WishlistModal from '@/app/modals/Wishlist';

const useStyles = makeStyles()((theme) => ({
    root: {
        backgroundColor: WHITE,

        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },

    navHeader: {
        backgroundColor: '#23856D',
        color: WHITE,
        padding: theme.spacing(1.5, 3),
        width: '100%',

        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },

    buttonLink: {
        color: 'inherit'
    },

    link: {
        fontSize: theme.spacing(3)
    },

    navLink: {
        color: theme.palette.text.secondary
    },

    shopButton: {
        color: 'inherit',
        fontWeight: 500, 
        lineHeight: '28px', 
        fontSize: theme.spacing(1.75),

        '&:hover': {
            backgroundColor: 'inherit'
        }
    }
}));

const Header: React.FC<{}> = () => {
    const { classes } = useStyles();

    const cartItemCount = useSelector(selectCartItemCount);
    const wishlistCount = useSelector(selectWishlistItemCount);

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const cartModalRef = React.useRef<ModalRef>();
    const wishlistModalRef = React.useRef<ModalRef>();

    const toggleDrawer = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    const openCartModal = () => {
        cartModalRef.current?.openModal();
    };

    const openWishlistModal = () => {
        wishlistModalRef.current?.openModal();
    };

    return (
        <>
            <CartModal ref={cartModalRef} />
            <WishlistModal ref={wishlistModalRef} />
            <AppBar component="nav" elevation={0} className={classes.root}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" component="section" className={classes.navHeader}>
                    <Stack direction="row" alignItems="center">
                        <Button
                            variant="text"
                            size="small"
                            startIcon={<PhoneOutline />}
                            LinkComponent="a"
                            href="tel:(225) 555-0118"
                            classes={{ root: classes.buttonLink }}
                            aria-label="phone-number-button"
                        >
                            (225) 555-0118
                        </Button>
                        <Button
                            variant="text"
                            size="small"
                            startIcon={<EmailOutline />}
                            LinkComponent="a"
                            href="mailto:michelle.rivera@example.com"
                            classes={{ root: classes.buttonLink }}
                            aria-label="email-button"
                        >
                            michelle.rivera@example.com
                        </Button>
                    </Stack>
                    <Typography variant="body2" component="p" className={classes.buttonLink}>Follow Us  and get a chance to win 80% off</Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" component="p" className={classes.buttonLink}>Follow Us : </Typography>
                        <IconButton size="small" color="inherit" aria-label="instagram-button">
                            <Instagram />
                        </IconButton>
                        <IconButton size="small" color="inherit" aria-label="youtube-button">
                            <Youtube />
                        </IconButton>
                        <IconButton size="small" color="inherit" aria-label="facebook-button">
                            <Facebook />
                        </IconButton>
                        <IconButton size="small" color="inherit" aria-label="twitter-button">
                            <Twitter />
                        </IconButton>
                    </Stack>
                </Stack>
                <Toolbar>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                        <Stack direction="row" alignItems="center" spacing={15}>
                            <Link component={NextLink} href="/" underline="none" className={classes.link}>Bandage</Link>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Link component={NextLink} href="/" underline="none" className={classes.navLink}>Home</Link>
                                <Button
                                    variant="text"
                                    size="small"
                                    color="secondary"
                                    endIcon={<ChevronDown />}
                                    classes={{ root: classes.shopButton }}
                                    aria-label="shop-button"
                                >
                                    Shop
                                </Button>
                                <Link component={NextLink} href="#!" underline="none" className={classes.navLink}>About</Link>
                                <Link component={NextLink} href="#!" underline="none" className={classes.navLink}>Blog</Link>
                                <Link component={NextLink} href="#!" underline="none" className={classes.navLink}>Contact</Link>
                                <Link component={NextLink} href="#!" underline="none" className={classes.navLink}>Pages</Link>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={3}>
                            <Stack direction="row">
                                <Button
                                    variant="text"
                                    color="primary"
                                    size="small"
                                    startIcon={<AccountOutline />}
                                    aria-label="login-button"
                                >
                                    Login
                                </Button>
                                <Typography variant="subtitle1" component="span" color="primary">/</Typography>
                                <Button
                                    variant="text"
                                    color="primary"
                                    size="small"
                                    aria-label="signup-button"
                                >
                                    Register
                                </Button>
                            </Stack>
                            <IconButton size="small" color="primary">
                                <Magnify />
                            </IconButton>
                            <CustomizedBadge 
                                icon={<CartOutline />}
                                count={cartItemCount}
                                handleClick={openCartModal}
                            />
                            <CustomizedBadge 
                                icon={<HeartOutline />}
                                count={wishlistCount}
                                handleClick={openWishlistModal}
                            />
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <MobileDrawer 
                open={drawerOpen} 
                toggleDrawer={toggleDrawer} 
                openCartModal={openCartModal}
                openWishlistModal={openWishlistModal}
            />
        </>
    );
}

export default Header;