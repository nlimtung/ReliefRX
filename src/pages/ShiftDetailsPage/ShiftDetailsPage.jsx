import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ShiftDetails from "../../components/ShiftDetails/ShiftDetails";



export default class ShiftDetailsPage extends Component {
    state = {
      shiftDetails:[]
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

      render() {
            return (
                <div className="page">
                  <NavBar/>

  


                    {this.state.shiftDetails.filter(allshifts=> allshifts._id ===this.props.match.params.id).map(filteredShift =>(
                          <ShiftDetails key = {filteredShift._id}
                        name = {filteredShift.name}
                        address = {filteredShift.address}
                        city = {filteredShift.city}
                        date = {filteredShift.date}
                        software = {filteredShift.software}
                        compensation = {filteredShift.compensation}
                        user = {filteredShift.user}

                        />
                        ))}


                </div>
            )  

        }
}