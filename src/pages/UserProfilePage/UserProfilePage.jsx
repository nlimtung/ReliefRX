import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
// import NavBar from "../../components/NavBar/NavBar";
// import ShiftIndexItem from "../../components/ShiftIndexItem/ShiftIndexItem";
import UserProfile from "../../components/UserProfile/UserProfile";

export default class UserProfilePage extends Component {
    state = {
        users: []
    }
    async componentDidMount() {

     
        try {
          let jwt = localStorage.getItem('token')
          let fetchUserReponse = await fetch('/api/users/all', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
          let users = await fetchUserReponse.json();
          this.setState({users:users})

        } catch (err) {
          console.error('ERROR:', err) 
        }
      }

    render(){
    return (
        <div className="page">
            <NavBar/>
            {this.state.users.filter(all =>all._id ===this.props.match.params.id).map(oneUser=>
          <UserProfile
                name = {oneUser.name}
                email = {oneUser.email}
                licenseNumber= {oneUser.licenseNumber}
                jobStatus = {oneUser.jobStatus}
          />
          )}


        
        </div>
    )
    }
}