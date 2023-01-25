export type PokemonTable = {
	count: number
	next: string | null
	previous: string | null
	results: PokemonTableResults[]
}

type PokemonTableResults = {
	name: string
	url: string
}
