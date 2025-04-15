import logo from './logo.svg';
import './App.css';
import Personagens from './pages/Personagens';
import Magias from './pages/Magias';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/harry-potter-infos">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Magias' element={<Magias />} />
      <Route path="/personagens" element={<Personagens />} />
      <Route path="/sobre" element={<Sobre/>} />
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
