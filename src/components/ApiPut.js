
 async function ApiPut(url,config){
 
    try{
        const res = await fetch((url),config)
      const data = await res.json();
      return data;
    }
    catch(err){
        console.log(err);
    }
}

export default ApiPut;