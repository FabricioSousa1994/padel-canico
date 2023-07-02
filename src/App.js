import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courts from './pages/Courts';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Routes>

    <Route path="/" element={<Home/>} />
      
    <Route path="/courts" element={<Courts/>} />

    


    </Routes>  
      
    </div>
  );
}

export default App;
