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
import HostLayout from './components/react_router_6/HostLayout';
import HostVans from './components/react_router_6/pages/Host/HostVans';
import HostVansDetail from './components/react_router_6/pages/Host/HostVansDetail';
import HostVansDetails from './components/react_router_6/pages/Host/Details/HostVansDetails';
import HostVansPricing from './components/react_router_6/pages/Host/Details/HostVansPricing';
import HostVansPhotos from './components/react_router_6/pages/Host/Details/HostVansPhotos';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>        

    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />          
          <Route path="about" element={<About/>} />
            
          <Route path="vans" element={<Vans/>} />
          <Route path='vans/:id' element={<VanDetail/>}/>

          <Route path="host" element={<HostLayout/>}>            
            <Route index element={<Dashboard/>} />
            <Route path="income" element={<Income/>} />
            <Route path="reviews" element={<Reviews/>} />

            <Route path="vans" element={<HostVans/>} />
            <Route path="vans/:id" element={<HostVansDetail/>} >
              <Route index element={<HostVansDetails/>}/>
              <Route path="pricing" element={<HostVansPricing/>}/>
              <Route path="photos" element={<HostVansPhotos/>}/>
            </Route>
            
          </Route>          
        </Route>
      </Routes>      
    </BrowserRouter>
    // {/* <App /> */}
  // {/* </React.StrictMode> */}
);

reportWebVitals();

