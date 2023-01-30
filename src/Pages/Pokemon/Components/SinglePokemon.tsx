import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { SinglePokemonProps } from './types'
import { useGetPokemonByNameQuery } from '../../../Reducers/PokemonReducer'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'
import { Fragment } from 'react'
import { Alert } from '@mui/material'

const SinglePokemon = (props: { searchText: string }) => {
	const { searchText } = props

	console.log('searchText', searchText)
	const { data, error, isLoading, isError } = useGetPokemonByNameQuery(searchText)
	console.log('data', data)
	return (
		<Fragment>
			{isLoading && <CircularProgress />}
			{isError && <Alert severity='error'>Not Found</Alert>}
			{data && (
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia sx={{ height: 140, width: 140 }} image={data.sprites.front_default} title={data.name.toUpperCase()} />
					<CardMedia sx={{ height: 140, width: 140 }} image={data.sprites.back_default} title={data.name.toUpperCase()} />
					<CardMedia sx={{ height: 140, width: 140 }} image={data.sprites.front_shiny} title={data.name.toUpperCase()} />
					<CardMedia sx={{ height: 140, width: 140 }} image={data.sprites.back_shiny} title={data.name.toUpperCase()} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{data.name.toUpperCase()}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Share</Button>
						<Button size='small'>Learn More</Button>
					</CardActions>
				</Card>
			)}
		</Fragment>
	)
}

export default SinglePokemon
