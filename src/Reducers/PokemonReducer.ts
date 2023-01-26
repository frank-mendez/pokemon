import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
	endpoints: (builder) => ({
		getPokemonByName: builder.query({
			query: (name: string) => `pokemon/${name}`,
		}),
		getPokemon: builder.query({
			query: () => `pokemon?limit=20`,
		}),
	}),
})

export const { useGetPokemonByNameQuery, useGetPokemonQuery } = pokemonApi
