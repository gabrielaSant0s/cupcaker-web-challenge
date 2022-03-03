import { AppRoute } from './types'
import Home from 'app/core/pages/home'
import CreateNewCoin from 'app/core/pages/create-new-coin'


export const coreRoutes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/private', exact: true, component: Home, isPrivate: true },
  { path: '/add-new-coin', exact: true, component: CreateNewCoin },
  
]
