export const base_url = 'https://strangers-things.herokuapp.com/api/2204-ftb-et-web-pt'


export async function fetchALLPosts() {
   const token=localStorage.getItem('token')

 try {
    const resp = await fetch(`${base_url}/posts`,{
    headers:{'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`

    }
   });
    const data = await resp.json();

    return data;
 } catch (err) {
    console.error('you made an error', err);
 }

    }


export const login= async (userName, password) =>{
    try {
      const resp = await fetch(`${base_url}/users/login`, {
         method: "POST",
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           user: {
             username: userName,
             password: password
           }})})
      const data = await resp.json();
  console.log(data.data.token)
  localStorage.setItem('token',data.data.token)
      return data;
   } catch (err) {
       console.error('you made an error', err);
   }
}


export const register= async (userName, password) =>{
   try{  const resp = await fetch(`${base_url}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: userName,
          password: password
        }})})
   const data = await resp.json();
localStorage.setItem('token',data.data.token)
   return data;
} catch (err) {
    console.error('you made an error', err);

   }
}

 export const createPost= async (title, body, price, willDeliver, location)=>{
    const token=localStorage.getItem('token')
   const response = await fetch('https://strangers-things.herokuapp.com/api/2204-ftb-et-web-pt/posts/', {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post:{title,
            description:body,price,willDeliver,location}
        })
    });
    const data = await response.json();
    return data;}
   


    export const deletePost= async (id) => {
      const token=localStorage.getItem('token')
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2204-ftb-et-web-pt/posts/${id}`, {
         method: "DELETE",
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
         }
       }).then(response => response.json())
         .then(result => {
           console.log(result);
         })
         .catch(console.error);
    }