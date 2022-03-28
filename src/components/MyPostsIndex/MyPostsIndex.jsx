import React from 'react';
import './MyPostsIndex.css'


function MyPostsIndex(props) {
  return (
      <div className = "MyPostsIndex" >
          {props.myPosts.map((m)=>(
            <div className='index-card'>
              <h2>{m.name}</h2>
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