import '../styles/Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../api'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit= async (ev) =>{    
        ev.preventDefault();
       const results= await login(userName, password)
       navigate('/post')
    }
    return (<>
    <h1>Log in</h1>
    
    
    <div className="login">
        <form>
            <div>
                <input type='text' placeholder='Username' value ={userName} onChange = {(ev)=>{setUserName(ev.target.value)}}/>
                <br></br>
                <input type='text' placeholder='Password' value ={password} onChange = {(ev)=>{setPassword(ev.target.value)}}/>
                <br></br>
                <button onClick={handleSubmit} type='submit'>Submit</button>
                </div>
        </form>
        <br></br>
        <p> Don't have an account?
            <Link to ='/register' >Register</Link>
            </p>
    </div>
    </>
    );
};


export default Login;