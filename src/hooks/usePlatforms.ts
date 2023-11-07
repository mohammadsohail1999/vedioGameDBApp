import { ApiClient } from './../services/api-client'
import { useQuery } from 'react-query'
import ms from 'ms'
import { PlatformData } from '../types/PlatformData'

const fetchPlatforms = new ApiClient<PlatformData>('/platforms')

const usePlatforms = () =>
    useQuery<PlatformData[]>({
        queryFn: fetchPlatforms.fetchAll.bind(fetchPlatforms, {
            page: 1,
            page_size: 10,
        }),
        queryKey: ['platforms'],
        //24 hours
        staleTime: ms('5 days'),
    })

export default usePlatforms
