import React from 'react';

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contract from "./Pages/Contract";

// frist install React router dom this ( npm install react-router-dom )
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterApp = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={ <Home /> } />
                <Route  path='/blog' element={ <Blog /> } />
                <Route  path='/contract' element={ <Contract /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default RouterApp;
