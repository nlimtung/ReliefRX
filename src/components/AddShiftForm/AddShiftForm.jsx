import React from "react";
import './AddShiftForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function AddShiftForm(props) {
    return (
        <div className="AddShiftForm">
            <h1>Post a shift</h1>

            <form onSubmit={(e)=>props.handleSubmit(e)}>
                <label> Pharmacy Name:</label><br/>

                    <input
                        name = "name"
                        type = "text"
                        value = {props.name}
                        onChange={(e)=>props.handleChange(e)}
                    /><br/>

                <label> City:</label><br/>

                    <input
                        name = "city"
                        type = "text"
                        value = {props.city}
                        onChange={(e)=>props.handleChange(e)}
                        required
                    /><br/>

                <label>Address: </label><br/>

                    <input
                        name = "address"
                        type = "text"
                        value = {props.address}
                        onChange={(e)=>props.handleChange(e)}
                        required
                    /> <br/>
                <label>Date:</label><br/>
                     <input
                        name = "date"
                        type = "date"
                        value = {props.date}
                        onChange={(e)=>props.handleChange(e)}
                        required
                    /> <br/>

                
                <label>Software:</label><br/>
                    <select
                        name = "software"
                        type = "text"
                        value = {props.software}
                        onChange={(e)=>props.handleChange(e)}
                        required
                        > 
                            <option value = ""></option>

                            <option value = "Kroll">Kroll</option>
                            <option value = "Nexus">Nexus</option>
                            <option value = "Fillware">Fillware</option>
                            <option value = "Healthwatch/Delta">Healthwatch/Delta</option>
                            <option value = "Other">Other</option>

                    </select><br/>
                        
                <br/>
                <label>Compensation: </label><br/>
              
                    <input
                        name = "compensation"
                        type = "number"
                        value = {props.compensation}
                        onChange={(e)=>props.handleChange(e)}
                        required
                    /> <br/>
                <label>Additional comments: </label><br/>

                <textarea
                        name = "additionalDetails"
                        type = "text"
                        value = {props.additionalDetails}
                        onChange={(e)=>props.handleChange(e)}
                    /> <br/> <br/>


              <Button
              variant="outline-secondary"
              type = "submit"
              value = "submit"
              >Submit Post</Button>
            </form>
        </div>
    )
}