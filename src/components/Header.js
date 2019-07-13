import React from 'react'

import User from '../../template/images/user.png'
import Face from '../../template/images/facebook-1.png'

function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src={Face} alt="" />
        <div className="perfil">
          <span>Meu perfil</span>
          <img src={User} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header