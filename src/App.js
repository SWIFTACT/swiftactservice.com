import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './component/Login';
import './slickstyle.css'
import ExploreMore from './pages/ExploreMore';

function App() {

  return (
    <BrowserRouter >   
      <Routes >
        <Route element={<Home />} path='/' />
        <Route element={<ExploreMore />} path='/exploremore' />
        
        {/* <Route element={<Login />} path='/login' /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App;
