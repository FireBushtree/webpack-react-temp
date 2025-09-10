import { type RouteObject, useRoutes } from 'react-router'
import DefaultLayout from './layouts/default'
import Home from './pages/Home'
import Link from './pages/Link'

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/link',
        element: <Link />,
      },
    ],
  },
]

export default function AppRoutes() {
  const routes = useRoutes(routeConfig)
  return routes
}
