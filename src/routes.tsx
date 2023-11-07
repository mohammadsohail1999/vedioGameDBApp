import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import ErrorPage from './error-page'
import HomePage from './pages/HomePage'
import GameDetail from './pages/GameDetail'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/game/:gameId',
                element: <GameDetail />,
            },
            { index: true, element: <HomePage /> },
        ],
    },
])
