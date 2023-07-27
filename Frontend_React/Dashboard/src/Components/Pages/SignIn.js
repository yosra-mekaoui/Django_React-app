
import React, { useEffect, useState } from "react";


import {login} from '../../service/api'

function SignIn() {
 
  const [error,setError]=useState(null);

  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
 
  });

  const handleChange = (e) => {
    console.log("here")
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  async function handleSubmit(event){
      event.preventDefault(); // Prevent the default form submission behavior
  
      try {
        const res = await login(formData);
        localStorage.setItem('user', JSON.stringify(res.user_info));
        window.location.href='/'

      console.log(res)
      } catch (error) {
        // Handle the axios error here (e.g., network error, server error)
        setError(error.response.data.error);
      }
    
  
  }
  
    return (
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                    <form className="mx-1 mx-md-4" >
                      <div className="d-flex flex-row align-items-center mb-4">
                     
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email..."
                          />
                        </div>
                        
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Password..."
                          />
                        </div>
                      </div>
                      
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="buttpn" className="btn btn-danger btn-lg" onClick={handleSubmit}>Signin</button>
                      </div>
                      {error&&
                      <div className="alert alert-danger" role="alert">
                      {error}
                      </div>

                      }
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="./assets/img/logo-01.png"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     );
}

export default SignIn;