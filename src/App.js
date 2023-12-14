import {BrowserRouter,Switch, Route} from "react-router-dom"

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'


const App = () => (
   <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route component={NotFound} />
   </Switch>
   </BrowserRouter>
     
  
  )


export default App