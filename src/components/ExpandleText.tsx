import { Box, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

type Props = {
    desc: string
    length: number
}

const ExpandleText = ({ desc, length }: Props) => {
    const [showMore, setShowMore] = useState(false)

    const toggleShowMore = () => setShowMore(!showMore)

    return (
        <Box>
            {desc?.length < length ? (
                <Text>{desc}</Text>
            ) : (
                <Text>
                    {!showMore ? `${desc?.slice(0, 250)}...` : desc}
                    <Button
                        h={'8'}
                        w="18"
                        colorScheme="yellow"
                        onClick={toggleShowMore}
                    >
                        Show {!showMore ? 'more' : 'less'}
                    </Button>
                </Text>
            )}
        </Box>
    )
}

export default ExpandleText
