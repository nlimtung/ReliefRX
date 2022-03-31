import React from 'react';
import './UpdateProfileForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function UpdateProfileForm(props) {
  return (
    <div className = "UpdateProfileForm" style={{display: props.showUpdateForm == true ? 'block' : 'none'}}  >
        <form onSubmit={(e)=>props.handleSubmit(e)}>
        <br/>
        <br/>
        <br/>
        <br/>


          <h4>Edit Profile:</h4>
  
          <label> License Number:</label><br/>

            <input
                name = "licenseNumber"
                type = "number"
                value = {props.licenseNumber}
                placeholder  = {props.oldLicenseNumber}
                onChange={(e)=>props.handleChange(e)}
            /><br/><br/>
          <label>Job Status</label><br/>
            <select
              name= "jobStatus"
              type = "text"
              value = {props.jobStatus}
              onChange={(e)=>props.handleChange(e)}
            >
                <option value = ""></option>
                <option value = "Looking for shifts">Looking for shifts</option>
                <option value = 'Looking to fill shifts'>Looking to fill shifts</option>
                            
              </select><br/><br/>
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