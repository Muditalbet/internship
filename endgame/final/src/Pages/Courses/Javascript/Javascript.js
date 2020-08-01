import React from 'react'
import { Link } from 'react-router-dom'


import '../../../CSS/Course.css'

export default function JavaScript() {
    return (
        <div className='courseBody'>
            <div className='courseHeading'>
                <div className='Title'>
                    <span>Course Spalization</span>
                    <h1>Javascript Programming</h1>
                </div>
                <div className='University'>
                    <span>Offered by</span>
                    <img></img>
                </div>
            </div>
            <div className='aboutCourse'>
                <div className='enroll'>
                    <Link to='/course' className='enrollText'>Enroll Now</Link>
                    <Link to='/Javascript' className='enrollSave'>
                        <img src={require('../../../images/save for later.svg')}></img>
                        <span>Save for Later</span>
                    </Link>
                </div>
                <div className='about'>
                    <div className='aboutCourseText'>
                        <h1>About this Specialization</h1>
                        <p>In this specialization, we'll look at the JavaScript language, and how it supports the Object-Oriented pattern, with a focus on the unique aspect of how JavaScript approaches OO. We'll explore a brief introduction to the jQuery library, which is widely used to do in-browser manipulation of the Document Object Model (DOM) and event handling. You'll also learn more about JavaScript Object Notation (JSON), which is commonly used as a syntax to exchange data between code running on the server (i.e. in PHP) and code running in the browser (JavaScript/jQuery).
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
