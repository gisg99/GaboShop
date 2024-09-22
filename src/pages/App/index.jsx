import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Account } from '../Account'
import { Home } from '../Home'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { Order } from '../Order'
import { SignIn } from '../SignIn'
import NavBar from '../../components/NavBar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/account', element: <Account/> },
    { path: '/order', element: <Order/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> },
  ])

  return routes;
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
