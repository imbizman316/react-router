import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/react_router_6/router.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/react_router_6/pages/Home';
import About from './components/react_router_6/pages/About';
import Vans from './components/react_router_6/pages/Vans';
import VanDetail from './components/react_router_6/pages/VanDetail';
import Layout from './components/react_router_6/Layout';
import Dashboard from './components/react_router_6/pages/Host/Dashboard';
import Income from './components/react_router_6/pages/Host/Income';
import Reviews from './components/react_router_6/pages/Host/Reviews';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>    
    <BrowserRouter>      
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />          
          <Route path="/about" element={<About/>} />
          <Route path="/vans" element={<Vans/>} />
          <Route path='/vans/:id' element={<VanDetail/>}/>
          <Route path="/host" element={<Dashboard/>}>
            <Route path="/host/income" element={<Income/>} />
            <Route path="/host/reviews" element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>      
    </BrowserRouter>
    // {/* <App /> */}
  // {/* </React.StrictMode> */}
);

reportWebVitals();
