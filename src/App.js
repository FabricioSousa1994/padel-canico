import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courts from './pages/Courts';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Reservations from './pages/Reservations';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

    <NavBar/>

    <Routes>
    
  

    <Route path="/" element={<Home/>} />

    <Route path="/signup" element={<Signup/>} />

    <Route path="/login" element={<Login/>} />
      
    <Route path="/courts" element={<Courts/>} />

    <Route path="/bookings" element={<Reservations/>} />

    

    <Route path='/about' element={<About/>}/>

    
  

    </Routes>  
    
    </div>
  );
}

export default App;
