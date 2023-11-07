import {
    Box,
    GridItem,
    HStack,
    SimpleGrid,
    SkeletonCircle,
} from '@chakra-ui/react'
import useGameDetail from '../hooks/useGameDetail'
import { Text } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import ExpandleText from '../components/ExpandleText'
import Attributes from '../components/Attributes'
import useGameTrailer from '../hooks/useGameTrailer'
import GameScreenshotGrid from '../components/GameScreenshotGrid'

const GameDetail = () => {
    const { state } = useLocation()

    const { data, isLoading } = useGameDetail(Number(state?.id))

    const { data: trailerData, isLoading: isTrailerDataLoading } =
        useGameTrailer(Number(state?.id))

    return (
        <>
            <GridItem area={'main'} p="3.5">
                {isLoading ? (
                    <HStack justifyContent={'center'}>
                        <SkeletonCircle height={'16'} width={'16'} />
                    </HStack>
                ) : (
                    <SimpleGrid columns={[1, 1, 2]} spacing={4}>
                        <Box>
                            <Text fontSize={'3xl'}>{data?.name}</Text>
                            {data?.description ? (
                                <ExpandleText
                                    desc={data.description_raw}
                                    length={300}
                                />
                            ) : null}
                            <SimpleGrid mt={10} columns={2} spacing={6}>
                                <Attributes
                                    AttrType="platforms"
                                    data={{ platforms: data?.platforms }}
                                />
                                <Attributes
                                    data={{ metacritic: data?.metacritic }}
                                    AttrType="metascrore"
                                />
                                <Attributes
                                    AttrType="genres"
                                    data={{ genres: data?.genres }}
                                />
                                <Attributes
                                    data={{ publishers: data?.publishers }}
                                    AttrType="publishers"
                                />
                            </SimpleGrid>
                        </Box>

                        {/* <HStack px={'2.5'} alignItems={'start'}></HStack>
                        <HStack px={'2.5'} alignItems={'start'}></HStack> */}
                        <Box>
                            {!isTrailerDataLoading ? (
                                trailerData?.results?.length ? (
                                    <video
                                        autoPlay
                                        controls
                                        src={`${trailerData?.results?.[0]?.data?.[480]}`}
                                        muted
                                    />
                                ) : null
                            ) : null}
                            <GameScreenshotGrid />
                        </Box>
                    </SimpleGrid>
                )}
            </GridItem>
        </>
    )
}

export default GameDetail
