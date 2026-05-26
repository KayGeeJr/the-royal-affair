import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import TRACreationsPage from './pages/TRACreationsPage'
import TracMagazinePage from './pages/TracMagazinePage'
import PrincessPage from './pages/PrincessPage'

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

const routes = [
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/tra-creations', element: <TRACreationsPage /> },
      { path: '/trac-magazine', element: <TracMagazinePage /> },
      { path: '/princess', element: <PrincessPage /> },
    ],
  },
]

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
const router = createBrowserRouter(routes, basename ? { basename } : undefined)

export default function App() {
  return <RouterProvider router={router} />
}
