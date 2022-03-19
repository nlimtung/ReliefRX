import { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import AddShiftPage from './pages/AddShiftPage/AddShiftPage';
import TestPage from './pages/TestPage/TestPage/TestPage';
import ShiftIndexPage from './pages/ShiftIndexPage/ShiftIndexPage';
import ShiftDetailsPage from './pages/ShiftDetailsPage/ShiftDetailsPage';

class App extends Component {

  render () {
    return (
      <div className='App'>
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
              <TestPage {...props}
              />
          )}/>
        
 
        </Switch>
      </div>    
  )
  }
}

export default App;
