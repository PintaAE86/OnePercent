import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

interface propsTypes {
  propGoal : string;
  propId : string
}

export const CardComponent = ({propGoal , propId, propIsMode, oneDelete, onMod})=> {

  const [modifiedText, setModifiedText] = useState(propGoal);
  const [isModifying, setIsModifying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onMod(propId, modifiedText);
    setIsModifying(false);
  };

  const handleModifyClick = () => {
    setIsModifying((prevIsModifying) => !prevIsModifying);
  };

  return (
    <>
      <Card className="border-bottom shadow p-3 mb-5 bg-white rounded" id={propId} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{propGoal}</Card.Title>
          {isModifying && (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Modify the goal:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Weight lifting"
                  value={modifiedText}
                  onChange={(e) => setModifiedText(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          )}
          <Card.Text>Here is some progress so far</Card.Text>
          <Button className='m-2' variant="danger" onClick={() => oneDelete(propId)}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleModifyClick}>
            Modify
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
