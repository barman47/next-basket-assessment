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

const Services: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Stack direction="column" spacing={1}>
                <Typography variant="body1" component="p" className={classes.title}>Featured Products</Typography>
                <Typography variant="h6" className={classes.subTitle}>THE BEST SERVICES</Typography>
                <Typography variant="subtitle2" className={classes.text}>Problems trying to resolve the conflict between</Typography>
            </Stack>
            <Grid container direction="row" spacing={10} mt={5}>
                <Grid item xs={12} md={4}>
                    <Stack direction="column" alignItems="center" spacing={1}>
                        <Image 
                            src="/img/wins.svg"
                            width={100}
                            height={100}
                            alt="Easy Wins"
                            className={classes.service}
                        />
                        <Typography variant="h6" className={classes.subTitle}>Easy Wins</Typography>
                        <Typography variant="subtitle2" className={classes.text}>Get your best looking smile now!</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="column" alignItems="center" spacing={1}>
                        <Image 
                            src="/img/book.svg"
                            width={100}
                            height={100}
                            alt="Concrete"
                            className={classes.service}
                        />
                        <Typography variant="h6" className={classes.subTitle}>Concrete</Typography>
                        <Typography variant="subtitle2" className={classes.text}>Defalcate is most focused in helping you discover your most beautiful smile</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack direction="column" alignItems="center" spacing={1}>
                        <Image 
                            src="/img/growth.svg"
                            width={100}
                            height={100}
                            alt="Easy Wins"
                            className={classes.service}
                        />
                        <Typography variant="h6" className={classes.subTitle}>Hack Growth</Typography>
                        <Typography variant="subtitle2" className={classes.text}>Overcame any hurdle or any other problem.</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Services;