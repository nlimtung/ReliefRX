import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ShiftIndexItem from "../../components/ShiftIndexItem/ShiftIndexItem";

export default class ShiftIndexPage extends Component {
    state = {
        allshifts:[]
    }
    async componentDidMount() {
        try {
          let fetchShiftReponse = await fetch('/api/shifts') 
          let shifts = await fetchShiftReponse.json();
          this.setState({allshifts:shifts})
        } catch (err) {
          console.error('ERROR:', err) 
        }
      }
    handleButton= (e) =>{
      e.preventDefault()

      console.log('click')
    }
    render(){
    return (
        <div className="page">
            <NavBar/>



            <ShiftIndexItem allshifts={this.state.allshifts} handleButton = {this.handleButton}/>
  

        
        </div>
    )
    }
}