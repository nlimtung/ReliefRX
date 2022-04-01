import React from 'react';
import './ProfileInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function ProfileInfo(props) {
  return (
    <div className = "ProfileInfo" >
      <div className = "profileTop">
        {props.user.map((u)=>(
          <div key = {u._id} >
            <>
            <h1>{u.name}</h1>
            <br/> <br/>

            <div>
              <h6>email:</h6>
              <h4>{u.email}</h4><br/>
              {u.licenseNumber !== null ?
                <div>
                  <h6>License Number:</h6>
                  <h4>{u.licenseNumber}</h4><br/>
                </div>:
                <div></div>
              }
              {u.jobStatus !== null?
              <div>
                <h6>Job Status:</h6>
                <h4>{u.jobStatus}</h4>
              </div>:
              <div>
              </div>}
            </div>
            </>
            <div><br/>


               {/* edit profile */}

              <button onClick={(e)=>props.handleEditSubmit(e)}
                  type = "submit"
                  value = "submit">Edit Profile</button>
            </div>
          </div>
          
          ))}<br/>


<div className = "UpdateProfileForm" style={{display: props.showUpdateForm == true ? 'block' : 'none'}}  >
        <form onSubmit={(e)=>props.handleSubmit(e)}>
          <h4>Edit Profile:</h4>
  
          <label> License Number:</label><br/>

            <input
                name = "licenseNumber"
                type = "number"
                value = {props.licenseNumber}
                onChange={(e)=>props.handleChange(e)}
            /><br/><br/>
          <label>Job Status</label><br/>
            <select
              name= "jobStatus"
              default = ""
              type = "text"
              value = {props.jobStatus}
              onChange={(e)=>props.handleChange(e)}
            >
                <option value = ""></option>
                <option value = "Looking for shifts">Looking for shifts</option>
                <option value = 'Looking to fill shifts'>Looking to fill shifts</option>
                            
              </select><br/><br/>
              <Button
                  variant="outline-secondary"
                  type = "submit"
                  value = "submit"
              >Submit</Button>
        </form>
    </div>


        </div>
{/* assigned shifts */}
{props.assignedShifts.length ?
<div>
  <hr></hr>

        <h3>Assigned Shifts</h3><br/>

        {props.assignedShifts.map ((a)=>(
          <div key = {a._id} className = "assignedShiftTable">

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{new Date(a.date).toDateString()}</td>
                  <td>{a.address}, {a.city}</td>
                </tr>
              </tbody>



            </table>

          </div>
          
        ))}
      </div>:
      <div>
        
      </div>}


    </div>
  );
}

export default ProfileInfo