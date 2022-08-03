import React, { useState } from 'react';
import { createPost } from '../api';

const Create = ({posts, setPosts}) => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [price, setPrice] = useState('');
const [willDeliver, setDeliver] = useState(false);
const [location, setLocation] = useState('');


const handleSubmit= async (ev) => {
    ev.preventDefault();
    const data=await createPost(title, body, price, willDeliver, location);
    setPosts([data, ...posts]);

}

    return<>
    <h3>
        Create a Post
    </h3>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title} onChange=
        {(ev) => setTitle(ev.target.value)}></input>
        <input type= "text" placeholder="body" value={body} 
        onChange={(ev) => setBody(ev.target.value)}></input>
        <input type="text" placeholder="price" value={price}
        onChange={(ev) => setPrice(ev.target.value)}></input>
         <input type="text" placeholder="location" value={location}
        onChange={(ev) => setLocation(ev.target.value)}></input>
        <input type="checkbox" placerholder="delivery" isChecked={willDeliver} 
        onChange={(ev) => setDeliver(ev.target.checked)}></input>
        <button type="submit">Submit</button>
    </form>
    </>  
}




export default Create;

