import React from 'react';
import './LoginNav.css'


function LoginNav(props) {
  return (
      <div className = "NavBar" >
          <ul>
            <h1>RELIEF RX</h1>

            <li
                  onClick={(e) => props.handleLoginChange(e)}
                  >Log In </li>
            <li
                  onClick={(e) => props.handleSignUpChange(e)}
            >Sign Up </li>



          </ul>
      </div>
  );
}

export default LoginNav