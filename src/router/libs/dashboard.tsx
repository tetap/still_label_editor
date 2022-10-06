import { lazyComponent } from '../lazyComponent'
import Redirect from '../components/Redirect'

export default [
  {
    path: '/',
    element: <Redirect to="/dashboard" />
  },
  {
    path: '/dashboard',
    element: lazyComponent(() => import(/* webpackChunkName: "Dashboard" */ '@/pages/Dashboard'))
  }
]
