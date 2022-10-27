import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { useLoaderData } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then(data => setCourses(data));
    }, [])
   
    console.log(courses);
    return (
        <div>
            <h3>Our current Courses{courses.length}</h3>
           {
            courses.map(course=> <h3><button className='btn btn-dark text-light'><Link>{course.name}</Link></button></h3> )
           }
        </div>
    );
};

export default SideNav;