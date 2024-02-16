import * as React from 'react';
import NextLink from 'next/link';

import { useSelector } from 'react-redux';
import { Box, 
    Button, 
    Drawer, 
    IconButton, 
    Link,
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText,
    Stack,
    Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AccountOutline, AlignHorizontalRight, CartOutline, HeartOutline, Magnify } from 'mdi-material-ui';

import CustomizedBadge from './CustomizedBadge';
import { selectCartItemCount } from '@/redux/features/cartSlice';
import { selectWishlistItemCount } from '@/redux/features/wishlistSlice';

const useStyles = makeStyles()((theme) => ({
    root: {
        display: 'none',
        padding: theme.spacing(1.5, 3),
        
        [theme.breakpoints.down('md')]: {
            display: 'block',
        }
    },

    link: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        fontSize: theme.spacing(3),
        lineHeight: theme.spacing(4)
    },

    navLink: {
        color: theme.palette.text.secondary,
        fontWeight: 700,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(3)
    },
}));

interface Props {
    open: boolean;
    toggleDrawer(): void;
    openCartModal(): void;
    openWishlistModal(): void;
}

const MobileDrawer: React.FC<Props> = ({ open, toggleDrawer, openCartModal, openWishlistModal }) => {
    const { classes } = useStyles();

    const cartItemCount = useSelector(selectCartItemCount);
    const wishlistCount = useSelector(selectWishlistItemCount);

    const handleOpenCartModal = (): void => {
        openCartModal();
        toggleDrawer();
    };

    const handleOpenWishlistModal = (): void => {
        openWishlistModal();
        toggleDrawer();
    };

    return (
        <Box component="nav" className={classes.root}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                <Link component={NextLink} href="/" underline="none" className={classes.link}>Bandage</Link>
                <IconButton size="small" onClick={toggleDrawer}>
                    <AlignHorizontalRight />
                </IconButton>
            </Stack>
            <Drawer
                variant="temporary"
                open={open}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                anchor="top"
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={NextLink} href="/" sx={{ textAlign: 'center' }} onClick={toggleDrawer}>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={NextLink} href="#!" sx={{ textAlign: 'center' }} onClick={toggleDrawer}>
                            <ListItemText primary="Product" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={NextLink} href="#!" sx={{ textAlign: 'center' }} onClick={toggleDrawer}>
                            <ListItemText primary="Pricing" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton LinkComponent={NextLink} href="#!" sx={{ textAlign: 'center' }} onClick={toggleDrawer}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                    <Stack direction="row" justifyContent="center">
                        <Button
                            variant="text"
                            color="primary"
                            size="small"
                            startIcon={<AccountOutline />}
                        >
                            Login
                        </Button>
                        <Typography variant="subtitle1" component="span" color="primary">/</Typography>
                        <Button
                            variant="text"
                            color="primary"
                            size="small"
                        >
                            Register
                        </Button>
                    </Stack>
                    <Stack direction="column" justifyContent="center">
                        <IconButton size="small" color="primary">
                            <Magnify />
                        </IconButton>
                        <CustomizedBadge 
                            icon={<CartOutline />}
                            count={cartItemCount}
                            handleClick={handleOpenCartModal}
                        />
                        <CustomizedBadge 
                            icon={<HeartOutline />}
                            count={wishlistCount}
                            handleClick={handleOpenWishlistModal}
                        />
                    </Stack>
                </List>
            </Drawer>
        </Box>
    );
};

export default MobileDrawer;