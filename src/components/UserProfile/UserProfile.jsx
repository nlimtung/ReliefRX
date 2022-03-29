import React from 'react';
// import './UserProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function UserProfile(props) {



  return (
    
    <div className = "UserProfile">
      {props.name}
      
    </div>
  );
}

export default UserProfile