import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import sortData from '../utils/sortData'
import { useGameHubStore } from '../state-management/store'

const SortSelector = () => {
    const { onSortSelector, currentSort } = useGameHubStore((state) => ({
        onSortSelector: state?.onSortSelector,
        currentSort: state?.ordering,
    }))

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Sort Via :{' '}
                {currentSort[0]?.toUpperCase() + currentSort?.slice(1)}
            </MenuButton>
            <MenuList>
                {sortData?.map((item) => {
                    return (
                        <MenuItem
                            onClick={() => {
                                onSortSelector(item[0])
                            }}
                            key={item[1]}
                            value={item[0]}
                        >
                            {item[1]}
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    )
}

export default SortSelector
