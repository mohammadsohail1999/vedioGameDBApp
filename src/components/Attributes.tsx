import { Box, Text, VStack } from '@chakra-ui/react'
import { PlatFormArr } from '../types/GameDetail'
import CriticScore from './CriticScore'
import { Genre } from '../types/Genre'
import { Publisher } from '../types/publisher'

type Props = {
    AttrType: 'platforms' | 'genres' | 'metascrore' | 'publishers'
    data: {
        metacritic?: number
        platforms?: PlatFormArr
        genres?: Genre[]
        publishers?: Publisher[]
    }
}

const Attributes = ({ AttrType, data }: Props) => {
    return (
        <VStack spacing={'2'} flexGrow={1} alignItems={'start'}>
            <Text color={'gray.400'} fontSize={'2xl'} fontWeight={'bold'}>
                {AttrType === 'platforms' &&
                    data?.platforms?.length &&
                    'Platforms'}
                {AttrType === 'genres' && data?.genres?.length && 'Genres'}
                {AttrType === 'metascrore' && data?.metacritic && 'Metascrore'}
                {AttrType === 'publishers' &&
                    data?.publishers?.length &&
                    'Publishers'}
            </Text>
            <Box>
                {/* {AttrType === "metascrore" && } */}
                {AttrType === 'platforms' && data?.platforms?.length ? (
                    <VStack alignItems={'start'} spacing={'2.5'}>
                        {data?.platforms?.map((platform) => {
                            return (
                                <Text key={platform?.platform?.id}>
                                    {platform?.platform?.name}
                                </Text>
                            )
                        })}
                    </VStack>
                ) : null}
                {AttrType === 'metascrore' && data?.metacritic ? (
                    <CriticScore CriticScore={data?.metacritic} />
                ) : null}
                {AttrType === 'genres' && data?.genres ? (
                    <VStack alignItems={'start'} spacing={'2.5'}>
                        {data?.genres?.map((genre) => {
                            return <Text key={genre?.name}>{genre?.name}</Text>
                        })}
                    </VStack>
                ) : null}
                {AttrType === 'publishers' && data?.publishers ? (
                    <VStack alignItems={'start'} spacing={'2.5'}>
                        {data?.publishers?.map((publisher) => {
                            return (
                                <Text key={publisher?.name}>
                                    {publisher?.name}
                                </Text>
                            )
                        })}
                    </VStack>
                ) : null}
            </Box>
        </VStack>
    )
}

export default Attributes
