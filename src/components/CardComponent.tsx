import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

interface propsTypes {
  propGoal : string;
  propId : string
}

export const CardComponent = ({propGoal , propId, oneDelete})=> {
  return(
  <>
  <Card id = {propId} style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{propGoal}</Card.Title>
      <Card.Text>
       Here is some progress so far
      </Card.Text>
      <Button variant="danger" onClick={() => oneDelete(propId)}>Delete
      </Button>
      <Button variant="secondary" >Modify
      </Button>
    </Card.Body>
  </Card>
  </>
    )
};
