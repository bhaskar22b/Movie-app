import React, { useState } from 'react'
import "../Css/NavBar.css"
import { Link } from 'react-router-dom'
import starwing2bg from "../assets/img/starwing2bg.png"

const NavBar = () => {
  const [showToggle, setShowToggle] = useState(false)

   function handelToggle(){
        setShowToggle(!showToggle)
    }

  return (
    <nav className="navbar">
        <div className="navbar-brand">
            {/* <Link to="/">Movie App</Link> */}
            <Link to="/"><img src={starwing2bg} alt="Movie App" className="logo" /><h>StarWing</h> </Link>
            <button className='navbar-toggle' onClick={handelToggle}>
              <span>{showToggle ? "✕" : "☰"}</span>
            </button>{
              showToggle && <div className="navbar-links">
            <Link to="/" className='Nav-link'>Home</Link>
            <Link to="/fav" className='Nav-link'>Favorites</Link>
            <Link to="/contact" className='Nav-link'>Contact</Link>
            <Link to="/login" className='Nav-link'>LogIn</Link>
        </div>
            }
            
        </div>
        <div className="navbar-menu">
          <div className="navbar-links">
            <Link to="/" className='Nav-link'>Home</Link>
            <Link to="/fav" className='Nav-link'>Favorites</Link>
            <Link to="/contact" className='Nav-link'>Contact</Link>
            <Link to="/login" className='Nav-link'>LogIn</Link>
        </div>
        </div>
    </nav>
  )
}

export default NavBar