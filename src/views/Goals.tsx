import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CardComponent } from '../components/CardComponent';


export const Goals = () => {
  const [ goal, setGoal] = useState<string>('');
  const [stack, setStack] = useState<string[]>([]);

  const handleSubmit = (event : React.FormEvent<HTMLLabelElement>) => {
    event.preventDefault();

    if(goal.trim().length === 1){
      alert(`Emtpy String: ${goal}`);
      console.error('Goal connot be an empty string');
      console.log('currentstack');
      return;
    }
    setStack((preStack)=> [...preStack, goal]);
    setGoal('');

  };
  
  const handleRemove = (itemId) => {
    console.log('item deleted', itemId)
  }
    return (
    <>
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Add your goals here:</Form.Label>
        <Form.Control type='text' placeholder='Running...' />
        <Form.Text value = {goal}
          onChange={(e) =>setGoal(e.target.value)} className='text-muted'>
          Lets Go!!!
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>

    </Form>
    {/* <form onSubmit={handleSubmit}>
      <label htmlFor=""> Add your goals here: {''}
        <input 
          type="text" 
          value = {goal}
          onChange={(e) =>setGoal(e.target.value)}
        />
      </label>
      <Button variant='primary' type='submit'> Submit</Button>
    </form>

    {stack.length > 0 && stack.map((Goal, index) => <CardComponent propId = {`${Goal}_${index}`} key = {index} propGoal={Goal} oneDelete={handleRemove} /> )} */}
    </>
  )
};

