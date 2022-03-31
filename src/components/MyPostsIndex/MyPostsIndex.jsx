import React from 'react';
import './MyPostsIndex.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function MyPostsIndex(props) {
  return (
      <div className = "MyPostsIndex" >

{/* post info */}

        <h1>My Posted Shifts</h1>
          {props.myPosts.map((m)=>(
            <div key = {m._id} className='my-index-card' >
              <h6 >Pharmacy name:{m.name}<br/> Date : {new Date(m.date).toDateString()}<br/> Address: {m.address}<br/> city: {m.city}<br/>Software: {m.software}<br/> Additional Details: {m.additionalDetails} </h6>

{/* delete button */}

              <Button
                variant="outline-dark"
                id={m._id}
                onClick={(e) => props.handleDelete(e)}>Delete Posting

              </Button>
             
              <hr></hr>

{/* messages */}

              <u><h4>Messages</h4></u>
              <hr></hr>
              {m.comment.length ? 
              <div>
    
              {m.comment.map((c)=>

              

                <div key = {c._id}>
                  <>
                  <h5>{c.comment} <br/><br/>Name: {c.commenter} Email:  {c.commenterMail}</h5>
              
                  <Link to ={`/users/${c.commenterID}`}><Button variant="outline-dark">     Profile
                  </Button></Link>


  {/* assign shift button */}

                  <form
                      onSubmit= {(e) => props.handleAssignShift(e)}
                      id ={m._id} 
                      // name = "commenterID"
                      name = {c.commenterID}
                  >

                    <button
                      type = "submit"
                      value = "submit"
                      >assign shift
                    </button>
                  </form>



                   <hr></hr>
                
            </>

            </div>

           
)}
            </div>: 
            <div>
              <p>you have no messages</p>

              </div>}

             





            </div>
          ))}
      </div>
  );
}

export default MyPostsIndex