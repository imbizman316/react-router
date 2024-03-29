import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/react_router_6/router.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/react_router_6/pages/Home';
import About from './components/react_router_6/pages/About';
import Vans from './components/react_router_6/pages/Vans';
import VanDetail from './components/react_router_6/pages/VanDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>    
    <BrowserRouter>
      <header className='header'>
        <Link to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/vans" element={<Vans/>} />
        <Route path='/vans/:id' element={<VanDetail/>}/>
      </Routes>
      <div className='footer'>
        <h4>2024 #Vanlife by Mike</h4>
      </div>
    </BrowserRouter>
    // {/* <App /> */}
  // {/* </React.StrictMode> */}
);

reportWebVitals();
