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
              <div className='my-pharmacy-details'>
                <h4>Pharmacy Details:</h4>
              <h6 > Name: {m.name}<br/> Date: {new Date(m.date).toDateString()}<br/> Address: {m.address}<br/> City: {m.city}<br/>Software: {m.software}<br/> Additional Details: {m.additionalDetails} </h6>

{/* delete button */}

              <Button
                variant="outline-secondary"
                id={m._id}
                onClick={(e) => props.handleDelete(e)}>Delete Posting

              </Button>
             </div>

{/* messages */}
              <div> 
                <u><h4>Messages</h4></u>
                 {m.comment.length ? 
                 <div>
    
                  {m.comment.map((c)=>
                <div key = {c._id}>
                  <>
                  <table>
                    <tbody>
                      <td> From: <Link to ={`/users/${c.commenterID}`}>{c.commenter}</Link></td>
                      <td>Email:{c.commenterMail}</td>
                    </tbody>
                  </table>
                  <br/>

                  <h5 className='message'>{c.comment}</h5>
                  <br/>

  {/* assign shift button */}
  {/* remove assigment */}
                {m.assignedUserId == c.commenterID ?
                  <div className='assigned'>
                    <form
                      onSubmit= {(e) => props.handleRemoveAssignShift(e)}
                      id ={m._id} 
                      // name = "commenterID"
                      name = {c.commenterID}
                      file = {c.commenter}
                  >
                    <Button
                      variant="secondary"
                      type = "submit"
                      value = "submit"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                          <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>{' '}
                        Shift assigned to {c.commenter}

                    </Button>
                  </form>
                  </div>:
// assign shift
                  <form
                      onSubmit= {(e) => props.handleAssignShift(e)}
                      id ={m._id} 
                      // name = "commenterID"
                      name = {c.commenterID}
                      file = {c.commenter}
                  >
                    <Button
                      variant="outline-secondary"
                      type = "submit"
                      value = "submit"
                      >assign shift to {c.commenter}
                    </Button>
                  </form>}
                
                   </>
<hr></hr>
                </div>

           
)}
                 </div>: 
            <div>
              <p>you have no messages</p>

              </div>}

             

              </div>




            </div>
          ))}
      </div>
  );
}

export default MyPostsIndex