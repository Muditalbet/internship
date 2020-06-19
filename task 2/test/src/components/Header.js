import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <navbar>
            <Link to="/" className="link">Home </Link>
            <Link to="/about" className="link">About </Link>
            <Link to="/" className="link">Contact </Link>
            <Link to="/" className="link">Blog </Link>
        </navbar>
    )
}

export default Navbar;