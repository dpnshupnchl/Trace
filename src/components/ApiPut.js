
 async function ApiPut(url){
    try{
        const res = await fetch((url),{
        method:"PUT",
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify({
            id: 1223,
            title: 'Updated Title',
            body: 'This is new body',
            userId: 1,
        })

      })
      const data = await res.json();
      return data;
    }
    catch(err){
        console.log(err);
    }
}

export default ApiPut;