import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Berries from '../Pages/Berries/Berries'
import Contests from '../Pages/Contests/Contests'
import Dashboard from '../Pages/Dashboard/Dashboard'
import EncountersPK from '../Pages/Encounters/Encounters'
import Evolution from '../Pages/Evolution/Evolution'
import Games from '../Pages/Games/Games'
import Items from '../Pages/Items/Items'
import Locations from '../Pages/Locations/Locations'
import Machines from '../Pages/Machines/Machines'
import Moves from '../Pages/Moves/Moves'
import Pokemon from '../Pages/Pokemon/Pokemon'
import Utility from '../Pages/Utility/Utility'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/berries' element={<Berries />} />
			<Route path='/contests' element={<Contests />} />
			<Route path='/encounters' element={<EncountersPK />} />
			<Route path='/evolution' element={<Evolution />} />
			<Route path='/games' element={<Games />} />
			<Route path='/items' element={<Items />} />
			<Route path='/locations' element={<Locations />} />
			<Route path='/machines' element={<Machines />} />
			<Route path='/moves' element={<Moves />} />
			<Route path='/pokemon' element={<Pokemon />} />
			<Route path='/utility' element={<Utility />} />
		</Routes>
	)
}

export default MainRoutes
