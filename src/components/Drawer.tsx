import * as React from 'react';
import NextLink from 'next/link';

import { Box, 
    Drawer, 
    IconButton, 
    Link,
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText,
    Stack
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AlignHorizontalRight, CartOutline, Magnify } from 'mdi-material-ui';

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
}

const MobileDrawer: React.FC<Props> = ({ open, toggleDrawer }) => {
    const { classes } = useStyles();

    return (
        <Box component="nav" className={classes.root}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                <Link component={NextLink} href="/" underline="none" className={classes.link}>Bandage</Link>
                <Stack direction="row" spacing={3}>
                    <IconButton size="small">
                        <Magnify />
                    </IconButton>
                    <IconButton size="small">
                        <CartOutline />
                    </IconButton>
                    <IconButton size="small" onClick={toggleDrawer}>
                        <AlignHorizontalRight />
                    </IconButton>
                </Stack>
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
                </List>
            </Drawer>
        </Box>
    );
};

export default MobileDrawer;