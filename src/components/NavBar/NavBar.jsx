import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { Component } from "react";

export default class NavBar extends Component {

  handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear("token")
    window.location.href = '/'
  }

  render() {
    return (
      <div className = "NavBar">
          <ul>
          <h2>Nicole Lim Tung</h2>
            <Link to = "/shifts/new"><li>Submit a shift</li></Link>
            <Link to = '/shifts/all'><li>View all shifts</li></Link>
            <li>job postings</li>
            <li>profile</li>
            <li href = ""onClick={this.handleLogout}>Log out</li>

          </ul>
      </div>
  );
  }
}




