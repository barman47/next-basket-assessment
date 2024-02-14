import { createTheme } from '@mui/material/styles';

const PRIMARY_COLOR = '#23A6F0';

export const theme = createTheme({	
	palette: {
		primary: {
			main: PRIMARY_COLOR
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