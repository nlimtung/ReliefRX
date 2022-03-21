import React, {Component} from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

export default class ProfilePage extends Component {
    state = {
        userdetails:[]
    }

    async componentDidMount() {
        try {            
            let fetchedUserDetails = await fetch ('/api/users/') 
            let userdetails = await fetchedUserDetails.json();
            this.setState({userdetails: userdetails})
        
        }
        catch(err){
            console.log('error', err)
        }
    }

    render() {
        return (
            <div className="page">
                <NavBar/>
                <ProfileInfo/>
                {/* {this.state.allshifts}        */}
{this.state.userdetails.name}
            </div>

        )
    }
}