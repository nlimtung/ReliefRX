import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ShiftDetails from "../../components/ShiftDetails/ShiftDetails";



export default class ShiftDetailsPage extends Component {
    state = {
      shiftDetails:[], 
      interest: '', 
    }

    async componentDidMount() {
      try {
        let jwt = localStorage.getItem('token')
        let fetchShiftReponse = await fetch('/api/shifts', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
        let shiftDetails = await fetchShiftReponse.json();
        this.setState({shiftDetails:shiftDetails})

      } catch (err) {
        console.error('ERROR:', err) 
      }
    }

    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
      
    };

    handleSubmit= async (e) =>{
      e.preventDefault()
      try{
        console.log('')
        console.log (e.target.commentName)
          let jwt = localStorage.getItem('token')
          const createComment = await fetch("/api/shifts/:id/comment", {
              method: "POST",
              headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
              body: JSON.stringify({
                  comment: this.state.interest,
                  id:e.target.id, 

                })
          })
          let serverResponse = await createComment.json()
            console.log("Success:", serverResponse)  
            this.setState({ 
              interest: ''
          })
          alert("Thank you.Your Message has been sent.");

      
      }
      catch(err) {
          console.log("error", err)
      }
  }

      render() {
            return (
                <div className="page">
                  <NavBar/>

  

                    {this.state.shiftDetails.filter(allshifts=> allshifts._id ===this.props.match.params.id).map(filteredShift =>(
                          <ShiftDetails key = {filteredShift._id}
                        additionalDetails = {filteredShift.additionalDetails}
                        id = {filteredShift._id}
                        name = {filteredShift.name}
                        address = {filteredShift.address}
                        city = {filteredShift.city}
                        date = {filteredShift.date}
                        software = {filteredShift.software}
                        compensation = {filteredShift.compensation}
                        user = {filteredShift.user}
                        comment = {filteredShift.comment}
                        interest = {this.state.interest}
                        handleChange = {this.handleChange}
                        handleSubmit = {this.handleSubmit}
                        />
                        ))}


                </div>
            )  

        }
}