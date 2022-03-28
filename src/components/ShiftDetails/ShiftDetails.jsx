import React from 'react';
import './ShiftDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';



function ShiftDetails(props) {



  return (
    <div className = "ShiftDetails">
      Pharmacy name:      {props.name}
      {props.address}{props.city}<br/>
      software: {props.software}<br/>
      compensation : {props.compensation}<br/>

      <br/><br/>
      contact: {props.user.name}<br/>
      contact email : {props.user.email}
      {props.id}


      <form onSubmit={(e)=>props.handleSubmit(e)
      }
      id={props.id}

      >
        <label>Comment</label>
        <input
          onChange={(e)=>props.handleChange(e)}

          name = "interest"
          value = {props.interest}
          id={props._id}

        />


        <Button
              variant="outline-dark"
              type = "submit"
              value = "submit"
        >Submit Interest</Button>
      </form>


      
    </div>
  );
}

export default ShiftDetails