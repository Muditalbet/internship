import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/overview.css'

export default function Overview() {
    return (
        <div className='overview-body'>
            <div className='blocks'>
                <div className='box'>
                    Read
                </div>
                <div className='box'>
                    Watch
                </div>
                <div className='box'>
                    Listen
                </div>
                <div className='box'>
                    <Link to='/course'>Solve</Link>
                </div>
            </div>
            <div className='content'>
                <div className='progress'>
                    <div className='text'>Completed :- 70%</div>
                    <div className='bar'><div></div></div>
                </div>
                <div className='about'>
                    <h1>About</h1>
                    <ul>
                        <li>Hello world</li>
                        <li>Hello world</li>
                        <li>Hello world</li>
                        <li>Hello world</li>
                        <li>Hello world</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
