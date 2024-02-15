'use client';

import {
    Box,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Stack,
    Typography,
    Button,
    Chip
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { DISABLED_ELEMENT_COLOR } from '@/theme';
import { ChartLine, ChevronRight, ClockOutline } from 'mdi-material-ui';

const useStyles = makeStyles()(theme => ({
    root: {
        marginTop: theme.spacing(20),
        gap: theme.spacing(15),
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
        color: theme.palette.primary.main,
        fontSize: theme.spacing(1.75),
        fontWeight: 700,
        lineHeight: theme.spacing(3),
        textAlign: 'center'
    },

    title: {
        color: theme.palette.text.primary,
        fontSize: theme.spacing(5),
        fontWeight: 700,
        lineHeight: theme.spacing(6.25),
        textAlign: 'center'
    },

    cardGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme.spacing(3),
        marginTop: theme.spacing(8),

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            padding: theme.spacing(0, 20)
        },

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0)
        },
    },

    card: {
        position: 'relative',
        minWidth: 348,

        [theme.breakpoints.down('lg')]: {
            minWidth: 300,
        },

        [theme.breakpoints.down('md')]: {
            minWidth: 348
        },

        [theme.breakpoints.down('sm')]: {
            minWidth: 300
        }
    },

    chip: {
        borderRadius: '3px',
        fontWeight: 700,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(3),
        position: 'absolute',
        top: 20,
        left: 20
    },

    tag: {
        fontWeight: 400,
        fontSize: theme.spacing(1.5),
        lineHeight: theme.spacing(2)
    },

    cardTitle: {
        color: theme.palette.text.primary,
        fontWeight: 400,
        fontSize: theme.spacing(2.5),
        lineHeight: theme.spacing(3.75)
    },

    icon: {
        width: theme.spacing(2)
    },

    button: {
        color: theme.palette.text.secondary,
        fontWeight: 700,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(3)
    },

    buttonIcon: {
        color: theme.palette.primary.main
    }
}));

const FeaturedPosts: React.FC<{}> = () => {
    const { classes } = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Typography variant="body1" component="p" className={classes.subTitle}>Practice Advice</Typography>
            <Typography variant="h5" className={classes.title}>Featured Posts</Typography>
            <Box component="section" className={classes.cardGrid}>
                <Card className={classes.card}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="/img/post1.png"
                        title="Post 1"
                    />
                    <Chip variant="filled" color="error" label="NEW" className={classes.chip} />
                    <CardContent>
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" spacing={2}>
                                <Typography variant="body1" component="p" className={classes.tag} sx={{ color: DISABLED_ELEMENT_COLOR }}>Google</Typography>
                                <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">Trending</Typography>
                                <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">New</Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.cardTitle}>Loudest à la Madison #1 (L&#39;integral)</Typography>
                            <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">We focus on ergonomics and meeting you where you work. It&#39;s only a keystroke away.</Typography>
                            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <ClockOutline className={classes.icon} color="primary" />
                                    <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">22 April 2021</Typography>
                                </Stack> 
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <ChartLine className={classes.icon} color="secondary" />
                                    <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">10 comments</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="small"
                            variant="text"
                            endIcon={<ChevronRight />}
                            classes={{ root: classes.button, endIcon: classes.buttonIcon }}
                        >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="/img/post2.png"
                        title="Post 2"
                    />
                    <Chip variant="filled" color="error" label="NEW" className={classes.chip} />
                    <CardContent>
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" spacing={2}>
                                <Typography variant="body1" component="p" className={classes.tag} sx={{ color: DISABLED_ELEMENT_COLOR }}>Google</Typography>
                                <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">Trending</Typography>
                                <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">New</Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.cardTitle}>Loudest à la Madison #1 (L&#39;integral)</Typography>
                            <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">We focus on ergonomics and meeting you where you work. It&#39;s only a keystroke away.</Typography>
                            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <ClockOutline className={classes.icon} color="primary" />
                                    <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">22 April 2021</Typography>
                                </Stack> 
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <ChartLine className={classes.icon} color="secondary" />
                                    <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">10 comments</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="small"
                            variant="text"
                            endIcon={<ChevronRight />}
                            classes={{ root: classes.button, endIcon: classes.buttonIcon }}
                        >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="/img/post3.png"
                        title="Post 3"
                    />
                    <Chip variant="filled" color="error" label="NEW" className={classes.chip} />
                    <CardContent>
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" spacing={2}>
                                <Typography variant="body1" component="p" className={classes.tag} sx={{ color: DISABLED_ELEMENT_COLOR }}>Google</Typography>
                                <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">Trending</Typography>
                                <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">New</Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.cardTitle}>Loudest à la Madison #1 (L&#39;integral)</Typography>
                            <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">We focus on ergonomics and meeting you where you work. It&#39;s only a keystroke away.</Typography>
                            <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <ClockOutline className={classes.icon} color="primary" />
                                    <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">22 April 2021</Typography>
                                </Stack> 
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <ChartLine className={classes.icon} color="secondary" />
                                    <Typography variant="body1" component="p" className={classes.tag} color="text.secondary">10 comments</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardContent>
                    <CardActions>
                        <Button 
                            size="small"
                            variant="text"
                            endIcon={<ChevronRight />}
                            classes={{ root: classes.button, endIcon: classes.buttonIcon }}
                        >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
};

export default FeaturedPosts;