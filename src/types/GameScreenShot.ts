export interface GameScreenShot {
    count: number
    next: string
    previous: string
    results: [
        {
            id: number
            image: string
            width: number
            height: number
            is_deleted: boolean
        }
    ]
}
