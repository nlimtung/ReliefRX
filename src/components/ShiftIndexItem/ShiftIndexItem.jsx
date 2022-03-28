import React from 'react';
import './ShiftIndexItem.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function ShiftIndexItem(props) {
  return (
    <div className = "ShiftIndexItem">
      <h1>Available Shifts</h1>

      {props.allshifts.map ((s)=>(
        <div className='index-card' key = {s._id} >
          <div className='index-text'>
            <h3>{s.name}</h3>
            <h4>{s.address}, {s.city}</h4><br/>
            <Link to ={`/shifts/${s._id}`}><Button variant="outline-dark">
             See Details
            </Button></Link>
          </div>
          <div className='index-date'>
            <h6>Date needed: <br/></h6>
            <h5>{new Date(s.date).toDateString()}</h5>
          </div>
         


           
        </div>
      ))}


    </div>
  );
}

export default ShiftIndexItem