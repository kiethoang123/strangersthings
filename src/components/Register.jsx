import '../styles/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import { register } from '../api'


const Register = () => { 
    const[userName, setUserName] = useState('')
const[password, setPassword] = useState('')
const navigate = useNavigate()
const handleSubmit= async (ev)=>{
    ev.preventDefault(); const results= await register(userName, password)
    navigate('/post')
}
return (
<>
    <h1>Register</h1>
    
    
    <div className="register">
        <form>
            <div>
                <input type='text' placeholder=' New Username'value ={userName} onChange = {(ev)=>{setUserName(ev.target.value)}} />
                <br></br>
                <input type='text' placeholder='New Password'value ={password} onChange = {(ev)=>{setPassword(ev.target.value)}}/>
                <br></br>
                <button onClick={handleSubmit} type='submit'>Submit</button>
                </div>
        </form>
        <br></br>
        <p> Sign in
            <Link to ='/login' >Login</Link>
            </p>
    </div>
    </>
);
};




export default Register;