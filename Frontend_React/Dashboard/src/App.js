//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';





const Sidebar = React.lazy(() => import('./Components/Pages/Sidebar'))
const Footer = React.lazy(() => import('./Components/Pages/Footer'))
const Navbar = React.lazy(() => import('./Components/Pages/Navbar'))
const Dashboard = React.lazy(() => import('./Components/Pages/Dashboard'))







function App() {
  

  return (
    <div className='MyApp'>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
         


        </Routes>
        <Footer />
      </Suspense>

    </div>
  );
}

export default App;
