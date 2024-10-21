import React from 'react'
import logo from "../Images/logo.png"

const Header = () => {
  return (
     <header>
          <img src={logo} alt="Logo" className="logo"/>
     </header>
  )
}

export default Header