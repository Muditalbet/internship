import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <navbar>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Blog</Link>
        </navbar>
    )
}

export default Navbar;