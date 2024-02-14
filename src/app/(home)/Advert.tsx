'use client';

import Image from 'next/image';
import {
    Box,
    Grid,
    Stack,
    Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
    root: {
        padding: theme.spacing(5, 17),

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 5),
        },

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 3),
        }
    },

    title: {
        color: theme.palette.text.secondary,
        fontWeight: 500,
        fontSize: theme.spacing(2.4),
        lineHeight: theme.spacing(3.6),
        textAlign: 'center'
    },

    subTitle: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        fontSize: theme.spacing(3),
        lineHeight: theme.spacing(4),
        textAlign: 'center'
    },

    text: {
        color: theme.palette.text.secondary,
        fontWeight: 500,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(2.6),
        textAlign: 'center'
    },

    service: {

    }
}));

const Advert: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <Stack component="section" className={classes.root} direction="column" spacing={1}>
            <Typography variant="body1" component="p" className={classes.title}>Featured Products</Typography>
            <Typography variant="h6" className={classes.subTitle}>THE BEST SERVICES</Typography>
            <Typography variant="subtitle2" className={classes.text}>Problems trying to resolve the conflict between</Typography>
        </Stack>
    );
};

export default Advert;