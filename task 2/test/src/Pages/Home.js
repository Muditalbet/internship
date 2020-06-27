import React from 'react';
import './CSS-Files/Home.css'
import { Link } from 'react-router-dom'

import logo from './CSS-Files/images/ezgif.com-gif-maker.gif'
import gif from './CSS-Files/images/3323619.jpg'
import logo2 from './CSS-Files/images/2480553.jpg'

function Home() {
    return (
        <div className="complete">
            <div className="heading">
                <img src={logo}></img>
                <div className="heading-content">
                    <h1>Technology Stack</h1>
                    <div className="underline"></div>
                    <p>We create solutions</p>
                </div>
            </div>
            <div className="Services">
                <img src={gif}></img>
                <div className="services-content">
                    <h1>Our Services</h1>
                    <div className="underline"></div>
                    <div className="count">1,500,000 Users</div>
                    <p>We provide here the solutions here.</p>
                </div>
            </div>
            <div className="about">
                <div className="about-content">
                    <h1>About us</h1>
                    <div className="underline"></div>
                    <p>Check out our company information page and read more about Progate and its personnel.</p>
                    <Link to="/about" className="link">About</Link>
                </div>
                <img src={logo2}></img>
            </div>
        </div>
    )
}

export default Home;