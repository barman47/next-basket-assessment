'use client';

import NextLink from 'next/link';
import { 
    Box,
    Button,
    FormHelperText,
    Grid,
    IconButton,
    Link,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Facebook, Instagram, Twitter } from 'mdi-material-ui';
import { LIGHT_GREY } from '@/theme';

const useStyles = makeStyles()(theme => ({
    logoContainer: {
        backgroundColor: LIGHT_GREY
    },
    
    logoWrapper: {
        backgroundColor: LIGHT_GREY,
        padding: theme.spacing(5, 10, 0, 10),

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 5)
        }
    },  

    link: {
        fontSize: theme.spacing(3),
        lineHeight: theme.spacing(4)
    },

    line: {
        marginTop: theme.spacing(5),
        borderBottom: '1px solid #E6E6E6',
    },

    title: {
        color: theme.palette.text.primary,
        fontSize: theme.spacing(2),
        fontWeight: 700,
        lineHeight: theme.spacing(3)
    },

    footerLinks: {
        padding: theme.spacing(5, 10),

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 5)
        }
    },

    footerLink: {
        color: theme.palette.text.secondary
    },

    formContainer: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr'
    },

    copyRight: {
        backgroundColor: LIGHT_GREY,
        padding: theme.spacing(5, 10),

        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            padding: theme.spacing(2, 5)
        }
    }
}));

const Footer: React.FC<{}> = () => {
    const { classes, cx } = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="footer">
            <Box className={classes.logoWrapper}>
                <Stack direction={isMobile ? 'column' : 'row'} justifyContent="space-between">
                    <Link component={NextLink} href="/" underline="none" className={classes.link}>Bandage</Link>
                    <Stack direction="row" spacing={1}>
                        <IconButton size="small" color="primary">
                            <Facebook />
                        </IconButton>
                        <IconButton size="small" color="primary">
                            <Instagram />
                        </IconButton>
                        <IconButton size="small" color="primary">
                            <Twitter />
                        </IconButton>
                    </Stack>
                </Stack>
                <Box component="div" justifySelf="flex-end" className={classes.line}></Box>
            </Box>
            <Grid container direction="row" className={classes.footerLinks}>
                <Grid item xs={12} md={2}>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h6" className={classes.title}>Company Info</Typography>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>About Us</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Carrier</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>We are hiring</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Blog</Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h6" className={classes.title}>Legal</Typography>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>About Us</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Carrier</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>We are hiring</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Blog</Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h6" className={classes.title}>Features</Typography>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Business Marketing</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>User Analytic</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Live Chat</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Unlimited Support</Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h6" className={classes.title}>Resources</Typography>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>IOS &amp; Android</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Watch a Demo</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>Customers</Link>
                        <Link component={NextLink} href="#!" underline="none" className={classes.footerLink}>API</Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h6" className={classes.title}>Get In Touch</Typography>
                        <form>
                            <Box component="div" className={classes.formContainer}>
                                <TextField 
                                    type="email"
                                    variant="outlined"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Subscribe
                                </Button>
                            </Box>
                        </form>
                        <FormHelperText>Lore imp sum dolor Amit</FormHelperText>
                    </Stack>
                </Grid>
            </Grid>
            <Typography variant="h6" className={cx([classes.footerLinks, classes.copyRight])}>Made With Love By Finland All Right Reserved </Typography>
        </Box>
    );
};

export default Footer;