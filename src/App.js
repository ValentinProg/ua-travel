import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Home/>}/>
        <Route path='/services' element={<Home/>}/>
        <Route path='/sign-up' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
