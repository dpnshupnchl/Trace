import React, { useState } from 'react'
import ApiPost from './ApiPost'

const Post = () => {

  const [name,setName] = useState("");
  const [mail,setMail] = useState("");

  const postApi = () => {
    
      var userData = {
        method:"POST",
        body:JSON.stringify({
          name,
          mail
        }),
        headers:{
          "Content-type":"application/json"
        }
      }

      const result = ApiPost('https://jsonplaceholder.typicode.com/posts',userData)

      console.log(result);
  }

  return (
    <div>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type="mail" placeholder="email" value={mail} onChange={(e) => setMail(e.target.value)}></input>
        <button onClick={postApi}>POST</button>
    </div>
  )
}

export default Post