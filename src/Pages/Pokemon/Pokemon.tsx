import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import { style } from './Pokemon.style'
import { useGetPokemonByNameQuery, useGetPokemonQuery } from '../../Reducers/PokemonReducer'

interface Column {
	id: 'name' | 'code' | 'population' | 'size' | 'density'
	label: string
	minWidth?: number
	align?: 'right'
	format?: (value: number) => string
}

const columns: readonly Column[] = [{ id: 'name', label: 'Name', minWidth: 170 }]

export default function Pokemon() {
	const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
	const { data: pokemons } = useGetPokemonQuery('')

	console.log('data', data)
	console.log('pokemons', pokemons)

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<Typography variant='h5'>
				Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other
				Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species,
				such as base stats, available abilities and typings. See Bulbapedia for greater detail.
			</Typography>
			<Box>
				<TextField sx={style.searchField} id='outlined-search' label='Search field' type='search' />
			</Box>
		</Paper>
	)
}
