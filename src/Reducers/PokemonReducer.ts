import { PokemonDispatchType } from '../Api/Types'
import { PokemonTableResult } from './../Model/PokemonModel'

const initialState: any = {
	pokemon: {},
	pokemonResult: {} as PokemonTableResult,
}

const pokemonReducer = (state: any = initialState, action: any) => {
	const { type, payload } = action
	switch (type) {
		case PokemonDispatchType.FETCH_POKEMON_SUCCESS:
			return {
				...state,
				pokemonResult: payload,
			}
		default:
			return state
	}
}

export default pokemonReducer
