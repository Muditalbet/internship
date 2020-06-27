import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="linkimg">
                <img src={logo} className="logo"></img>
            </Link>
            <Link to="/blog" className="link">Blog </Link>
            <Link to="/contact" className="link">Contact </Link>
            <Link to="/about" className="link">About </Link>
            <Link to="/" className="link">Home </Link>
        </div>
    )
}

export default Navbar;