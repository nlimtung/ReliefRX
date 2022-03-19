import { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import AddShiftPage from './pages/AddShiftPage/AddShiftPage';
import HomePage from './pages/HomePage/HomePage';
import ShiftIndexPage from './pages/ShiftIndexPage/ShiftIndexPage';
import ShiftDetailsPage from './pages/ShiftDetailsPage/ShiftDetailsPage';
import AuthPage from './pages/AuthPage/AuthPage';
class App extends Component {

  state = {
    user:null,
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  render () {
    return (
      <div className='App'>
        {this.state.user ?
        <Switch>
  
          <Route path = '/shifts/new' render={(props) => (
              <AddShiftPage {...props}/>
          )}/>
            <Route path = '/shifts/all' render={(props) => (
              <ShiftIndexPage {...props}/>
          )}/>
                <Route path = '/shifts/:id' render={(props) => (
              <ShiftDetailsPage {...props}
    
              />
          )}/>  
             <Route path = '' render={(props) => (
              <HomePage {...props}
              />
          )}/>
        
        </Switch>
        :
        <AuthPage setUserInState={this.setUserInState}/>
      }
      </div>    
  )
  }
}

export default App;
