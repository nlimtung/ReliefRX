import React from 'react';
import './ShiftIndexItem.css'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function ShiftIndexItem(props) {
  return (
    <div className = "ShiftIndexItem">
      <h1>Available Shifts</h1>

      {props.allshifts.map ((s)=>(
        <div className='index-card' key = {s._id} >
          <div className='index-text'>

            <h4>{s.name}</h4>
            <h5><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-pin-map" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
              <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
            </svg> {s.address}, {s.city}</h5><br/>

          </div>
          <div className='index-date'>
            <h6>Date needed: <br/></h6>
            <h6>{new Date(s.date).toDateString()}</h6>
            <Link to ={`/shifts/${s._id}`}><Button variant="outline-dark">
             See Details
            </Button></Link>

          </div>
         


           
        </div>
      ))}


    </div>
  );
}

export default ShiftIndexItem