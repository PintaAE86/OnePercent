import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, ChangeEvent, FormEvent } from 'react';

interface Login {
    userName: string,
    pswd: string
}

const Login : React.FC = () => {
    const [ userData , setUserData] = useState<Login>({
        userName: "", 
        pswd: ""
    });

     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUserData((preData) => ({...preData, [name] : value}))
     }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('inSubmit', userData)
        // useEffect(()=> {}, [])
        setUserData({
            userName: "",
            pswd : ""
        })
    }
  return (
    <>
    <div style={{
        display: 'block',  
        width: 700,
        padding: 30
    }}>

    <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='userName'>
            <Form.Label>User Name</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='Enter Username'
            name='userName' 
            value={userData.userName} 
            onChange={handleChange}
            required  
             />
        </Form.Group>
        <Form.Group className='mb-3' controlId='pswd'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type='password' 
            placeholder='Enter Password' 
            name= 'pswd' 
            value={userData.pswd} 
            onChange={handleChange}
            required
            />
        </Form.Group>
        <Form.Group>
            <Button variant='primary' type='submit'>
                Login
            </Button>
        </Form.Group>
    </Form>
    
    </div>
    </>
  )
}

export default Login