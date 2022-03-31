import React from 'react';
import './ProfileInfo.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


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
              <h6>License Number:</h6>
              <h4>{u.licenseNumber}</h4><br/>
              <h6>Job Status:</h6>
              <h4>{u.jobStatus}</h4>
            </div>
            </>
            <div><br/>

              <button onClick={(e)=>props.handleEditSubmit(e)}
                  type = "submit"
                  value = "submit">Edit Profile</button>
            </div>
          </div>
          
          ))}<br/>
               {/* edit profile */}


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