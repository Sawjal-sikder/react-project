import React from 'react';
import Home from '../Pages/Home'
import Service from '../Pages/Service'
import Serviceint from '../Pages/Serviceint'
import About from '../Pages/About'
import Error from '../Pages/Error'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../NavBar/Navbar';
const RouteApp = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/service' element={ <Service /> } />
            <Route path='/service/:title' element={ <Serviceint /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='' element={ <Error /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteApp;
