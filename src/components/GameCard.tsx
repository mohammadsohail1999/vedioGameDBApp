import { Box, Card, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../types/Game'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../utils/image-url'
import { useNavigate } from 'react-router-dom'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    const navigate = useNavigate()

    const navigateToGameDetail = () => {
        navigate(
            {
                pathname: `/game/${game?.slug}`,
            },
            { state: { id: game?.id } }
        )
    }

    return (
        <Card>
            <Image
                src={getCroppedImageUrl(game.background_image)}
                alt="bgImage"
            />
            <Box p={'2'}>
                <Heading
                    mt={'2'}
                    size="lg"
                    onClick={navigateToGameDetail}
                    cursor={'pointer'}
                >
                    {game?.name}
                </Heading>

                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platform={game?.parent_platforms} />
                    <CriticScore CriticScore={game?.metacritic} />
                </HStack>
            </Box>
        </Card>
    )
}

export default GameCard
