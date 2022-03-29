import React from 'react';
import './MyPostsIndex.css'


function MyPostsIndex(props) {
  return (
      <div className = "MyPostsIndex" >
          {props.myPosts.map((m)=>(
            <div className='index-card'>
              <p>Pharmacy name: {m.name}<br/> Date : {m.date}<br/> Address: {m.address}<br/> city: {m.city}<br/>Software: {m.software}<br/> Additional Details: {m.additionalDetails} </p>

              <p>{m.comment.map((e)=>(e.comment))}</p>
              <button>Edit</button>
              <button
                  id={m._id}
                  onClick={(e) => props.handleDelete(e)}>Delete

              </button>

            </div>
          ))}
      </div>
  );
}

export default MyPostsIndex