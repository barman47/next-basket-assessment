import { createTheme } from '@mui/material/styles';

const PRIMARY_COLOR = '#23A6F0';
const PRIMARY_TEXT_COLOR = '#252B42';
const SECONDARY_TEXT_COLOR = '#737373';
export const WHITE = '#FFFFFF';
export const LIGHT_GREY = '#FAFAFA';

export const theme = createTheme({	
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    textTransform: 'none'
                },

                contained: {
                    color: WHITE
                }
            }
        },
    },

	palette: {
		primary: {
			main: PRIMARY_COLOR
		},
        text: {
            primary: PRIMARY_TEXT_COLOR,
            secondary: SECONDARY_TEXT_COLOR,
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