import React from 'react';
import './ProfileInfo.css'


function ProfileInfo(props) {
  return (
    <div className = "ProfileInfo">
        {props.user.map((u)=>(
          <>
          <h2>{u.name}</h2>
          <h2>{u.email}</h2>
          </>
        ))}
    </div>
  );
}

export default ProfileInfo