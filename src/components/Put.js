import React, { useEffect } from 'react'
import ApiPut from './ApiPut'

const Put = () => {

    const putData = () => {
     const result = ApiPut("https://jsonplaceholder.typicode.com/posts/1")
     console.log(result);
    }

  return (
    <div><button onClick={putData}>PUT DATA</button></div>
  )
}

export default Put