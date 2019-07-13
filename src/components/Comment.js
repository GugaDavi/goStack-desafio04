import React from 'react'

function Comment({ avatar, author, comment }) {
  return (
    <div className="divComment">
      <img src={avatar} alt=""/>
      <div className="comment">
        <strong>{author} </strong>
        <span>{comment}</span>
      </div>
    </div>
  )
}

export default Comment;