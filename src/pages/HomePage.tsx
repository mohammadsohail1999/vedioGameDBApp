import { GridItem, HStack } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'

const HomePage = () => {
    return (
        <>
            <GridItem
                display={['none', 'none', 'block']}
                px="5px"
                area={'sideBar'}
            >
                <GenreList />
            </GridItem>
            <GridItem px={'4'} area={'main'}>
                <HStack mb={'4'} spacing={'4'} alignItems={'center'}>
                    <PlatformSelector />
                    <SortSelector />
                </HStack>

                <GameGrid />
            </GridItem>
        </>
    )
}

export default HomePage
