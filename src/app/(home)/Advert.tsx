'use client';

import {
    Box,
    Button,
    Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundImage: `url(/img/hero.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.spacing(80),
        width: '100%',
        padding: theme.spacing(5, 40),
        textAlign: 'center',
        gap: theme.spacing(3.75),

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 5),
        },

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 2),
        }
    },

    title: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        fontSize: theme.spacing(5),
        lineHeight: theme.spacing(6.25)
    },

    subTitle: {
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(3)
    },

    text: {
        color: theme.palette.text.secondary,
        fontWeight: 500,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(2.6)
    },

    price: {
        color: theme.palette.secondary.main,
        fontWeight: 700,
        fontSize: theme.spacing(3),
        lineHeight: theme.spacing(4)
    }
}));

const Advert: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Typography variant="body1" component="p" className={classes.subTitle}>Designing Better Experience</Typography>
            <Typography variant="h4" className={classes.title}>Problems trying to resolve <br />the conflict between</Typography>
            <Typography variant="subtitle2" className={classes.text}>Problems trying to resolve the conflict between the two major realms of Classical physics:</Typography>
            <Typography variant="h6" className={classes.price}>&#36;16.48</Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                aria-label="signup-button"
            >
                Sign Up Now
            </Button>
        </Box>
    );
};

export default Advert;