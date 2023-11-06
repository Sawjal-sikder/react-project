import React from 'react';

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contract from "./Pages/Contract";
import Error from "./Pages/Error";

// frist install React router dom this ( npm install react-router-dom )
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';

const RouterApp = () => {
  return (
   
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route  path='/' element={ <Home /> } />
                <Route  path='/blog' element={ <Blog /> } />
                <Route  path='/contract' element={ <Contract /> } />
                <Route  path='*' element={ <Error /> } />
            </Routes>
        </BrowserRouter>

  );
}

export default RouterApp;
