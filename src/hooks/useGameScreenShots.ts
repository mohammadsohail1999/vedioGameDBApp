import { useQuery } from 'react-query'
import { ApiClient } from '../services/api-client'
import { GameScreenShot } from '../types/GameScreenShot'

const apiClient = new ApiClient<GameScreenShot>('/games')

const useGameScreenShots = (id: string | number) => {
    return useQuery({
        queryFn: apiClient.fetchGameScreenShot.bind(apiClient, id),
        queryKey: ['screenshot', id],
    })
}

export default useGameScreenShots
