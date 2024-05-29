import React, { ChangeEvent, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';

interface Signup {
    fName: string,
    lName: string,
    email: string,
    userName: string,
    pswd: string,
}


export const SignUp : React.FC = () => {
    const [userData , setUserData] = useState<Signup>({
        fName: "",
        lName: "",
        email: "",
        userName: "",
        pswd: ""
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUserData((predata) => ({...predata, [name] : value}))
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('insideHandleSubmit:', userData)
        setUserData({
            fName: "",
            lName: "",
            email: "",
            userName: "",
            pswd: ""
        })
      };

  return (
    <>
    <div style={{
        display: 'block',  
        width: 700,
        padding: 30
    }}>
    <Form onSubmit={handleSubmit} >
        <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='Enter First Name' 
            name='fName'
            value={userData.fName}
            onChange={handleChange}
            required
            />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
            type='text'
            placeholder='Enter Last Name' 
            name='lName'
            value={userData.lName}
            onChange={handleChange}
            required
             />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicpswd'>
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type='email' 
            placeholder='Enter Email Address' 
            name='email'
            value={userData.email}
            onChange={handleChange}
            required
            />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>User Name</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='Enter User Name' 
            name='userName'
            value={userData.userName}
            onChange={handleChange}
            required
            />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type='password' 
            placeholder='Enter password' 
            name='pswd'
            value={userData.pswd}
            onChange={handleChange}
            required
            />
        </Form.Group>
        <Form.Group>
            <Button variant='primary' type='submit'>
                Sign Up
            </Button>
        </Form.Group>
    </Form>
    
    </div>
    </>
  )
}
