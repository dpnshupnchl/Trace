async function ApiGet(url){

    try{
     const res = await fetch(url)
     const data = await res.json();
     return data;
    }
    catch(err){
     console.log(err);
    }
 
 }
 
 async function ApiPost(url,data){
  
    var userdata = data;
    
    try{
        const res = await fetch((url), userdata)

        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
 
    
}

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

export {ApiGet, ApiPost, ApiPut}

