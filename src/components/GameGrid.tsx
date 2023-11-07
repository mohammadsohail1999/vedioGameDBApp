import { Box, SimpleGrid } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'
import GameCard from './GameCard'
import React, { useEffect, useMemo, useRef } from 'react'
import CardSkeleton from './CardSkeleton'
import GameCardContainer from './GameCardContainer'
import { useGameHubStore } from '../state-management/store'

function isInViewport(element: HTMLDivElement | null) {
    if (!element) return false
    const rect = element?.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    )
}

const GameGrid = () => {
    const { selectedGenre, selectedPlatform, selectedOrder, search } =
        useGameHubStore((state) => ({
            selectedGenre: state?.genre,
            selectedPlatform: state?.platform,
            selectedOrder: state?.ordering,
            search: state?.search,
        }))

    const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
        useGames({
            page: 1,
            page_size: 8,
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id,
            ordering: selectedOrder,
            search: search ? search : undefined,
        })

    const observerTarget = useRef(null as HTMLDivElement | null)

    useEffect(() => {
        if (!hasNextPage) return

        const infiniteHandler = () => {
            if (
                isInViewport(observerTarget?.current) &&
                hasNextPage &&
                !isFetchingNextPage
            ) {
                fetchNextPage()
            } else {
                return
            }
        }

        document
            ?.querySelector('.gameGrid')
            ?.addEventListener('scroll', infiniteHandler)

        return () => {
            document
                ?.querySelector('.gameGrid')
                ?.removeEventListener('scroll', infiniteHandler)
        }
    }, [hasNextPage])

    const skeletonArray = useMemo(() => {
        return Array.from({ length: 8 })
    }, [])

    return (
        <Box
            sx={{
                height: '80vh',
                overflowY: 'scroll',
            }}
            className="gameGrid"
        >
            {/* {error && <h1>something went wrong</h1>} */}
            {isLoading && (
                <SimpleGrid spacing={3} columns={[1, 2, 3, 4]}>
                    {skeletonArray?.map((_, index) => {
                        return (
                            <GameCardContainer key={index}>
                                <CardSkeleton />
                            </GameCardContainer>
                        )
                    })}
                </SimpleGrid>
            )}

            {data && (
                <SimpleGrid spacing={3} columns={[1, 2, 3, 4]}>
                    {data?.pages?.map((page) => {
                        return (
                            <React.Fragment key={page?.next}>
                                {page?.results?.map((game) => (
                                    <GameCardContainer key={game.id}>
                                        <GameCard game={game} />
                                    </GameCardContainer>
                                ))}
                            </React.Fragment>
                        )
                    })}

                    {isFetchingNextPage
                        ? skeletonArray?.map((_, index) => {
                              return (
                                  <GameCardContainer key={index}>
                                      <CardSkeleton />
                                  </GameCardContainer>
                              )
                          })
                        : null}
                </SimpleGrid>
            )}

            <Box height={'5vh'} ref={observerTarget}></Box>
        </Box>
    )
}

export default GameGrid
