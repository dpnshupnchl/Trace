import React, { useState } from 'react'
import { useEffect } from 'react'
import ApiGet from './ApiGet';

const Get = () => {
    
    const [todos,setTodos] = useState({});

    const gettingApi = async () => {

          const receiver = await ApiGet('https://jsonplaceholder.typicode.com/posts')
          setTodos(receiver);
       console.log(receiver);
    }

    useEffect(() => {
      gettingApi();
       
    },[])

  return (
    <div>
     {
      todos.length ?
      todos.map((todo) => {
       return <h1>{todo.title}</h1>
      }):
  "Posts not found"
       
     } 
    </div>
  )
}

export default Get