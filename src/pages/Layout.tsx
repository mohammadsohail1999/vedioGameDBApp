import NavigationBar from '../components/NavigationBar'
import { Outlet, useMatch } from 'react-router-dom'
import { Grid, GridItem } from '@chakra-ui/react'

const Layout = () => {
    const match = useMatch('/game/:id')

    return (
        <>
            <Grid
                templateAreas={
                    match
                        ? `"header header header"
                                "main main main"`
                        : `"header header header"
                                "sideBar main main"`
                }
                templateColumns={{
                    base: '1fr',
                    lg: '200px 1fr',
                }}
            >
                <GridItem area={'header'}>
                    <NavigationBar />
                </GridItem>
                <Outlet />
            </Grid>
        </>
    )
}

export default Layout
