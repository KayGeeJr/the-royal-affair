import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TRACreationsPage from './pages/TRACreationsPage'
import TracMagazinePage from './pages/TracMagazinePage'
import PrincessPage from './pages/PrincessPage'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/tra-creations', element: <TRACreationsPage /> },
  { path: '/trac-magazine', element: <TracMagazinePage /> },
  { path: '/princess', element: <PrincessPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
