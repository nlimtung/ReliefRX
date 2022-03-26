import React, {Component} from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

export default class ProfilePage extends Component {
    state = {
        user:[]
    }

    async componentDidMount() {
        try {
          let jwt = localStorage.getItem('token')
          let fetchShiftReponse = await fetch('/api/users', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
          let user = await fetchShiftReponse.json();
          this.setState({user:user})
      
        } catch (err) {
          console.error('ERROR:', err) 
        }
      }



    render() {
        return (
            <div className="page">
                <NavBar/>
                    {this.state.user.map((u)=>(
            
                        <ProfileInfo
                        user= {this.state.user}
                        />
                    
                    ))}
                
               

            </div>

        )
    }
}