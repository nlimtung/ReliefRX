import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import MyPostsIndex from "../../components/MyPostsIndex/MyPostsIndex";

export default class MyPostsPage extends Component {

    state = {
        myPosts: []
    }

    async componentDidMount() {
        try {
          let jwt = localStorage.getItem('token')
          let fetchShiftReponse = await fetch('/api/shifts/myposts', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
          let myPosts = await fetchShiftReponse.json();
          this.setState({myPosts:myPosts})

        } catch (err) {
          console.error('ERROR:', err) 
        }
      }
    render(){
    return (
        <div className="page">
            <NavBar/>
            <MyPostsIndex/>
            {this.state.myPosts.map((m)=>(
              <h1>{m.name}</h1>
            ))}
  


  

        
        </div>
    )
    }
}