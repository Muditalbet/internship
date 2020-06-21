import React from 'react';
import './CSS-Files/Home.css'

function Home() {
    return (
        <React.Fragment>
            <div className="MainContent">
                <h1 className="Heading">Technology Stack</h1>
                <p className="Tagline">We create Solution</p>
                <div className='solutions'>
                    Solution We provide:
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;