import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CardComponent } from '../components/CardComponent';
import Container from 'react-bootstrap/Container';


export const Goals = () => {
  const [goal, setGoal] = useState<string>('');
  const [stack, setStack] = useState<string[]>([]);
  const [isMod, setIsMod] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (goal.trim().length <= 1) {
      alert(`Cannot add empty goal`);
      console.error('Goal cannot be an empty string');
      console.log('currentstack');
      return;
    }
    setStack((prevStack) => [...prevStack, goal]);
    setGoal(''); // Clear the input field
  };

  const handleRemove = (itemId) => {
    console.log('item deleted', itemId);
    const index = parseInt(itemId, 10);
    setStack((prevStack) => prevStack.filter((_, i) => i !== index));
  };

  const handleMod = (itemId, updatedText) => {
    const index = parseInt(itemId, 10);
    console.log('item modifined', itemId, index, updatedText);
    setIsMod(!isMod);
    //find that element and update text value at that 
    setStack((prevStack) => prevStack.map((ele, i) => {
      if(i === index){
          return updatedText
      }else{
        return ele;
      }
    }))
  }

  return (
    <>
    <Container>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Add your goals here:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Running..."
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            />
          <Form.Text className="text-muted">Let's Go!!!</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
      {stack.length > 0 &&
        stack.map((Goal, index) => (
        <div className='p-3 '>
            <CardComponent
              propId={`${index}`}
              key={index}
              propGoal={Goal}
              propIsMode={isMod }
              oneDelete={handleRemove}
              onMod={handleMod}
            />
          </div>
        ))}
    </Container>
    </>
  );
};

