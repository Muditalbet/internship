import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/navbar.css'


export default function Navbar() {
    const [toggle, setToggle] = useState('false')
    const toggleDisplay = () =>{
        setToggle(!toggle);
    }
    return (
        <div className='navbar-body'>
            <div className='navbar-formatter'>
                <a href='/'><img src={require('../images/logo.png')} className='logo'></img></a>
                <div id="Popup" onClick={toggleDisplay}>
                    <img className='user' src={require('../images/user.svg')}></img>
                    <span>UserName</span>
                    <img className='down' src={require('../images/download.svg')}></img>
                </div>
                <div className="popupWindow" id='hello-world' style={toggle ? {display:'none'}:{display:'block'}}>
                    <div className='text a'>Techos: 250</div>
                    <div className='text'>Profile</div>
                    <div className='line'></div>
                    <div className='text'>Settings</div>
                    <div className='line'></div>
                    <div className='text'>Help</div>
                    <div className='line'></div>
                    <div className='text'>LogOut</div>
                </div>
            </div>
        </div>
    )
}