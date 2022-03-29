import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import MyPostsIndex from "../../components/MyPostsIndex/MyPostsIndex";

export default class MyPostsPage extends Component {

    state = {
        myPosts: [],
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

      handleDelete= async (e) =>{
        e.preventDefault()
        try{
          console.log(e.target.id)
            const deleteShift = await fetch(`/api/shifts/${e.target.id}`,  {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            })   
            let serverResponse = await deleteShift.json()
            console.log("Delete Successful:", serverResponse)  
            window.location.reload()
        }
        catch(err) {
            console.log("error", err)
        }
    }

    render(){
    return (
        <div className="page">
            <NavBar/>
            <MyPostsIndex
              myPosts = {this.state.myPosts}
              handleDelete = {this.handleDelete}
              users = {this.state.users}/>
        </div>
    )
    }
}