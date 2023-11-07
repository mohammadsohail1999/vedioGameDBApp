import { ParentPlatform } from './PlatformData'

export interface Game {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    background_image: string
    rating: number
    ratings_count: number
    parent_platforms: Array<ParentPlatform>
    metacritic: number
}
