import React from 'react'
import { useState } from 'react'

export const Goals = () => {
  const [ goal, setGoal] = useState('');
  const [stack, setStack] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if(goal === '' || goal.length < 1){
      alert(`Emtpy String: ${goal}`)
    }else{
      setStack((pre) => [...pre, goal])
      console.log(`In stack so far: ${stack}`)

      setGoal('')
    }

  } 
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""> Add your goal: 
        <input 
          type="text" 
          value = {goal}
          onChange={(e) =>setGoal(e.target.value)}
        />
      </label>
    </form>
  )
}

