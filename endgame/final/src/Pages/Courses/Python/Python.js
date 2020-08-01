import React from 'react'
import { Link } from 'react-router-dom'


import '../../../CSS/Course.css'

export default function Python() {
    return (
        <div className='courseBody'>
            <div className='courseHeading'>
                <div className='Title'>
                    <span>Course Spalization</span>
                    <h1>Python Programming</h1>
                </div>
                <div className='University'>
                    <span>Offered by</span>
                    <img></img>
                </div>
            </div>           
            <div className='aboutCourse'>
                <div className='enroll'>
                    <Link to='/course' className='enrollText'>Enroll Now</Link>
                    <Link to='/Python' className='enrollSave'>
                        <img src={require('../../../images/save for later.svg')}></img>
                        <span>Save for Later</span>
                    </Link>
                </div>
                <div className='about'>
                    <div className='aboutCourseText'>
                        <h1>About this Specialization</h1>
                        <p>This Specialization builds on the
                             success of the Python for Everybody course and 
                             will introduce fundamental programming concepts including 
                             data structures, networked application program interfaces, 
                             and databases, using the Python programming language. 
                             In the Capstone Project, you’ll use the technologies 
                             learned throughout the Specialization to design and 
                             create your own applications for data retrieval, processing, 
                             and visualization.
                        </p>
                    </div>
                    <div className='courseBenifits'>
                        <div className='benifitsList'>
                            <div className='imageReference'><img src={require('../../../images/certificate.svg')}></img></div>
                            <div className='textReference'>
                                <h2>Shareable Certificate</h2>
                                <p>Earn a Certificate upon completion</p>
                            </div>
                        </div>
                        <div className='benifitsList'>
                            <div className='imageReference'><img src={require('../../../images/internet.svg')}></img></div>
                            <div className='textReference'>
                                <h2>100% online courses</h2>
                                <p>Start instantly and learn at your own schedule.</p>
                            </div>
                        </div>
                        <div className='benifitsList'>
                            <div className='imageReference'><img src={require('../../../images/schedule.svg')}></img></div>
                            <div className='textReference'>
                                <h2>Flexible Schedule</h2>
                                <p>Set and maintain flexible deadlines.</p>
                            </div>
                        </div>
                        <div className='benifitsList'>
                            <div className='imageReference'><img src={require('../../../images/beginners.svg')}></img></div>
                            <div className='textReference'>
                                <h2>Beginner Level</h2>
                                <p>No prior experience required.</p>
                            </div>
                        </div>
                        <div className='benifitsList'>
                            <div className='imageReference'><img src={require('../../../images/language.svg')}></img></div>
                            <div className='textReference'>
                                <h2>English</h2>
                                <p>Subtitles: English, Arabic, Chinese (Simplified), Korean, German</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
