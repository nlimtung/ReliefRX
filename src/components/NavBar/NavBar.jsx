import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { Component } from "react";

export default class NavBar extends Component {


  state = {
    user:[]
}

async componentDidMount() {
  try {
    let jwt = localStorage.getItem('token')
    let fetchShiftReponse = await fetch('/api/users', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
    let user = await fetchShiftReponse.json();
    this.setState({user:user})

  } catch (err) {
    console.error('ERROR:', err) 
  }
}
handleButton= (e) =>{
e.preventDefault()

console.log('click')
}


  handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear("token")
    window.location.href = '/'
  }



  render() {
    return (
      <div className = "NavBar">
          <ul>

          {this.state.user.map((u)=>(
            <h2>{u.name}</h2>
          ))}
            <Link to = "/shifts/new"><li>Submit a shift</li></Link>
            <Link to = '/shifts/all'><li>Available shifts</li></Link>
            <li>job postings</li>
            <Link to = '/profile'><li>Profile</li></Link>
            <li href = ""onClick={this.handleLogout}>Log out</li>

          </ul>
      </div>
  );
  }
}




