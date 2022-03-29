import React from 'react';
import './MyPostsIndex.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function MyPostsIndex(props) {
  return (
      <div className = "MyPostsIndex" >
        <h1>My Posted Shifts</h1>
          {props.myPosts.map((m)=>(
            <div className='my-index-card'>
              <div>
              <h6>Pharmacy name: {m.name}<br/> Date : {m.date}<br/> Address: {m.address}<br/> city: {m.city}<br/>Software: {m.software}<br/> Additional Details: {m.additionalDetails} </h6>
            <hr></hr>
              <u><h4>Messages</h4></u>
              {m.comment.map((c)=>
                <>
                <h5>{c.comment} <br/>Name: {c.commenter} Email:  {c.commenterMail}</h5><hr></hr>
                </>
              )}
              {/* <button>Edit</button> */}

          <Button
                    variant="outline-dark"
                    id={m._id}
                    onClick={(e) => props.handleDelete(e)}>Delete Posting

                </Button>
              </div>



            </div>
          ))}
      </div>
  );
}

export default MyPostsIndex