import React from 'react';
import './ProfileInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function ProfileInfo(props) {
  return (
    <div className = "ProfileInfo">
        {props.user.map((u)=>(
          <>
          <h1>{u.name}</h1>
          <br/> <br/>
          <div>
            <h6>email:</h6>
            <h4>{u.email}</h4><br/>
            <h6>License Number:</h6>
            <h4>{u.licenseNumber}</h4><br/>
            <h6>Job Status:</h6>
            <h4>{u.jobStatus}</h4>
          </div>
          </>
        ))}

    </div>
  );
}

export default ProfileInfo