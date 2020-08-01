import React from 'react'
import { Link } from 'react-router-dom'


import '../../../CSS/Course.css'

export default function C_plus_plus() {
    return (
        <div className='courseBody'>
            <div className='courseHeading'>
                <div className='Title'>
                    <span>Course Spalization</span>
                    <h1>C++ Programming</h1>
                </div>
                <div className='University'>
                    <span>Offered by</span>
                    <img></img>
                </div>
            </div>
            <div className='aboutCourse'>
                <div className='enroll'>
                    <Link to='/course' className='enrollText'>Enroll Now</Link>
                    <Link to='/C++' className='enrollSave'>
                        <img src={require('../../../images/save for later.svg')}></img>
                        <span>Save for Later</span>
                    </Link>
                </div>
                <div className='about'>
                    <div className='aboutCourseText'>
                        <h1>About this Specialization</h1>
                        <p>This specialization develops strong programming fundamentals for learners who want to solve complex problems by writing computer programs. Through four courses, you will learn to develop algorithms in a systematic way and read and write the C code to implement them. This will prepare you to pursue a career in software development or other computational fields. Projects include writing a sorting algorithm and writing a program to use Monte Carlo simulation to calculate poker hand probabilities. The poker project is divided over three courses, so you can write the more challenging parts of the program as you gain more advanced skills.
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
