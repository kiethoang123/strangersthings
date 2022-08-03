import '../styles/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="Navbar">
        <h1>Stranger's Things</h1>
        <Link to= '/'><p>Home</p></Link>
        <Link to= '/post'><p>Post</p></Link>
        <Link to= '/login'><p>Login</p></Link>
        <Link to= '/register'><p>Register</p></Link>
        </nav>

    );
};

export default Navbar;