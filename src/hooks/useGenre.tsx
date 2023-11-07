import { useQuery } from 'react-query'
import { ApiClient } from '../services/api-client'
import ms from 'ms'
import { Genre } from '../types/Genre'

// const useGenre = (params: AxiosRequestConfig) =>
//     useData<Genre>('/genres', params)

const fetchGenres = new ApiClient<Genre>('/genres')

const useGenre = () =>
    useQuery<Genre[], Error>({
        queryFn: fetchGenres.fetchAll.bind(fetchGenres, {
            page: 1,
            page_size: 15,
        }),
        queryKey: ['genres'],
        // 24 hours
        staleTime: ms('7 days'),
    })

export default useGenre
