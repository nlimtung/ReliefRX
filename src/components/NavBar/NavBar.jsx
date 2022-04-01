import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { Component } from "react";

export default class NavBar extends Component {


  state = {
    user:[], 
    myPosts:[]
}




async componentDidMount() {
  try {
    let jwt = localStorage.getItem('token')
    let fetchUserReponse = await fetch('/api/users', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
    let fetchShiftReponse = await fetch('/api/shifts/myposts', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
    let myPosts = await fetchShiftReponse.json();
    let user = await fetchUserReponse.json();
    this.setState({user:user})
    this.setState({myPosts:myPosts})


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
            <h1>Relief RX</h1>
            {this.state.user.map((u)=>(
              <h3 key = {u._id}>welcome <br/>{u.name}</h3>
            ))}

            <Link to = "/shifts/new"><li>Submit a shift</li></Link>
            <Link to = '/shifts/all'><li>Available shifts</li></Link>
            {this.state.myPosts.length? 
            
            <Link to = '/shifts/myposts'><li>My postings</li></Link>:
            <div></div>}

            <Link to = '/profile'><li>Profile</li></Link>
            <li href = ""onClick={this.handleLogout}>Log out</li>

          </ul>
      </div>
  );
  }
}




