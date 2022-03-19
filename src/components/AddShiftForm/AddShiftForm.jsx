import React from "react";
import './AddShiftForm.css'

export default function AddShiftForm(props) {
    return (
        <div className="AddShiftForm">
            <h1>Post a shift</h1>

            <form onSubmit={(e)=>props.handleSubmit(e)}>
                <label> Pharmacy Name:<br/>
                    <input
                        name = "name"
                        type = "text"
                        value = {props.name}
                        onChange={(e)=>props.handleChange(e)}
                    /><br/>

                </label>
                <label> City:<br/>
                    <input
                        name = "city"
                        type = "text"
                        value = {props.city}
                        onChange={(e)=>props.handleChange(e)}
                    /><br/>

                </label>
                <label>Address:<br/>
                    <input
                        name = "address"
                        type = "text"
                        value = {props.address}
                        onChange={(e)=>props.handleChange(e)}
                    /> <br/>
                </label>
                <label>Date:<br/>
                     <input
                        name = "date"
                        type = "date"
                        value = {props.date}
                        onChange={(e)=>props.handleChange(e)}
                    /> <br/>

                </label>
                <label>Software:<br/>
                    <input
                        name = "software"
                        type = "text"
                        value = {props.software}
                        onChange={(e)=>props.handleChange(e)}
                    /> <br/>

                </label>
                <label>Compensation:<br/>
                    <input
                        name = "compensation"
                        type = "number"
                        value = {props.compensation}
                        onChange={(e)=>props.handleChange(e)}
                    /> <br/>

                </label>
              
              <button
              type = "submit"
              value = "submit"
              >Submit Post</button>
            </form>
        </div>
    )
}