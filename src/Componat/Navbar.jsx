import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className="container-flued">
      <div className="header">
        <h1 className="logo">LOGO</h1>
        <ul className='ul'>
          <li ><Link to="/home">Home</Link></li>
          <li ><Link to="/">Deafualt</Link></li>
          <li><Link to="/Service">Service</Link></li>
          <li><Link to="/About">about</Link></li>
          <li><Link to="/Login">Login</Link></li>
         
        </ul>
      </div>


    </div>




  )
}

export default Navbar