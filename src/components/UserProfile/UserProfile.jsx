import React from 'react';
import './UserProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function UserProfile(props) {



  return (
    
    <div className = "UserProfile">

            <h6>Name:</h6>
            <h4>{props.name}</h4><br/>
            <h6>Email:</h6>
            <h4>{props.email}</h4><br/>
            {props.licenseNumber !== undefined ?
                <div>
                  <h6>License Number:</h6>
                  <h4>{props.licenseNumber}</h4><br/>
                </div>:
                <div></div>
              }
              {props.jobStatus !== undefined?
              <div>
                <h6>Job Status:</h6>
                <h4>{props.jobStatus}</h4>
              </div>:
              <div>
              </div>}
      
    </div>
  );
}

export default UserProfile