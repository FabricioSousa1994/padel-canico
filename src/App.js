import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courts from './pages/Courts';
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar>
    <Routes>
    
    

    <Route path="/" element={<Home/>} />
      
    <Route path="/courts" element={<Courts/>} />

    


    </Routes>  
    </NavBar>
    </div>
  );
}

export default App;
