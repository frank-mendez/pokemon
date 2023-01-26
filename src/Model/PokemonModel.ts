import { PokemonDispatchType } from '../Api/Types'

export type PokemonTableResult = {
	count: number
	next: string | null
	previous: string | null
	results: PokemoResults[]
}

type PokemoResults = {
	name: string
	url: string
}

export type PokemonInitialState = {
	isLoading: boolean
	pokemonResult?: PokemonTableResult | void
}

export type PokemonAction = {
	type: PokemonDispatchType
	payload?: PokemonTableResult
}
