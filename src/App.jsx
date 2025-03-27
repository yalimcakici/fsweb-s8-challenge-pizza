import './App.css'
import HomePage from './pages/HomePage'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import OrderPizza from './pages/OrderPizza'
import Succes from "./pages/Succes"
import NavContoreller from './assets/components/NavContoreller'

function App() {


  return (
    <>
      <Switch>
      <Route exact path="/">
      <Redirect to="/homepage"/>
      </Route>
      <Route path="/homepage">
      <HomePage />
      </Route> 
      <Route path="/order">
      <OrderPizza />
      </Route>
      <Route path="/succes">
      <Succes />
      </Route>
      </Switch>
      <NavContoreller/>    
    </>
  )
}

export default App
