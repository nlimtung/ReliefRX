

import React from "react";
import { Component } from "react";
import './LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default class LoginForm extends Component {
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
                    email: this.state.email, 
                    password: this.state.password,})
              })
              
              if (!login.ok) throw new Error('Fetch failed - Bad request')
              
              let token = await login.json() 
              localStorage.setItem("token", token)              
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
            <div className="AuthForm">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label><br/>
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            required /><br/>
                    <label>Email</label><br/>
                        <input 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required 
                        /><br/>
                    <label>Password</label><br/>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            required /><br/><br/>

                    <Button type="submit"variant="outline-secondary">Log In </Button>

                </form>
            </div>
        )
    }
}


