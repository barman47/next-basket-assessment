import { createTheme } from '@mui/material/styles';

const PRIMARY_COLOR = '#23A6F0';
const PRIMARY_TEXT_COLOR = '#252B42';
const SECONDARY_COLOR = '#23856D';
const SECONDARY_TEXT_COLOR = '#737373';
const SUCCESS_COLOR = '#2DC071';
const RATING_COLOR = '#F3CD03';
const MUTED_COLOR = '#BDBDBD';
export const BLACK = '#000000';
export const WHITE = '#FFFFFF';
export const LIGHT_GREY = '#FAFAFA';
export const DISABLED_ELEMENT_COLOR = '#8EC2F2';

export const theme = createTheme({	
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: 'none',

                    '&:hover': {
                        boxShadow: 'none'
                    }
                },

                contained: {
                    color: WHITE
                }
            }
        },

        MuiLink: {
            styleOverrides: {
                root: {
                    color: PRIMARY_TEXT_COLOR,
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '24px',
                    textDecoration: 'none',

                    '&:hover': {
                        color: PRIMARY_COLOR
                    }
                }
            }
        },

        MuiRating: {
            styleOverrides: {
                root: {
                    color: RATING_COLOR
                },
                iconEmpty: {
                    color: RATING_COLOR
                }
            }
        },

        MuiTab: {
            styleOverrides: {
                root: {
                    color: SECONDARY_TEXT_COLOR,
                    textTransform: 'none'
                }
            }
        },

        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    justifyContent: 'center'
                }
            }
        },
    },

	palette: {
		primary: {
			main: PRIMARY_COLOR
		},

        secondary: {
            main: SECONDARY_COLOR
        },

        success: {
            main: SUCCESS_COLOR
        },

        text: {
            primary: PRIMARY_TEXT_COLOR,
            secondary: SECONDARY_TEXT_COLOR,
            disabled: MUTED_COLOR
        }
	},

	typography: {
		fontFamily: 'inherit',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700
	}
});