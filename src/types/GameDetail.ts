import { Game } from './Game'
import { Genre } from './Genre'
import { Publisher } from './publisher'

export interface GameDetail extends Game {
    description: string
    description_raw: string
    platforms: PlatFormArr
    genres: Genre[]
    publishers: Publisher[]
}

export type PlatFormArr = Array<{
    platform: {
        id: number
        slug: string
        name: string
    }
    released_at: string
}>
