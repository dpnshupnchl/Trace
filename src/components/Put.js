import React, { useState } from 'react'
import { ApiPut } from './Trace';

const Put = () => {

  const [name,setName] = useState("");
  const [mail,setMail] = useState("");

    const putData = () => {

      var options = {
        method:"PUT",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            name,
            mail
        })

      }

     const result = ApiPut("https://jsonplaceholder.typicode.com/posts/1",options)
     console.log(result);
    }

  return (
    <>
    <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input>
    <input type="mail" placeholder="email" value={mail} onChange={(e) => setMail(e.target.value)}></input>
    <div><button onClick={putData}>UPDATE DATA</button></div>
    </>
  )
}

export default Put