'use client';

import Image from 'next/image';
import {
    Avatar,
    Box,
    ImageList,
    ImageListItem,
    Rating,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
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

    image: {
        objectFit: 'cover',
        width: '100%'
    }
}));

const Review: React.FC<{}> = () => {
    const { classes } = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="section" className={classes.root}>
            <Stack direction="column" alignItems="center" spacing={4} sx={{ textAlign: 'center' }}>
                <Typography variant="h5" className={classes.title}>What they say about us</Typography>
                <Avatar src="/img/user-review.jpg" sx={{ width: 90, height: 90 }} />
                <Rating readOnly value={4} />
                <Typography variant="h6" className={classes.subTitle}>Slate helps you see how many more days you need to work to reach your financial goal.</Typography>
                <Box component="div">
                    <Typography variant="body2" className={classes.text} color="primary">Regina Miles</Typography>
                    <Typography variant="body2" className={classes.text}>Designer</Typography>
                </Box>
            </Stack>
            <ImageList cols={3} rowHeight={isMobile ? 100: 142} gap={17.85}>
                <ImageListItem>
                    <Image 
                        src="/img/review1.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
                <ImageListItem>
                    <Image 
                        src="/img/review2.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
                <ImageListItem>
                    <Image 
                        src="/img/review3.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
                <ImageListItem>
                    <Image 
                        src="/img/review4.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
                <ImageListItem>
                    <Image 
                        src="/img/review5.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
                <ImageListItem>
                    <Image 
                        src="/img/review6.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
                <ImageListItem>
                    <Image 
                        src="/img/review7.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
                <ImageListItem>
                    <Image 
                        src="/img/review8.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
                <ImageListItem>
                    <Image 
                        src="/img/review9.png"
                        width={isMobile ? 100 : 142}
                        height={isMobile ? 100: 142}
                        alt="Review"
                        priority
                        className={classes.image}
                    />
                </ImageListItem>
            </ImageList>
        </Box>
    );
};

export default Review;