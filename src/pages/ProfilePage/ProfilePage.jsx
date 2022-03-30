import React, {Component} from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";

export default class ProfilePage extends Component {
    state = {
        user:[], 
        licenseNumber:'',
        jobStatus: '',
        showUpdateForm: false,
        assignedShifts: []
    }
    
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
        
    };
    handleEditSubmit=  (e) =>{

        this.setState({
            showUpdateForm: true
        })
    }


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
                // licenseNumber:'',
                // jobStatus: '', 
                showUpdateForm: false
       
            })
                console.log(serverResponse)
                window.location.reload()

        
        }
        catch(err) {
            console.log("error", err)
        }
    }




    async componentDidMount() {
        try {
          let jwt = localStorage.getItem('token')
          let fetchShiftReponse = await fetch('/api/shifts/assigned', { headers: { 'Authorization': 'Bearer ' + jwt }}) 

          let fetchUserReponse = await fetch('/api/users', { headers: { 'Authorization': 'Bearer ' + jwt }}) 
          let user = await fetchUserReponse.json();
          let shifts = await fetchShiftReponse.json();

          this.setState({user:user})
          this.setState({assignedShifts:shifts})

        } catch (err) {
          console.error('ERROR:', err) 
        }
      }




    render() {
        return (
            <div className="page">
                <NavBar/>
                    {this.state.user.map((u)=>(
            
                        <ProfileInfo key = {u._id}
                        user= {this.state.user}
                        oldlicenseNumber = {u.licenseNumber}
                        oldjobStatus= {u.jobStatus}
                        showUpdateForm = {this.state.showUpdateForm}
                        handleEditSubmit = {this.handleEditSubmit}
                    
                        />
                        
                    
                    ))}

                    {this.state.user.map((u)=>(

                    <UpdateProfileForm key = {u._id}
                            user= {this.state.user}
                            licenseNumber = {this.state.licenseNumber}
                            jobStatus= {this.state.jobStatus}
                            handleChange= {this.handleChange}
                            handleSubmit= {this.handleSubmit}
                            showUpdateForm = {this.state.showUpdateForm}
                            oldLicenseNumber = {u.licenseNumber}
                            oldJobStatus= {u.jobStatus}

                    />
                    ))}
                
               

            </div>

        )
    }
}