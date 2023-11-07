import { Skeleton, Stack } from '@chakra-ui/react'
import { useMemo } from 'react'

const GenereSkeleton = () => {
    const skeletonArray = useMemo(() => {
        return Array.from({ length: 10 })
    }, [])

    return (
        <Stack spacing={3}>
            {skeletonArray.map((_, index: number) => {
                return <Skeleton key={index} height="10px" />
            })}
        </Stack>
    )
}

export default GenereSkeleton
