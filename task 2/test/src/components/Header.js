import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="link">Home </Link>
            <Link to="/about" className="link">About </Link>
            <Link to="/contact" className="link">Contact </Link>
            <Link to="/blog" className="link">Blog </Link>
        </div>
    )
}

export default Navbar;