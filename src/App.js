import { Navbar, Home, Index, Login, Logout, Post, Profile, Register, Create} from "./components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App =()=> {
  return(
    <Router>
    <div className="app">
      <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Logout' element={<Logout />} />
      <Route path='/post' element={<Post />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/register' element={<Register />} />

    </Routes>
    </div>
    </Router>
  );
};

export default App;
