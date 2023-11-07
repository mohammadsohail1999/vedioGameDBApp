import { create } from 'zustand'
import { Genre } from '../types/Genre'
import { PlatformData } from '../types/PlatformData'
import sortData from '../utils/sortData'
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface GameHubQueryType {
    genre: Genre | null
    platform: PlatformData | null
    ordering: string
    search?: string
    onSearch: (search: string) => void
    onGenreSelect: (genre: Genre) => void
    onSelectPlatForm: (platform: PlatformData) => void
    onSortSelector: (sortItem: string) => void
}

export const useGameHubStore = create<GameHubQueryType>((set) => ({
    genre: null,
    platform: null,
    ordering: sortData[0][0],
    search: '',
    onSearch: (search) => set(() => ({ search })),
    onGenreSelect: (genre) => set(() => ({ genre })),
    onSelectPlatForm: (platform) => set(() => ({ platform })),
    onSortSelector: (ordering) => set(() => ({ ordering })),
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('gameHubStore', useGameHubStore)
}
