import React, {Component} from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";

export default class ProfilePage extends Component {
    state = {
        user:[], 
        licenseNumber:'',
        jobStatus: ''
    }



    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    };


    handleSubmit= async (e) =>{
        e.preventDefault()
        try{
            console.log("hello")
            let jwt = localStorage.getItem('token')
            const createShift = await fetch("/api/users/:id/edit", {
                method: "PUT",
                headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + jwt},
                body: JSON.stringify({
                    licenseNumber: this.state.licenseNumber,
                    jobStatus: this.state.jobStatus
                   
                })
            })
            let serverResponse = await createShift.json()
            console.log("Success:", serverResponse)  
            this.setState({ 
                licenseNumber:'',
                jobStatus: '', 
       
            })
                console.log(serverResponse)
        
        }
        catch(err) {
            console.log("error", err)
        }
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
                    <UpdateProfileForm
                            user= {this.state.user}
                            licenseNumber = {this.state.licenseNumber}
                            jobStatus= {this.state.jobStatus}
                            handleChange= {this.handleChange}
                            handleSubmit= {this.handleSubmit}
                    />
                
               

            </div>

        )
    }
}