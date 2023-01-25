import { combineReducers, Reducer } from 'redux'
import pokemonReducer from './PokemonReducer'

const appReducer: Reducer = combineReducers({ pokemonReducer })

const reducers = (state: any, action: any) => {
	return appReducer(state, action)
}

export default reducers
