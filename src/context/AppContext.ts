import { createContext } from 'react'

interface AppContextInterFace {
    genre?: string
    genreHandler?: (genre: string) => void
}

export default createContext<AppContextInterFace>({})
