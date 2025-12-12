  async function loadusers(){
    try{
        const response =await fetch ("https://jsonplaceholder.typicode.com/users");
        const data =await response.json();
        console.log('users:',data);
    }catch(error){
        console.error("error:",error);
    }
  }
  loadusers();