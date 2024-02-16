'use client';

import * as React from 'react';
import Image from 'next/image';
import {
    Box,
    Tab,
    Tabs,
    Typography,
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
            display: 'none',
            padding: theme.spacing(6.9, 3)
        }
    },

    tab: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1)
        }
    },

    textContainer: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: theme.spacing(5),

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr'
        }
    },

    title: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        fontSize: theme.spacing(3),
        lineHeight: theme.spacing(4)
    },

    text: {
        color: theme.palette.text.secondary,
        fontWeight: 400,
        fontSize: theme.spacing(1.75),
        lineHeight: theme.spacing(2.5)
    },

    image: {
        [theme.breakpoints.down('sm')]: {
            border: '2px solid green',
            objectFit: 'cover',
            width: theme.spacing(35),
            height: theme.spacing(35)
        }
    }
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
  
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface Props {
    description: string;
    image: string;
}

const ProductDescription: React.FC<Props> = ({ description, image }) => {
    const { classes } = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.root} sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="product-description-tabs" scrollButtons="auto" allowScrollButtonsMobile={true}>
                <Tab label="Description" {...a11yProps(0)} className={classes.tab} />
                <Tab label="Additional Information" {...a11yProps(1)} className={classes.tab} />
                <Tab label="Reviews (0)" {...a11yProps(2)} className={classes.tab} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box component="div" className={classes.textContainer}>
                    <Typography variant="body2" component="p" className={classes.text}>{description}</Typography>
                    <Image 
                        src={image}
                        width={418}
                        height={382}
                        alt="Product Description"
                        priority
                        className={classes.image}
                    />
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Additional Information
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Reviews
            </CustomTabPanel>
        </Box>
    );
};

export default ProductDescription;
