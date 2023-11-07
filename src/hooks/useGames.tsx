import { useInfiniteQuery } from 'react-query'
import { ApiClient, DataResponse, GamesParams } from '../services/api-client'
import { Game } from '../types/Game'

const fetchGames = new ApiClient<Game>('/games')

export const useGames = (params: GamesParams) =>
    useInfiniteQuery<DataResponse<Game>>({
        queryFn: ({ pageParam = 1 }) =>
            fetchGames.fetchGames({ ...params, page: pageParam }),
        queryKey: ['games', params],
        getNextPageParam: (lastPage, pages) => {
            return lastPage?.next ? pages?.length + 1 : undefined
        },
    })
