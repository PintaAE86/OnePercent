import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

interface propsTypes {
  propGoal : string;
  propId : string
}

export const CardComponent = ({propGoal , propId, propIsMode, oneDelete, onMod})=> {
  return(
  <>
  <Card id = {propId} style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{propGoal}</Card.Title>
      {propIsMode && 
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Modify the goal:</Form.Label>
        <Form.Control type="text" placeholder="Weight lifting" />
      </Form.Group>
      </Form>
      }
      <Card.Text>
       Here is some progress so far
      </Card.Text>
      <Button variant="danger" onClick={()=>(oneDelete(propId))}> Delete </Button>
      <Button variant="secondary" onClick={()=>(onMod(propId))}> Modify </Button>
    </Card.Body>
  </Card>
  </>
    )
};
