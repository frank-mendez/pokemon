import { combineReducers, Reducer } from 'redux'

const appReducer: Reducer = combineReducers({})

const reducers = (state: any, action: any) => {
	return appReducer(state, action)
}

export default reducers
