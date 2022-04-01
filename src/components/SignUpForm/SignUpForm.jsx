import React from "react";
import { Component } from "react";
import './SignUpForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

export default class SignUpForm extends Component {
    state = {
        name: "", 
        email:"",
        phone: "", 
        password: "", 
        confirm: "", 
        error: "", 
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

            const signUp = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    confirm: this.state.confirm,
                  })
              })

              if (!signUp.ok) throw new Error(signUp)

              const token = await signUp.json() 
              window.localStorage.setItem('token', token)
              
              const userDoc = await JSON.parse(window.atob(token.split('.')[1])).user; 
              this.props.setUserInState(userDoc)
        }
        catch(err) {
            console.log ("sign failed", err)
            this.setState({error: 'Signup error'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;

        return (
            <div className="AuthForm">
                <h1>Sign Up</h1>
                <form autoComplete="off"onSubmit={this.handleSubmit}>
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
                            required /><br/>
                    <label>Confirm</label><br/>
                        <input 
                        type="password" 
                        name="confirm" 
                        value={this.state.confirm} 
                        onChange={this.handleChange} 
                        required /><br/><br/>


                    {/* <button type="submit"disabled={disable}>SIGN UP</button> */}
                    <Button type="submit"disabled={disable}variant="outline-secondary">Sign Up</Button>


                </form>

            </div>
        )

    }
}