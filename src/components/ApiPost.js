async function ApiPost(url){
    try{
        const res = await fetch((url),{
            method:"POST",
            body:JSON.stringify({
                title:'NewPost',
                body:'This is the new Post',
                userId:1
            }),
            headers:{
                'Content-type': 'application/json',
            }
        })

        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
 
    
}

export default ApiPost;