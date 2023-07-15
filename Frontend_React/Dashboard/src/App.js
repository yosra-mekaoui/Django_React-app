//import logo from './logo.svg';
import './App.css';
import React from "react";
import { Suspense } from 'react';



const Sidebar = React.lazy(() => import('./Components/Pages/Sidebar'))
const Footer = React.lazy(() => import('./Components/Pages/Footer'))
const Navbar = React.lazy(() => import('./Components/Pages/Navbar'))



function App() {
 

  return (
    <div className='MyApp'>

        <Navbar />
        <Sidebar />

   
        <Footer />

    </div>
  );
}

export default App;
