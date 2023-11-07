import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import useDebounce from '../hooks/useDebounce'
import { useEffect, useState } from 'react'

type Props = {
    onSearch: (val: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
    const { debounceInput, setInput } = useDebounce('', 500)
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        if (!firstRender) {
            onSearch(debounceInput)
        }
        setFirstRender(false)
    }, [debounceInput])

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Search Games..."
            />
        </InputGroup>
    )
}

export default SearchInput
