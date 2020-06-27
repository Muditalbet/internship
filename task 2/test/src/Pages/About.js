import React from 'react';
import './CSS-Files/About.css'
import team1 from './CSS-Files/images/team1.jpg'
import team2 from './CSS-Files/images/team2.jpg'
import team3 from './CSS-Files/images/team3.jpg'

function About() {
    return (
        <div className='MainAbout'>
            <div className='heading'>Team</div>
            <div id="slider">
                <figure>
                    <img src={team1}></img>
                    <img src={team2}></img>
                    <img src={team3}></img>
                    <img src={team2}></img>
                    <img src={team1}></img>
                </figure>
            </div>
            <div className='heading'>Founders:</div>
            <div className='foundersAbout'>
                <div className='block'>
                    <div className='image'></div>
                    <div className='text'>Lorem ipsum</div>
                    <div className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className='block'>
                    <div className='image'></div>
                    <div className='text'>Lorem ipsum</div>
                    <div className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className='block'>
                    <div className='image'></div>
                    <div className='text'>Lorem ipsum</div>
                    <div className='about'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
        </div>
    )
}

export default About;