import { Component } from "react";
import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavBar from "../../components/NavBar/NavBar";
import LoginForm from "../../components/LoginFprm/LoginForm";
import LoginNav from "../../components/LoginInNav/LoginNav";


export default class AuthPage extends Component {

    state = {
        displayLoginIn: true
    }


    handleLoginChange = (e)=>{
        this.setState({displayLoginIn:true})
    }

    handleSignUpChange = (e)=>{
        this.setState({displayLoginIn:false})
    }

    render () {
        return (
            <div className="page">
                <LoginNav handleLoginChange = {this.handleLoginChange}
                displayLoginIn = {this.displayLoginIn}
                handleSignUpChange = {this.handleSignUpChange}/>

                {this.state.displayLoginIn ?
                    <LoginForm setUserInState={this.props.setUserInState}/> :
                    <SignUpForm setUserInState={this.props.setUserInState} />
                
                }
            </div>
        )
    
    }
}
