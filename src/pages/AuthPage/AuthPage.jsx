import { Component } from "react";
import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import NavBar from "../../components/NavBar/NavBar";


export default class AuthPage extends Component {
    state = {
        showLogin:true, 
    }


    render () {
        return (
            <div className="page">
                {/* <NavBar/> */}
                {/* if you click this and show login  */}
                <h2 onClick={() => (this.setState({showLogin: !this.state.showLogin}))}>
                    {this.state.showLogin ? 'Sign up': 'Log In'}
                </h2>

{/* 
                {this.state.showLogin ? 
        <LoginForm setUserInState={this.props.setUserInState}/> :  */}
        <SignUpForm setUserInState={this.props.setUserInState} />
            </div>
        )
    
    }
}
