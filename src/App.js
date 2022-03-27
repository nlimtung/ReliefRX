import { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import AddShiftPage from './pages/AddShiftPage/AddShiftPage';
import HomePage from './pages/HomePage/HomePage';
import ShiftIndexPage from './pages/ShiftIndexPage/ShiftIndexPage';
import ShiftDetailsPage from './pages/ShiftDetailsPage/ShiftDetailsPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MyPostsPage from './pages/MyPostsPage/MyPostsPage';
class App extends Component {

  state = {
    user:null,
    allshifts:[]
  }


  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }


  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      let userDoc = JSON.parse(window.atob(token.split('.')[1])).user // decode jwt token
      this.setState({user: userDoc})      
    }
  }

  render () {
    return (
      <div className='App'>
        {this.state.user ?
        <Switch>    
          <Route path = '/profile' render={(props) => (
              <ProfilePage {...props} />
          )}/>
          <Route path = '/shifts/new' render={(props) => (
              <AddShiftPage {...props}/>
          )}/>
          <Route path = '/shifts/all' render={(props) => (
              <ShiftIndexPage {...props}/>
              
          )}/>

          <Route path = '/shifts/myposts' render={(props) => (
              <MyPostsPage {...props}/>
          )}/>
          <Route path = '/shifts/:id' render={(props) => (
              <ShiftDetailsPage {...props} />
          )}/>  

          <Route path = '' render={(props) => (
              <HomePage {...props}/>
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
