import React from "react";
import { Component } from "react";

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
            <div>
                <form autoComplete="off"onSubmit={this.handleSubmit}>
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
                    <label>Confirm</label>
                        <input 
                        type="password" 
                        name="confirm" 
                        value={this.state.confirm} 
                        onChange={this.handleChange} 
                        required />
                    <button type="submit"disabled={disable}>SIGN UP</button>
                </form>
            </div>
        )
    }
}