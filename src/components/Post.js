import React from 'react'

import avatar from '../../template/images/avatar1.png'

function Post({ author, authorAvatar, date, content }) {
  return (
    <div className="infoPost">
      <div className="author">
        <img src={authorAvatar} alt="" />
        <div className="infosAuthor">
          <strong>{author}</strong>
          <span>{date}</span>
        </div>
      </div>
      <p>{content}</p>
    </div>
  )
}

export default Post