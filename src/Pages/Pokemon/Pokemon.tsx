import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import { style } from './Pokemon.style'
import { useGetPokemonByNameQuery, useGetPokemonQuery } from '../../Reducers/PokemonReducer'
import SinglePokemon from './Components/SinglePokemon'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import { PhotoCamera } from '@mui/icons-material'
import Search from '@mui/icons-material/Search'

interface Column {
	id: 'name' | 'code' | 'population' | 'size' | 'density'
	label: string
	minWidth?: number
	align?: 'right'
	format?: (value: number) => string
}

const columns: readonly Column[] = [{ id: 'name', label: 'Name', minWidth: 170 }]

export default function Pokemon() {
	const [searchText, setSearchText] = useState('')
	const [inputText, setInputText] = useState('')
	const handleChange = (e: { target: { value: string } }) => {
		setSearchText(e.target.value)
	}
	const handleSearch = () => {
		setInputText(searchText)
	}

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden', padding: '20px' }}>
			<Typography variant='body2'>
				Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other
				Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species,
				such as base stats, available abilities and typings. See Bulbapedia for greater detail.
			</Typography>
			<Box sx={style.searchField}>
				<TextField id='standard-basic' label='Search' variant='standard' onChange={handleChange} />
				<IconButton onClick={handleSearch} color='primary' aria-label='search' component='label'>
					<Search />
				</IconButton>
			</Box>
			<Box>{inputText && <SinglePokemon searchText={inputText} />}</Box>
		</Paper>
	)
}
