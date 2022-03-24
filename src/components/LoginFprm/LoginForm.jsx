

import React from "react";
import { Component } from "react";

export default class SignUpForm extends Component {
    state = {
        name: "", 
        email:"",
        phone: "", 
        password: "", 
    
    };


    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
          error: ''
        });
      };
    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const login = await fetch('/api/users/login', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: this.state.name, 
                    email: this.state.email, 
                    password: this.state.password,})
              })
              
              if (!login.ok) throw new Error('Fetch failed - Bad request')
              
              let token = await login.json() 
              window.localStorage.setItem("token", token)              
              const userDoc = JSON.parse(window.atob(token.split('.')[1])).user; 
              this.props.setUserInState(userDoc)
        }
        catch(err) {
            console.log ("login  failed", err)
            this.setState({error: 'login in error'})
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            required />
                    <label>Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required 
                        />
                    <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required />

                    <button type="submit" >SIGN UP</button>
                </form>
            </div>
        )
    }
}


