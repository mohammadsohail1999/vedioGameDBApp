import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box
            _hover={{
                transform: 'scale(1.045)',
                transition: 'all .3s ease-out',
            }}
            width={'100%'}
            borderRadius={'10'}
            overflow={'hidden'}
        >
            {children}
        </Box>
    )
}

export default GameCardContainer
