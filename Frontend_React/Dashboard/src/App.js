import React, { useState, useEffect } from "react";
import { Suspense } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import Options from './Components/Option/Options';
import Classes from './Components/Classe/Classes';
import Niveaux from "./Components/Niveau/Niveaux";
import SignIn from "./Components/Pages/SignIn";
import Signup from "./Components/Pages/Signup";
import Roles from "./Components/Role/Roles";
import Modules from "./Components/ModuleCompetance/Modules";
import Enseignants from './Components/Enseignant/Enseignants';
import Ups from './Components/UP/Ups';
import Sidebar from './Components/Pages/Sidebar';
import Footer from './Components/Pages/Footer';
import Navbar from './Components/Pages/Navbar';
import Profile from "./Components/Pages/Profile";


function App() {
  const user=localStorage.getItem('user');

  return (
    <div className='MyApp'>

      <Suspense fallback={<div>Loading...</div>}>
                 
       
          {
            user ? (
              <>
              <Navbar />
              <Sidebar />
              <Routes>
              <Route path="*" element={<Dashboard />} />
              <Route path="/options" element={<Options/>}/>
              <Route path="/classes" element={<Classes/>}/>
              <Route path="/enseignants" element={<Enseignants/>}/>
              <Route path="/roles" element={<Roles/>}/>
              <Route path="/ups" element={<Ups/>}/>
              <Route path="/niveaux" element={<Niveaux/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/modules" element={<Modules/>}/>
              </Routes>
              </>

            ) : (
            
              <Routes>
                              <Route path="/" element={<Dashboard />} />

              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/signup" element={<Signup/>}/>
              </Routes>

                )
          }
          
        





        <Footer />
      </Suspense>

    </div>
  );
}

export default App;
// import React from 'react';
// import { useEffect, useState } from "react"
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Signup from './Components/Pages/Signup';
// import Login from './Components/Pages/Login';
// import Dashboard from './Components/Pages/Dashboard';
// import {getUser} from "./service/api"


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     try {
//       const user = await getUser();
//       if (user) {
//         setIsLoggedIn(true);
//       }
//     } catch (error) {
//       setIsLoggedIn(false);
//     }
//   };

//   return (
//     <div className='MyApp'>
//       <Routes>
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         {isLoggedIn ? (
//           <Route path='/dashboard' element={<Dashboard />} />
//         ) : (
//           // Use the navigate function to redirect
//           <Route path='*' element={() => <Navigate to='/login' />} />
//         )}
//       </Routes>
//     </div>
//   );
// }

// export default App;
