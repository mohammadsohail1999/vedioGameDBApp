import { useQuery } from 'react-query'
import { ApiClient } from '../services/api-client'
import { GameTrailer } from '../types/GameTrailer'

const apiClient = new ApiClient<GameTrailer>('/games')

const useGameTrailer = (id: string | number) => {
    return useQuery({
        queryFn: apiClient.fetchGameTrailer.bind(apiClient, id),
        queryKey: ['gameTrailer', id],
    })
}

export default useGameTrailer
