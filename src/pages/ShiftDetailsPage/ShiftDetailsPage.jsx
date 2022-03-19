import React, { Component } from "react";


export default class ShiftDetailsPage extends Component {
    state = {
        shiftDetails:[]
    }

    async componentDidMount() {
        try {
          let fetchDetailsReponse = await fetch('/api/shifts/id') 
          let shiftdetails = await fetchDetailsReponse.json();
          this.setState({shiftDetails:shiftdetails})
        } catch (err) {
          console.error('ERROR:', err) 
        }
      }

      render() {
            return (
                <div>


                    {this.state.shiftDetails.filter(allshifts=> allshifts._id ===this.props.match.params.id).map(filteredShift =>(
                        <li key = {filteredShift._id}>
                        {filteredShift.name}
                        </li>
                        ))}

         {/* {this.state.shiftDetails.map ((s)=>(
        <div className='index-card' key = {s._id} >
            <h3>{s.name}</h3>
            <li>{s.address}</li>
            <li>{s.city}</li>

           
        </div>
      ))} */}

                </div>
            )

        }
}