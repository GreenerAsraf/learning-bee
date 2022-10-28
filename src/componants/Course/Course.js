import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


const Course = ({course}) => {
    return (
        <CardGroup>
      <Card className='rounded m-2'>
        <Card.Img variant="top" src={course.picture} />
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Button  variant="dark"><Link to={`/course/${course._id}`}>Click </Link></Button>
      </Card>
      
    
     
    </CardGroup>
    );
};

export default Course;