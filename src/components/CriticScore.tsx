import { Badge } from '@chakra-ui/react'

type Props = {
    CriticScore: number
}

const CriticScore = ({ CriticScore }: Props) => {
    return (
        <Badge
            fontSize={'1rem'}
            px="2"
            variant={'subtle'}
            colorScheme={
                CriticScore >= 90
                    ? 'green'
                    : CriticScore >= 60
                    ? 'yellow'
                    : 'red'
            }
        >
            {CriticScore}
        </Badge>
    )
}

export default CriticScore
