'use client';

import Image from 'next/image';
import {
    Avatar,
    Box,
    Rating,
    Stack,
    Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        marginTop: theme.spacing(20),
        gap: theme.spacing(15),
        padding: theme.spacing(10, 17),
        alignItems: 'center',

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            marginTop: 0,
            padding: theme.spacing(6.9, 5),
        },

        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(5),
            padding: theme.spacing(6.9, 3)
        }
    },

    title: {
        fontSize: theme.spacing(3),
        fontWeight: 700,
        lineHeight: theme.spacing(4)
    },

    subTitle: {
        color: theme.palette.text.secondary,
        fontSize: theme.spacing(1.75),
        fontWeight: 700,
        lineHeight: theme.spacing(4)
    },

    text: {
        fontWeight: 700,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(3)
    },

    imageList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },

    image: {
        objectFit: 'cover',
        width: '142px',
        height: '142px',

        [theme.breakpoints.down('sm')]: {
            width: '100px',
            height: '100px',   
        }
    }
}));

const Review: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Stack direction="column" alignItems="center" spacing={4} sx={{ textAlign: 'center' }}>
                <Typography variant="h5" className={classes.title}>What they say about us</Typography>
                <Avatar src="/img/user-review.jpg" sx={{ width: 90, height: 90 }} alt="avatar" />
                <Rating readOnly value={4} />
                <Typography variant="h6" className={classes.subTitle}>Slate helps you see how many more days you need to work to reach your financial goal.</Typography>
                <Box component="div">
                    <Typography variant="body2" className={classes.text} color="primary">Regina Miles</Typography>
                    <Typography variant="body2" className={classes.text}>Designer</Typography>
                </Box>
            </Stack>
            <Stack component="div" direction="column" spacing={1}>
                <Stack direction="row" spacing={1}>
                    <Image 
                        src="/img/review1.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                    <Image 
                        src="/img/review2.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                    <Image 
                        src="/img/review3.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Image 
                        src="/img/review4.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                    <Image 
                        src="/img/review5.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                    <Image 
                        src="/img/review6.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Image 
                        src="/img/review7.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                    <Image 
                        src="/img/review8.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                    <Image 
                        src="/img/review9.png"
                        width={142}
                        height={142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default Review;