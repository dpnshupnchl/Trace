async function ApiPost(url,data){
  
    try{
        const res = await fetch((url), this.data)

        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
 
    
}

export default ApiPost;