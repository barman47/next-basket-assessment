'use client';

import Image from 'next/image';
import {
    Stack,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
    root: {
        padding: theme.spacing(10, 17),

        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(10),
        },

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(6.9, 5),
        },

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6.9, 3)
        }
    },

    image: {
        width: theme.spacing(15),
        height: theme.spacing(10),
        objectFit: 'contain'
    },
}));

const Partners: React.FC<{}> = () => {
    const { classes } = useStyles();
    const theme = useTheme()
    const isTabletAndDown = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack direction={isTabletAndDown ? 'column' : 'row'} spacing={1} justifyContent="space-between" alignItems="center" className={classes.root}>
            <Image 
                src="/img/hooli.png"
                width={103}
                height={34}
                alt="Hooli"
                priority
                className={classes.image}
            />
            <Image 
                src="/img/lyft.png"
                width={103}
                height={34}
                alt="Lyft"
                priority
                className={classes.image}
            />
            <Image 
                src="/img/leaf.png"
                width={103}
                height={34}
                alt="Leaf"
                priority
                className={classes.image}
            />
            <Image 
                src="/img/stripe.png"
                width={103}
                height={34}
                alt="Stripe"
                priority
                className={classes.image}
            />
            <Image 
                src="/img/aws.png"
                width={103}
                height={34}
                alt="AWS"
                priority
                className={classes.image}
            />
            <Image 
                src="/img/reddit.png"
                width={103}
                height={34}
                alt="Reddit"
                priority
                className={classes.image}
            />
        </Stack>
    );
};

export default Partners;