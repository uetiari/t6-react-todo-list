import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router'
import Login from './pages/login' 
import Signup from './pages/signup'

//criando os caminhos das urls
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/conta' component={Signup} />
      </Switch>
    //endreço do site/login e também endereçodosite/conta 
    )
  }
}

export default withRouter(App);
