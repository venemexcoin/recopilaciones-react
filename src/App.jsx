import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Login from './component/Login'

function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            inicio...
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/admin'>Admin...</Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
