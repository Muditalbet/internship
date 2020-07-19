import React, { Component } from 'react';
//import feedback from '../components/feedback'
import './CSS-Files/Contact.css'

class contact extends Component{
    render(){
        return(
            <div className="MainContent">
                <div className="contact-section">    
                    <h1>Contact us</h1>
                    <p><a href="mailto:muditmangtani@gmail.com">Mail Us</a></p>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name..." className="contact-form-text"></input>
                        <input type="text" placeholder="Email" className="contact-form-text"></input>
                        <textarea placeholder="Feedback..." className="contact-form-text"></textarea>
                        <input type="submit" value="send" className="contact-form-btn"></input>
                    </form>
                </div>
            </div>            
        )
    }
}

/*function contact() {
    return (
        <div className="MainContent">
            
            <feedback />
        </div>
    )
}*/

export default contact;