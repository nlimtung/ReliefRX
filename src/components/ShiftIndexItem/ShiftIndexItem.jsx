import React from 'react';
import './ShiftIndexItem.css'
import { Link } from 'react-router-dom';


function ShiftIndexItem(props) {



  // handlebutton
  // i want to click a button and filter by by id. and then display the details of the pharmacy
  return (
    <div className = "ShiftIndexItem">
      <h1>Available Shifts</h1>

      {props.allshifts.map ((s)=>(
        <div className='index-card' key = {s._id} >
            <h3>{s.name}</h3>
            <li>{s.address}</li>
            <li>{s.city}</li>
            <button onClick = {(e)=>props.handleButton(e)}
                type = "submit"
                value = "submit"

                >click</button>

            <Link to ={`/shifts/${s._id}`}>link</Link>

           
        </div>
      ))}
    </div>
  );
}

export default ShiftIndexItem