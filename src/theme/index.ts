import { createTheme } from '@material-ui/core';

const FONT_PRIMARY = 'Raleway';

export const theme = createTheme({
	typography: {
		fontFamily: [
			FONT_PRIMARY,
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		fontWeightRegular: 400,
		h1: {
			fontWeight: 700,
			fontSize: 40,
			color: '#111',
			zIndex: 1,
		},
		h2: {
			fontWeight: 700,
			fontSize: 34,
			color: '#111',
			zIndex: 1,
		},
		h3: {
			fontWeight: 700,
			fontSize: 30,
			color: '#111',
			zIndex: 1,
		},
		h4: {
			fontWeight: 700,
			fontSize: 26,
			color: '#111',
			zIndex: 1,
		},
		h5: {
			fontWeight: 700,
			fontSize: 24,
			color: '#111',
			zIndex: 1,
		},
		h6: {
			fontWeight: 700,
			fontSize: 22,
			color: '#111',
			zIndex: 1,
		},
		subtitle1: {
			fontWeight: 600,
			fontSize: 15,
			color: '#111',
			zIndex: 1,
		},
		subtitle2: {
			fontWeight: 600,
			fontSize: 13,
			color: '#111',
			zIndex: 1,
		},
		body1: {
			fontWeight: 400,
			fontSize: 15,
			color: '#111',
			zIndex: 1,
		},
		body2: {
			fontWeight: 400,
			fontSize: 13,
			color: '#111',
			zIndex: 1,
		},
	},
	palette: {
		primary: {
			light: '#559ae8',
			main: '#0575f3',
			dark: '#0d4f99',
		},
		secondary: {
			// light: '#ed3b3b',
			main: '#f1f6f9',
			// dark: '#c21f1f',
		},
		common: {
			white: '#fff',
			black: '#111',
		},
	},
});
