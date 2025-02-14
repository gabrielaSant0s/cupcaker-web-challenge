import { AppRoute } from './types'
import Home from 'app/core/pages/home'
import CreateNewCoin from 'app/core/pages/create-new-coin'
import SelectCoin from 'components/atoms/select-coin'
import PegaForm from 'components/atoms/pega-form'


export const coreRoutes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/private', exact: true, component: Home, isPrivate: true },
  { path: '/add-new-coin', exact: true, component: CreateNewCoin },
  
]
