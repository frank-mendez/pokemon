import React from 'react'
import './App.css'
import { Container } from '@mui/material'
import Header from './UiKit/Components/Header/Header'
import Footer from './UiKit/Components/Footer/Footer'
import Navbar from './UiKit/Components/Navbar/Navbar'
import MainRoutes from './Routes/MainRoutes'
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import store from './Utilities/Store'
import pokemonTheme from './Utilities/Themes'

function App() {
	const sections = [
		{ title: 'Berries', url: 'berries' },
		{ title: 'Contests', url: 'contests' },
		{ title: 'Encounters', url: 'encounters' },
		{ title: 'Evolution', url: 'evolution' },
		{ title: 'Games', url: 'games' },
		{ title: 'Items', url: 'items' },
		{ title: 'Locations', url: 'locations' },
		{ title: 'Machines', url: 'machines' },
		{ title: 'Moves', url: 'moves' },
		{ title: 'Pokemon', url: 'pokemon' },
		{ title: 'Utility', url: 'utility' },
	]

	const history = createBrowserHistory({ window })

	return (
		<Provider store={store}>
			<ThemeProvider theme={pokemonTheme}>
				<BrowserRouter>
					<Container>
						<Header sections={sections} title='Pokemon Database' />
						<MainRoutes />
						<Footer />
					</Container>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	)
}

export default App
