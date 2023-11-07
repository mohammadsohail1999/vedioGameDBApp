import { HStack, Icon } from '@chakra-ui/react'
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from 'react-icons/fa'

import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { ParentPlatform } from '../types/PlatformData'

interface Props {
    platform: ParentPlatform[]
}

const PlatformIconList = ({ platform }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        playstation: FaPlaystation,
        pc: FaWindows,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    }

    return (
        <>
            {platform?.length && (
                <HStack marginY={1} spacing={'1.5'}>
                    {platform?.map(({ platform }) => {
                        return (
                            <Icon
                                key={platform?.id}
                                as={iconMap[platform?.slug]}
                                color={'gray.500'}
                            />
                        )
                    })}{' '}
                </HStack>
            )}
        </>
    )
}

export default PlatformIconList
