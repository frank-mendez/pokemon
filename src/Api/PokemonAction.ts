import { requestFailed, requestFinished, requestStarted } from './RequestAction'
import { Dispatch } from 'react'
import axios from 'axios'
import { PokemonTableResult } from '../Model/PokemonModel'

const fetchPokemon = async (): Promise<PokemonTableResult | undefined | void> => {
	try {
		const result: PokemonTableResult = await axios(`${process.env.BASE_URL}/pokemon`)
		return result
	} catch (error) {
		throw new Error('Error')
	}
}

export default fetchPokemon
