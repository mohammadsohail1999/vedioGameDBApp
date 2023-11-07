import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useDebounce = (val: string, timeout: number) => {
    const [input, setInput] = useState(val)
    const [debounceInput, setDebounceInput] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setTimeout(() => {
            setDebounceInput(input)
            navigate('/')
        }, timeout)
        return () => clearInterval(interval)
    }, [input])

    return { debounceInput, setInput }
}

export default useDebounce
