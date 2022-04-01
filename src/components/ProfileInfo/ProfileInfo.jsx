import React from 'react';
import './ProfileInfo.css';
import { Link } from 'react-router-dom';

// import ImageUploader from 'react-images-upload';

// import AWS from 'aws-sdk'

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

        {props.file}





{/* assigned shifts */}
{props.assignedShifts.length ?
<div>
  <hr></hr>
  <form onSubmit = {(e)=>props.handleImageSubmit(e)}>
                <label>Select image:</label>
                <input 
                enctype="multipart/form-data"
                  type="file" 
                  // value= {props.file}
                  
                  // id="img" 
                  name="file-upload" 
                  accept="image/*"
                  onChange={(e)=>props.handleFileChange(e)}
                  />
                

                  <button
                    type = "submit"
                    value = "submit"
                    >Submit image
                  </button>
          </form>



        <h3>Assigned Shifts</h3><br/>

        {props.assignedShifts.map ((a)=>(
          <div key = {a._id} className = "assignedShiftTable">

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{new Date(a.date).toDateString()}</td>
                  <td>{a.address}, {a.city}</td>
                  <td> <Link to ={`/shifts/${a._id}`}>Details</Link></td>
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