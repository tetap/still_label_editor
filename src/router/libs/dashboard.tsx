import { RouteObject } from 'react-router-dom'
import { lazyComponent } from '../lazyComponent'
import { BasicLayout } from '@/layout'
import Redirect from '../components/Redirect'

const dashboard: RouteObject[] = [
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Redirect to="/dashboard" />
      },
      {
        path: '/dashboard',
        element: lazyComponent(
          () => import(/* webpackChunkName: "Dashboard" */ '@/pages/Dashboard/Dashboard')
        )
      }
    ]
  }
]
export default dashboard
