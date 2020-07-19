import React from 'react'
import '../CSS/navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={require('../images/logo.png')}></img>
            </div>
            <div className='profile'>
                <div className='image'></div>
                <div className='text'>Profile</div>
            </div>
        </div>
    )
}

export default Navbar