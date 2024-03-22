import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export const CardComponent = ({propGoal}) => {
  return(
  <>
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{propGoal}</Card.Title>
      <Card.Text>
       Here is some progress so far
      </Card.Text>
      <Button variant="danger">Delete
      </Button>
      <Button variant="secondary" >Modify
      </Button>
    </Card.Body>
  </Card>
  </>
    )
};
