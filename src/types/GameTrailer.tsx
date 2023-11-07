export interface GameTrailer {
    count: number
    next: number | null
    previous: number | null
    results: [
        {
            id: number
            name: string
            preview: string
            data: {
                '480': string
                max: string
            }
        }
    ]
}
