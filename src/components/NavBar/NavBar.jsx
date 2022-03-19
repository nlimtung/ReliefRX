import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';


function NavBar(props) {
  return (
      <div className = "NavBar">
          <ul>
          <h2>Nicole Lim Tung</h2>

            <Link to = "/shifts/new"><li>Submit a shift</li></Link>
            <Link to = '/shifts/all'><li>View all shifts</li></Link>
            <a><li>job postings</li></a>
            <a><li>profile</li></a>
          </ul>
      </div>
  );
}

export default NavBar