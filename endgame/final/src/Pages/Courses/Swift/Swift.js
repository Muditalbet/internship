import React from 'react'
import { Link } from 'react-router-dom'


import '../../../CSS/Course.css'

export default function Swift() {
    return (
        <div className='courseBody'>
            <div className='courseHeading'>
                <div className='Title'>
                    <span>Course Spalization</span>
                    <h1>Swift Programming</h1>
                </div>
                <div className='University'>
                    <span>Offered by</span>
                    <img></img>
                </div>
            </div>
            <div className='aboutCourse'>
                <div className='enroll'>
                    <Link to='/course' className='enrollText'>Enroll Now</Link>
                    <Link to='/Swift' className='enrollSave'>
                        <img src={require('../../../images/save for later.svg')}></img>
                        <span>Save for Later</span>
                    </Link>
                </div>
                <div className='about'>
                    <div className='aboutCourseText'>
                        <h1>About this Specialization</h1>
                        <p>The course includes over hours and hours of HD video tutorials and builds your programming knowledge through making real world apps. e.g. Pokemon Go, Whatsapp, QuizUp and Yahoo Weather. It's updated to include over 5 hours of content on Apple's brand new ARKit for making Augmented Reality apps and CoreML for making intelligent apps with Machine Learning. You'll be building image recognition apps and incredible 3D animated AR apps. By the end of this course, you will be fluently programming in Swift 4 and be ready to make your own apps or start a freelancing job as an iOS 11 developer.
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
