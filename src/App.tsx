import { Genre } from './types/Genre'
import { PlatformData } from './types/PlatformData'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

export interface GameQuery {
    genre: Genre | null
    platform: PlatformData | null
    ordering: string
    search?: string
}

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 3,
                cacheTime: 300_000,
            },
        },
    })
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routes} />
            {/* <Grid
                templateAreas={`"header header header"
   "sideBar main main"`}
                templateColumns={{
                    base: '1fr',
                    lg: '200px 1fr',
                }}
            >
                <GridItem area={'header'}>
                    <NavigationBar />
                </GridItem>

              
            </Grid> */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
