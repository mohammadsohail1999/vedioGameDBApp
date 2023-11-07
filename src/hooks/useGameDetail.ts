import { useQuery } from 'react-query'
import { ApiClient } from '../services/api-client'
import { GameDetail } from '../types/GameDetail'

const apiClient = new ApiClient<GameDetail>('/games')

const useGameDetail = (id: number | string) => {
    return useQuery({
        queryFn: apiClient.fetchGamesDetails.bind(apiClient, id),
        queryKey: ['gameDetail', id],
    })
}

export default useGameDetail
