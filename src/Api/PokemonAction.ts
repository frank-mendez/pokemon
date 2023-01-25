import { requestFailed, requestFinished, requestStarted } from './RequestAction'
import { Dispatch } from 'react'
import axios from 'axios'
import { PokemonTableResult } from '../Model/PokemonModel'
import { PokemonDispatchType, RequestName } from './Types'

const fetchPokemon = async (dispatch: Dispatch<any>): Promise<PokemonTableResult | undefined> => {
	const requestName: RequestName = RequestName.FETCH_POKEMON
	dispatch(requestStarted(requestName))
	try {
		const result: PokemonTableResult = await axios(`${process.env.BASE_URL}/pokemon`)
		dispatch(requestFinished(requestName))
		dispatch({
			type: PokemonDispatchType.FETCH_POKEMON_SUCCESS,
			payload: result,
		})
		return result as PokemonTableResult
	} catch (error) {
		dispatch(requestFailed(requestName))
	}
}

export default fetchPokemon
