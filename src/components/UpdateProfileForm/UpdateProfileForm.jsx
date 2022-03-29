import React from 'react';
// import './ProfileInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function UpdateProfileForm(props) {
  return (
    <div className = "UpdateProfileForm">
        <form onSubmit={(e)=>props.handleSubmit(e)}>
          <label> License Number:</label><br/>

            <input
                name = "licenseNumber"
                type = "number"
                value = {props.licenseNumber}
                onChange={(e)=>props.handleChange(e)}
            /><br/>
          <label>Job Status</label>
            <select
              name= "jobStatus"
              type = "text"
              value = {props.jobStatus}
              onChange={(e)=>props.handleChange(e)}
            >
                <option value = ""></option>
                <option value = "Looking for shifts">Looking for shifts</option>
                <option value = 'Looking to fill shifts'>Looking to fill shifts</option>
                            
              </select>
              <Button
                  variant="outline-dark"
                  type = "submit"
                  value = "submit"
              >Submit</Button>
        </form>
    </div>
  );
}

export default UpdateProfileForm