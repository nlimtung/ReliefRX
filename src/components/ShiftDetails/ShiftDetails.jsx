import React from 'react';
import './ShiftDetails.css'


function ShiftDetails(props) {



  return (
    <div className = "ShiftDetails">
      Pharmacy name:      {props.name}
      {props.address}{props.city}<br/>
      software: {props.software}<br/>
      compensation : {props.compensation}<br/>
    </div>
  );
}

export default ShiftDetails