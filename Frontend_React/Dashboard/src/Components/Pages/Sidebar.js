import React from 'react'
import { NavLink, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function Sidebar() {
  const user=JSON.parse(localStorage.getItem('user'));
  console.log(user)
//    const ListOfnames = ['administrateur', 'coordinateur_unité_pédagogique','enseignant','Coordinateu_des_projets','responsable_option','responsable_module']
  function verif(roles)
  { 
    return roles.some(role => user.roles.includes(role));
  }
  return (
    <>

      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-2 fixed-start ms-2   bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
          <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
            <img src="./assets/img/logo-01.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Admin Dashboard</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
          <ul className="navbar-nav">
          {verif(['administrateur'])&&

            <li className="nav-item">
                            <NavLink to="/enseignants" className="nav-link text-white " >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Users</span>
              </NavLink>
            </li>
              }
          {verif(['administrateur'])&&

            <li className="nav-item">

              <NavLink to="/roles" className="nav-link text-white " >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Roles</span>
              </NavLink>
            </li>
            }
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8"> Pages</h6>
            </li>
            
            <li className="nav-item">
            <NavLink to="/profile" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
                </NavLink>

            </li>
            {verif(['administrateur'])&&

            <li className="nav-item">
            <NavLink to="/classes" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">Classe</span>
                </NavLink>

            </li>
}
            {verif(['administrateur'])&&

            <li className="nav-item">
            <NavLink to="/niveaux" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">Niveau</span>
                </NavLink>

            </li>
}
            {verif(['administrateur'])&&

            <li className="nav-item">
            <NavLink to="/options" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">Option</span>
                </NavLink>
                </li>

            }
                        {verif(['administrateur'])&&

                <li className="nav-item">
            <NavLink to="/ups" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">UP</span>
                </NavLink>

            </li>
}
            {verif(['administrateur'])&&

            <li className="nav-item">
            <NavLink to="/modules" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">Competance</span>
                </NavLink>

            </li>
            }
           
           {verif(['administrateur','enseignant'])&&
            <li className="nav-item">

            <NavLink to="/affectation" className="nav-link text-white ">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1">Affectation</span>
                </NavLink>
                </li>

          }
           

          
            {/* <li className="nav-item">
          <a className="nav-link text-white " href="./pages/sign-up.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">assignment</i>
            </div>
            <span className="nav-link-text ms-1">Sign Up</span>
          </a>
        </li> */}
          </ul>
        </div>

      </aside>
    </>
  )
}

export default Sidebar