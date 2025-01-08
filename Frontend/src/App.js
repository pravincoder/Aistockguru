// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CursorGlowOverlay from './components/CursorGlowOverlay';

import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Router>
    <CursorGlowOverlay />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
       
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
