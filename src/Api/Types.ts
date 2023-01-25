export const REQUEST_STARTED = 'REQUEST_STARTED'
export const REQUEST_FINISHED = 'REQUEST_FINISHED'
export const REQUEST_FAILED = 'REQUEST_FAILED'

export enum RequestType {
	REQUEST_STARTED = 'REQUEST_STARTED',
	REQUEST_FINISHED = 'REQUEST_FINISHED',
	REQUEST_FAILED = 'REQUEST_FAILED',
}

export enum RequestName {
	FETCH_POKEMON = 'FETCH_POKEMON',
}

export enum PokemonDispatchType {
	FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS',
}

export type RequestActionPayload = {
	requestName: string
	inProgress: boolean
}

export const LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS'

export type RequestAction = {
	type: RequestType
	payload: RequestActionPayload
}
