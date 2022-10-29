import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from '../../../assests/education-cover.jpg';
import image1 from '../../../assests/education-2.jpg';
import image2 from '../../../assests/medium-shot-girl-reading-book.jpg';
import Course from '../../Course/Course';
import Courses from '../../Courses/Courses';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

    return (
        <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Remeber</h3>
          <small>“You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.”
     <br /><small className='text-warning p-2 m-2'>Clay P. Bedford</small></small>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Remember</h3>
          <p>“The beautiful thing about learning is that no one can take it away from you.”
      <span className ='text-warning'>B.B. King</span>

</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={image2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Remember</h3>
          <p className='text-dark'>
          “Education is the most powerful weapon which you can use to change the world.”
          <br />
    <span className='text-primary' >Nelson Mandela</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
           
        </div>
    );
};

export default Home;