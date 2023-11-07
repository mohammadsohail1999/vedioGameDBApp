import axios from 'axios'

export interface DataResponse<T> {
    count: number
    next: string | null
    results: T[]
}

const client = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_API_KEY,
    },
})

export interface GamesParams {
    page: number
    page_size: number
    genres?: number
    platforms?: number
    ordering?: string
    search?: string
}

export class ApiClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    fetchAll(params: GamesParams) {
        return client
            .get<DataResponse<T>>(this.endpoint, {
                params: {
                    ...params,
                },
            })
            .then(({ data }) => data?.results)
    }

    fetchGames(params: GamesParams) {
        return client
            .get<DataResponse<T>>(this.endpoint, {
                params,
            })
            .then(({ data }) => data)
    }

    fetchGamesDetails(id: number | string) {
        return client.get<T>(this.endpoint + '/' + id).then(({ data }) => data)
    }

    fetchGameTrailer(id: number | string) {
        return client
            .get<T>(`${this.endpoint}/${id}/movies`)
            .then(({ data }) => {
                return data
            })
    }
    fetchGameScreenShot(id: number | string) {
        return client
            .get<T>(`${this.endpoint}/${id}/screenshots`)
            .then(({ data }) => data)
    }
}

export default client
