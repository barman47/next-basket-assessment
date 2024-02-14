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
        color: 'inherit',
        fontSize: theme.spacing(1.75),
        fontWeight: 700,
        lineHeight: theme.spacing(3),
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

    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prevState) => !prevState);
    };

    return (
        <>
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
                        >
                            michelle.rivera@example.com
                        </Button>
                    </Stack>
                    <Typography variant="body2" component="p" className={classes.buttonLink}>Follow Us  and get a chance to win 80% off</Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" component="p" className={classes.buttonLink}>Follow Us : </Typography>
                        <IconButton size="small" color="inherit">
                            <Instagram />
                        </IconButton>
                        <IconButton size="small" color="inherit">
                            <Youtube />
                        </IconButton>
                        <IconButton size="small" color="inherit">
                            <Facebook />
                        </IconButton>
                        <IconButton size="small" color="inherit">
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
                            <IconButton size="small" color="primary">
                                <Magnify />
                            </IconButton>
                            <CustomizedBadge 
                                icon={<CartOutline />}
                                count={1}
                            />
                            <CustomizedBadge 
                                icon={<HeartOutline />}
                                count={1}
                            />
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
            <MobileDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
}

export default Header;