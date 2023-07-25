import React from 'react';
import '../../App.css';

function Footer() {
  return (
    <div className="container my-5">
      <footer className="text-center text-white" style={{ backgroundColor: '#ffffff', position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 100 }}>
        {/* Grid container */}
        <div className="container">
          {/* Section: Social media */}
          <section className="mb">
            {/* Facebook */}
            <a
              className="btn btn-link btn-floating btn-lg m-1 text-danger" // Ajoutez la classe text-danger pour changer la couleur en rouge
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Twitter */}
            <a
              className="btn btn-link btn-floating btn-lg m-1 text-danger" // Ajoutez la classe text-danger pour changer la couleur en rouge
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* Google */}
            <a
              className="btn btn-link btn-floating btn-lg m-1 text-danger" // Ajoutez la classe text-danger pour changer la couleur en rouge
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>
            
{/* Logo */}
<img src="./assets/img/logo-01.png" className="custom-logo small-logo" alt="main_logo" />

            {/* Instagram */}
            <a
              className="btn btn-link btn-floating btn-lg m-1 text-danger" // Ajoutez la classe text-danger pour changer la couleur en rouge
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Linkedin */}
            <a
              className="btn btn-link btn-floating btn-lg m-1 text-danger" // Ajoutez la classe text-danger pour changer la couleur en rouge
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            {/* Github */}
            <a
              className="btn btn-link btn-floating btn-lg m-1 text-danger" // Ajoutez la classe text-danger pour changer la couleur en rouge
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          <div className="text-center text-dark  " style={{ backgroundColor: '#ffffff' }}>
          2023 © All Rights Reserved. Created By ESPRIT
          <a className="text-dark" href="https://mdbootstrap.com/">
          </a>
        </div>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

     
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Footer;