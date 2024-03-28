import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './components/react_router_6/Router';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Header() {
  return (
    <div className='header'>
        <Link to="/">#VANLIFE</Link>        
        <div className='headerRight'>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </nav>
        </div>      
    </div>
  )
}

function Footer() {
  return (
    <div className='footer'>
      <h5>2024 #VANLIFE</h5>
    </div>
  )
}

function Home() {
  return (    
    <>
      <Header />
      <div className='home'>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Rent the perfect van to make your perfect road trip.</p>
        <button className='home_button'>Find your van</button>
      </div>      
      <Footer />
    </>
  )
}

function About() {
  return (
    <>
      <Header/>
      <h1>
        This is ABOUT
      </h1>
      <Footer/>
    </>
  )
}

function Vans() {
  return (
    <>
    <Header />
      <h1>
        This is VANS
      </h1>
    <Footer />
    </>
  )
}

root.render(
  // <React.StrictMode>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/vans" element={<Vans/>} />
      </Routes>
    </BrowserRouter>
    // {/* <App /> */}
  // {/* </React.StrictMode> */}
);

reportWebVitals();
