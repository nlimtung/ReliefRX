import React from 'react';
import './ShiftDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function ShiftDetails(props) {



  return (
    
    <div className = "ShiftDetails">
      <h1>{props.name}</h1>

      <div className='details-card'>

        <div className='details-table'>
         
          <h5>Address:</h5>
          <h3>{props.address}, {props.city}</h3><br/>
          <h5>Date:</h5>
          <h3>{new Date(props.date).toDateString()}</h3><br/>
          <h5>Software Used:</h5>
          <h3>{props.software}</h3><br/>
          <h5>Compensation:</h5>
          <h3> {props.compensation}</h3><br/>
          <h5>Additional Details: </h5>
          <h3> {props.additionalDetails}</h3><br/>
         
        </div>

          <br/>
          <hr/>
            CONTACT INFORMATION: <br/>
              name: {props.user.name}<br/>
              contact email : {props.user.email}
          <br/>
          <hr/>
          <br/>
If interested in the shift, please fill out form below:<br/><br/>
        <form onSubmit={(e)=>props.handleSubmit(e)
        }
        id={props.id}

        >
          <label>Message:</label> <br/>

          <textarea
            // commentName =   {props.selfUser.map((u)=>(u.name) )}

            onChange={(e)=>props.handleChange(e)}
            name = "interest"
            value = {props.interest}
            id={props._id}

            
          

           
          /> <br/>


          <Button
                variant="outline-dark"
                type = "submit"
                value = "submit"
          >Submit Interest</Button>
        </form>
      </div>

      
    </div>
  );
}

export default ShiftDetails