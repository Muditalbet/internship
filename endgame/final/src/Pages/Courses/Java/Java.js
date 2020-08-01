import React from 'react'
import { Link } from 'react-router-dom'


import '../../../CSS/Course.css'

export default function Java() {
    return (
        <div className='courseBody'>
            <div className='courseHeading'>
                <div className='Title'>
                    <span>Course Spalization</span>
                    <h1>Java Programming</h1>
                </div>
                <div className='University'>
                    <span>Offered by</span>
                    <img></img>
                </div>
            </div>
            <div className='aboutCourse'>
                <div className='enroll'>
                    <Link to='/course' className='enrollText'>Enroll Now</Link>
                    <Link to='/Java' className='enrollSave'>
                        <img src={require('../../../images/save for later.svg')}></img>
                        <span>Save for Later</span>
                    </Link>
                </div>
                <div className='about'>
                    <div className='aboutCourseText'>
                        <h1>About this Specialization</h1>
                        <p>Take your first step towards a career in software development with this introduction to Java—one of the most in-demand programming languages and the foundation of the Android operating system. Designed for beginners, this Specialization will teach you core programming concepts and equip you to write programs to solve complex problems. In addition, you will gain the foundational skills a software engineer needs to solve real-world problems, from designing algorithms to testing and debugging your programs.
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
