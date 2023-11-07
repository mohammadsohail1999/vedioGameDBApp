import { Image, SimpleGrid } from '@chakra-ui/react'
import useGameScreenShots from '../hooks/useGameScreenShots'
import { useLocation } from 'react-router-dom'

const GameScreenshotGrid = () => {
    const { state } = useLocation()
    const { data } = useGameScreenShots(Number(state?.id))
    return (
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={2}>
            {data?.results?.map((image) => {
                return (
                    <Image
                        height={'200'}
                        width={'100%'}
                        src={image?.image}
                        key={image?.id}
                    />
                )
            })}
        </SimpleGrid>
    )
}

export default GameScreenshotGrid
