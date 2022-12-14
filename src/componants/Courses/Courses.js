import React from 'react';
import './Courses.css';
import { useLoaderData } from 'react-router-dom';

import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData([])
    console.log(courses);
    return (
      
                <div className='courses'>
                      
                      {
                courses.map(course =><Course key = {course._id} course ={course}></Course>)
                       }
              
               </div>
    );
};

export default Courses;