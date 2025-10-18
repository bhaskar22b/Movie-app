import React from 'react'
import "../Css/NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className='Nav-link'>Home</Link>
            <Link to="/fav" className='Nav-link'>Favorites</Link>
            <Link to="/contact" className='Nav-link'>Contact</Link>
            <Link to="/login" className='Nav-link'>LogIn</Link>
        </div>
    </nav>
  )
}

export default NavBar