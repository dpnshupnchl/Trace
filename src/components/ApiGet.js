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

export default ApiGet