import React from 'react'
import { Link } from 'react-router-dom'
import starwing2bg from "../assets/img/starwing2bg.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "../Css/Footer.css"

const Footer = () => {
  return (
    <>
    <footer>
        <div className="navbar-brand">
        <div className="brand">
            <Link to="/"><img src={starwing2bg} alt="Movie App" className="logo" /><h>StarWing</h> </Link>
        </div>
        <div className="social-icon">
            <FaInstagram />
            <FaFacebookSquare />
            <FaLinkedin />
            <RiTwitterXFill />
        </div>
        <div className="copyright">
            <p>Copyright © 2025. Created by <span>StarWing</span></p>
        </div>
        </div>
        
    </footer>
    </>
  )
}

export default Footer