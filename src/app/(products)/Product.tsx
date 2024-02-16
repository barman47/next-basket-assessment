'use client';

import Link from 'next/link';
import {
    Card,
    CardMedia,
    CardContent,
    Stack,
    Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import numbro from 'numbro';

import { Product as ProductData } from '@/interfaces';
import { getDiscountedPrice } from '@/utils/getDiscountedPrice';

const useStyles = makeStyles()(theme => ({
    card: {
        position: 'relative',
        minWidth: 183,

        [theme.breakpoints.down('lg')]: {
            minWidth: 300
        },

        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
        }
    },

    cardTitle: {
        color: theme.palette.text.primary,
        fontWeight: 400,
        fontSize: theme.spacing(2.5),
        lineHeight: theme.spacing(3.75),
        textAlign: 'center'
    },

    cardText: {
        color: theme.palette.text.secondary,
        fontSize: theme.spacing(1.5),
        fontWeight: 700,
        lineHeight: theme.spacing(3),
        textAlign: 'center'
    },

    price: {
        fontWeight: 700,
        fontSize: theme.spacing(2),
        lineHeight: theme.spacing(3),
        textAlign: 'center'
    }
}));

interface Props {
    product: ProductData;
}

const Product: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    const { title, category, thumbnail, price, discountPercentage } = product;

    return (
        <Link href="#!" style={{ textDecoration: 'none' }}>
            <Card elevation={0} className={classes.card}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={thumbnail}
                    title={title}
                />
                <CardContent>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="body1" component="p" className={classes.cardTitle}>{title}</Typography>
                        <Typography variant="body1" component="p" className={classes.cardText}>{category}</Typography>
                        <Stack direction="row" justifyContent="center" spacing={2} sx={{ width: '100%' }}>
                            <Typography variant="body1" component="p" className={classes.price} color="text.disabled">&#36;{numbro(price).format({ thousandSeparated: true, mantissa: 0 })}</Typography>
                            <Typography variant="body1" component="p" className={classes.price} color="secondary">&#36;{numbro(getDiscountedPrice(price, discountPercentage)).format({ thousandSeparated: true, mantissa: 2 })}</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
};

export default Product;