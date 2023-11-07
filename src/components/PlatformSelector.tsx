import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatforms'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useGameHubStore } from '../state-management/store'

const PlatformSelector = () => {
    const { data, error } = usePlatforms()

    const { onSelectPlatForm } = useGameHubStore((state) => ({
        onSelectPlatForm: state?.onSelectPlatForm,
    }))

    if (error) {
        return <>something went wrong</>
    }

    return (
        <Box>
            {data?.length ? (
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Platforms
                    </MenuButton>
                    <MenuList>
                        {data?.map((platform) => {
                            return (
                                <MenuItem
                                    key={platform?.id}
                                    value={platform?.id}
                                    onClick={() => onSelectPlatForm(platform)}
                                >
                                    {platform?.name}
                                </MenuItem>
                            )
                        })}
                    </MenuList>
                </Menu>
            ) : null}
        </Box>
    )
}

export default PlatformSelector
