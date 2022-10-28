import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    console.log(courseDetails);
    
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={courseDetails.picture} />
        <Card.Body>
          <Card.Title>{courseDetails.name}</Card.Title>
          <Card.Text>
          {courseDetails.details}
          </Card.Text>
          <Button variant="primary">Want Premimum Course?</Button>
        </Card.Body>
      </Card>
    );
};

export default CourseDetails;