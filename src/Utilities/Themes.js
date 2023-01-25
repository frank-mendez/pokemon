import { createTheme } from '@mui/material/styles'

const pokemonTheme = createTheme({
	palette: {
		primary: {
			main: '#0A285F',
		},
		secondary: {
			main: '#0075BE',
		},
		error: {
			main: '#FB1B1B',
		},
		info: {
			main: '#FFCC00',
		},
		success: {
			main: '#4DAD5B',
		},
	},
	typography: {
		fontFamily: ['Oswald', 'sans-serif'].join(','),
	},
})

export default pokemonTheme
