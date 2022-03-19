// import e from "express";
import React, { Component } from "react";
import AddShiftForm from "../../components/AddShiftForm/AddShiftForm";
import NavBar from "../../components/NavBar/NavBar";


export default class AddShiftPage extends Component {
    state = {
        name:'',
        address: '', 
        date: '', 
        software: '', 
        compensation: '', 
        city: '', 
      }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    };

    handleSubmit= async (e) =>{
        e.preventDefault()
        try{
            const createShift = await fetch("/api/shifts/new", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name:this.state.name,
                    address:this.state.address,
                    date:this.state.date,
                    software:this.state.software,
                    compensation: this.state.compensation, 
                    city: this.state.city
                })
            })
            let serverResponse = await createShift.json()
            console.log("Success:", serverResponse)  
            this.setState({ 
                name:'',
                address: '', 
                date: '', 
                software: '', 
                compensation: '', 
                city: ''
            })
                console.log(serverResponse)
        
        }
        catch(err) {
            console.log("error", err)
        }
    }
    
    render(){
    return (
        <div className="page">
            <NavBar/>
         
            {/* <Title/> */}
            <AddShiftForm
                handleChange = {this.handleChange}   
                handleSubmit = {this.handleSubmit} 
                name = {this.state.name}
                address = {this.state.address}
                date = {this.state.date}
                compensation = {this.state.compensation}
                sofware = {this.state.software}
                city = {this.state.city}
            />
        </div>
    )
    }
}