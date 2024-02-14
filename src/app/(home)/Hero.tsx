'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import {
    Box,
    ImageList,
    ImageListItem,
    Link,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
    root: {
        marginTop: theme.spacing(20),
        padding: theme.spacing(0, 17),
        height: 'auto',
        width: '100%',

        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            padding: theme.spacing(0, 5),
        },

        [theme.breakpoints.down('md')]: {
            marginTop: 0,
            padding: theme.spacing(0, 3),
        }
    },

    imageList: {
        width: '100%', 
        overflowY: 'hidden',

        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        }
    },

    imageItem: {
        position: 'relative'
    },

    image: {
        objectFit: 'cover',
        objectPosition: 'center',
        height: '100%',
        width: '100%'
    },

    textContainer: { 
        position: 'absolute',
        top: 0,
        left: 0,
        padding: theme.spacing(3)
    },

    itemCount: {
        color: theme.palette.success.main,
        fontWeight: 700,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(3)
    },

    subTitle: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        fontSize: theme.spacing(5),
        lineHeight: theme.spacing(6.25)
    },

    smallTitle: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        fontSize: theme.spacing(3),
        lineHeight: theme.spacing(4)
    }
}));

const Hero: React.FC<{}> = () => {
    const { classes } = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="section" className={classes.root}>
            <ImageList 
                variant="quilted"
                cols={isMobile ? 1 : 3}
                rowHeight={300}
                sx={{ height: 600 }}
                className={classes.imageList}
                gap={15}
            >
                <ImageListItem cols={1} rows={isMobile ? 1 : 2} className={classes.imageItem}>
                    <Image 
                        src="/img/furniture1.png"
                        width={200}
                        height={600}
                        alt="Furniture 1"
                        priority
                        className={classes.image}
                    />
                    <Stack direction="column" className={classes.textContainer}>
                        <Typography variant="subtitle2" className={classes.itemCount}>5 Items</Typography>
                        <Typography variant="h5" className={classes.subTitle}>FURNITURE</Typography>
                        <Link component={NextLink} href="#!">Read More</Link>
                    </Stack>
                </ImageListItem >
                <ImageListItem cols={isMobile ? 1 : 2} rows={1}>
                    <Image 
                        src="/img/furniture2.png"
                        width={600}
                        height={200}
                        alt="Furniture 2"
                        priority
                        className={classes.image}
                    />
                    <Stack direction="column" className={classes.textContainer}>
                        <Typography variant="subtitle2" className={classes.itemCount}>5 Items</Typography>
                        <Typography variant="h5" className={classes.smallTitle}>FURNITURE</Typography>
                        <Link component={NextLink} href="#!">Read More</Link>
                    </Stack>
                </ImageListItem>
                <ImageListItem cols={1} rows={1}>
                    <Image 
                        src="/img/furniture3.png"
                        width={200}
                        height={600}
                        alt="Furniture 3"
                        priority
                        className={classes.image}
                    />
                    <Stack direction="column" className={classes.textContainer}>
                        <Typography variant="subtitle2" className={classes.itemCount}>5 Items</Typography>
                        <Typography variant="h5" className={classes.smallTitle}>FURNITURE</Typography>
                        <Link component={NextLink} href="#!">Read More</Link>
                    </Stack>
                </ImageListItem>
                <ImageListItem cols={1} rows={1}>
                    <Image 
                        src="/img/furniture4.png"
                        width={200}
                        height={600}
                        alt="Furniture 4"
                        priority
                        className={classes.image}
                    />
                    <Stack direction="column" className={classes.textContainer}>
                        <Typography variant="subtitle2" className={classes.itemCount}>5 Items</Typography>
                        <Typography variant="h5" className={classes.smallTitle}>FURNITURE</Typography>
                        <Link component={NextLink} href="#!">Read More</Link>
                    </Stack>
                </ImageListItem>
            </ImageList>
        </Box>
    );
};

export default Hero;

{/* <Box className={classes.root}>
            <Box component="div" className={classes.heroItem}></Box>
            <Box component="div" className={classes.heroItem}></Box>
            <Box component="div" className={classes.heroItem}></Box>
            <Box component="div" className={classes.heroItem}></Box>
        </Box> */}