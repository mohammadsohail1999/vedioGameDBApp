import { Button, HStack, Image, List } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import getCroppedImageUrl from '../utils/image-url'
import GenereSkeleton from './GenereSkeleton'
import { useGameHubStore } from '../state-management/store'

const GenreList = () => {
    const { data, error, isLoading } = useGenre()

    const { selectedGenre, onSelectGenre } = useGameHubStore((state) => ({
        selectedGenre: state?.genre,
        onSelectGenre: state?.onGenreSelect,
    }))

    if (isLoading) {
        return <GenereSkeleton />
    }

    if (error) {
        return 'oops'
    }

    return (
        <List>
            {data?.length
                ? data?.map((genre) => {
                      return (
                          <List py={'5px'} key={genre?.id}>
                              <HStack>
                                  <Image
                                      boxSize={'32px'}
                                      borderRadius={8}
                                      src={getCroppedImageUrl(
                                          genre?.image_background
                                      )}
                                  />
                                  <Button
                                      onClick={() => {
                                          onSelectGenre(genre)
                                      }}
                                      fontWeight={
                                          genre?.id === selectedGenre?.id
                                              ? 'bold'
                                              : 'normal'
                                      }
                                      variant={'link'}
                                      fontSize={'large'}
                                  >
                                      {genre?.name}
                                  </Button>
                              </HStack>
                          </List>
                      )
                  })
                : null}
        </List>
    )
}

export default GenreList
