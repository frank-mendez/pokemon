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
