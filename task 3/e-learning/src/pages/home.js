import React from 'react'
import { Link } from 'react-router-dom'
import'../CSS/home.css'


const CoursesList = [
    {id:'1', name:'Java', link:'/overview'},
    {id:'2', name:'Python', link:'/overview'},
    {id:'3', name:'C++', link:'/overview'},
    {id:'4', name:'C#', link:'/overview'},
    {id:'5', name:'Swift', link:'/overview'},
    {id:'6', name:'Ruby', link:'/overview'}
]

function CourseCard({courses}){
    return(
        <div className='test'>
            {courses.map(course => (
                <div className='cards' key={course.id}>
                    <Link to={course.link}>{course.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default function Home() {
    return (
        <div className='Home-body'>
            <CourseCard courses = {CoursesList}/>
        </div>
    )
}
