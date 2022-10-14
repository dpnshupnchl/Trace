import React, { useState } from 'react'
import { ApiPost } from './Trace';

const NormalPost = () => {

    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [response,setResponse] = useState("");
    
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
    const normalpostApi = async () => {
  
       await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            body:JSON.stringify({
              name,
              mail
            }),
            headers:{
              "Content-type":"application/json"
            }
          }).then((result) => {
            const fetchData = async () => {
           const data = await result.json();
           console.log(data);
           setResponse(data);
            }
            fetchData()
          }).catch((err) => {
            console.log(err)
          })
  
        
    }
  return (
<>
<div className='big-div'>
     <p className='heading'>Post API Testing</p>
    <div className='form-contain'>
    <div className='form'>
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
    <input type="mail" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)}></input>
    <button onClick={normalpostApi}>POST</button>
    <button onClick={postApi}>Trace POST</button>
</div>
    <div id='response'>
        <h1>This is response by Normal Fetch</h1>
        <p>id : {response.id}</p>
      <p>Name : {response.name}</p>
      <p>Mail : {response.mail}</p>
    </div>
    </div>
    </div>
 </> )
}

export default NormalPost