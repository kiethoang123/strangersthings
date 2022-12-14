import '../styles/Post.css';
import { deletePost, fetchALLPosts } from '../api';
import { useEffect, useState } from 'react';
import Create from './Create';


const Post = () =>{
    const [posts, setPosts] = useState ([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await fetchALLPosts();
            console.log('data', data);
            setPosts(data.data.posts);
        };
        fetchPosts();
    }, []);

    const handleDelete = async(postIdToDelete) =>{
        const data=await deletePost(postIdToDelete);
        const remainingPost = posts.filter(post=>post._id !== postIdToDelete)
        setPosts(remainingPost)
    }
        

    return (<div className="post">
        <h1>Posts</h1>
        <Create posts={posts} setPosts={setPosts}/>
        
    
        {posts.map((post) => {
            return (
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p className='user'>Posted By: {post.author.username}</p>
                    <p className='description'>{post.description}</p>
                    <aside className='location'>Location: {post.location}</aside>
                    <aside className='price'>Price: {post.price}</aside>
                    <p className='updated'>Last Updated: {post.updatedAt}</p>
                    {post.isAuthor?<button type='button' className='btn'
                    onClick={()=> handleDelete(post._id)}>delete</button>:null}
              </div>
            );
        })

        }
    </div>

    );

};


export default Post;
