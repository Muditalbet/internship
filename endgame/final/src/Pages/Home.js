import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/home.css'

export default function Home() {
    return (
        <div className='homeBody'>
            <div className="heading">
                <div className='headingText'>
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className='homeMain'>
                <div className='headingText'>
                    <h1>Get your skills</h1>
                </div>

                <div className='show'>
                    <Link to='/Python' className='cards one'><div className='card'>
                        <div className='text'>Python</div><div className='image'>
                            <img style={{height:"150px", opacity:"0.05", marginTop:"10px", marginRight:"10px"}} src={require('../images/python.svg')} ></img>
                        </div>
                        </div></Link>
                    <Link to='/Angular' className='cards two'><div className='card'>
                        <div className='text'>Angluar</div><div className='image'>
                            <img style={{height:"150px", opacity:"0.05", marginTop:"10px", marginRight:"10px"}} src={require('../images/angular.png')} ></img>
                        </div>
                        </div></Link>
                    <Link to='/Java' className='cards third'><div className='card'>
                        <div className='text'>Java</div><div className='image'>
                            <img style={{height:"150px", opacity:"0.05", marginTop:"10px", marginRight:"10px"}} src={require('../images/java.svg')} ></img>
                        </div>
                        </div></Link>
                    <Link to='/Javascript' className='cards one'><div className='card'>
                        <div className='text'>JavaScript</div><div className='image'>
                            <img style={{height:"150px", opacity:"0.05", marginTop:"10px", marginRight:"10px"}} src={require('../images/javascript.png')} ></img>
                        </div>
                        </div></Link>
                    <Link to='/Flutter' className='cards two'><div className='card'>
                        <div className='text'>Flutter</div><div className='image'>
                            <img style={{height:"150px", opacity:"0.05", marginTop:"10px", marginRight:"10px"}} src={require('../images/flutter.png')} ></img>
                        </div>
                        </div></Link>
                    <Link to='/React' className='cards third'><div className='card'>
                        <div className='text'>React</div><div className='image'>
                            <img style={{height:"150px", opacity:"0.2", marginTop:"10px", marginRight:"10px"}} src={require('../images/react.png')} ></img>
                        </div>
                        </div></Link>
                    <Link to='/Swift' className='cards one'><div className='card'>
                        <div className='text'>Swift</div><div className='image'>
                            <img style={{height:"150px", opacity:"0.05", marginTop:"10px", marginRight:"10px"}} src={require('../images/swift.png')} ></img>
                        </div>
                        </div></Link>
                    <Link to='/C++' className='cards two'><div className='card'>
                        <div className='text'>C++</div><div className='image'>
                            <img style={{height:"150px", opacity:"0.05", marginTop:"10px", marginRight:"10px"}} src={require('../images/c++.png')}></img>
                        </div>
                        </div></Link>
                </div>
            </div>
        </div>
    )
}
