import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import CreateRecipe from './pages/createRecipe';
import Navbar from './components/navbar.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <Routes>
    
      <Route path="/" element={<Home/>}></Route>
      
      
      <Route path="/CreateRecipe" element={<CreateRecipe/>}></Route>
      
      
     
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
