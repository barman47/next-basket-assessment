'use client';

import {
    Box,
    Typography,
    Button
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Product from './Product';

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(20),
        padding: theme.spacing(10, 17),

        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(10, 5)
        },

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            padding: theme.spacing(6.9, 5),
        },

        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(5),
            padding: theme.spacing(6.9, 3)
        }
    },

    subTitle: {
        color: theme.palette.text.secondary,
        fontSize: theme.spacing(2.5),
        fontWeight: 400,
        lineHeight: theme.spacing(3.75),
        textAlign: 'center'
    },

    title: {
        color: theme.palette.text.primary,
        fontSize: theme.spacing(3),
        fontWeight: 700,
        lineHeight: theme.spacing(4),
        marginTop: theme.spacing(2),
        textAlign: 'center'
    },

    text: {
        color: theme.palette.text.secondary,
        fontSize: theme.spacing(1.75),
        fontWeight: 400,
        lineHeight: theme.spacing(2.5),
        marginTop: theme.spacing(2),
        textAlign: 'center'
    },

    cardGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        columnGap: theme.spacing(3),
        rowGap: theme.spacing(5),
        marginTop: theme.spacing(8),

        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        },

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)'
        },

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            padding: theme.spacing(0)
        },
    },

    button: {
        alignSelf: 'center',
        marginTop: theme.spacing(5)
    }
}));

const Products: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Typography variant="body1" component="p" className={classes.subTitle}>Featured Products</Typography>
            <Typography variant="h5" className={classes.title}>BESTSELLER PRODUCTS</Typography>
            <Typography variant="body2" component="p" className={classes.text}>Problems trying to resolve the conflict between </Typography>
            <Box component="section" className={classes.cardGrid}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Box>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                classes={{ root: classes.button }}
            >
                LOAD MORE PRODUCTS
            </Button>
        </Box>
    );
};

export default Products;