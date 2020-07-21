import React from 'react'
import '../CSS/navbar.css'


/*function  myFunction(){
    dropDownCSS = {
        padding:"10px 20px",
        position:"absolute",
        right:"115px",
        top:"60px",
        backgroundColor:"white",
        transform:"translate( -50%, 0%)",
        display:"block"
    }
}
window.onClick = function(event){
    if (event.target == popupWindow){
        dropDownCSS = {
            padding:"10px 20px",
            position:"absolute",
            right:"115px",
            top:"60px",
            backgroundColor:"white",
            transform:"translate( -50%, 0%)",
            display:"none"
        }
    }
}*/


export default function Navbar() {
    return (
        <div className='navbar-body'>
            <div className='navbar-formatter'>
                <img src={require('../images/logo.png')} className='logo'></img>
                <div id="Popup">
                    <img className='user' src={require('../images/user.svg')}></img>
                    <span>UserName</span>
                    <img className='down' src={require('../images/download.svg')}></img>
                </div>
                <div className="popupWindow" id='hello-world' style={{display:'block'}}>
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
/*
var m = 'false'
function myFunction(){
    m = !m
    console.log("hello")
}

function getStyle(){
    if(m){
        return{
            display: 'block'
        }
    }
    else{
        return{
            display:'none'
        }
    }
}
*/