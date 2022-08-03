import {React} from 'react'
import {useState} from 'react'



const Delete = ()=>{
    const[post, setPosts] = useState([]);
    const[postId, setPostId] = useState(null);
    
    const handleDelete = async(postIdToDelete) =>{
        console.log('PostIdToDelete:', postIdToDelete);
        // const response = await

    }
    return( <div>
        <button type="button" onClick={() => handleDelete(post.id)}>Delete</button>

    </div>

    );
}


export default Delete