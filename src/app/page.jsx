"use client";
import React, { useEffect } from 'react';
import '@/css/App.css';

const App = () => {
  useEffect(() => {
    // Simula la espera de carga de la página
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("landing-page").style.display = "flex";
    }, 2000); // Puedes cambiar este tiempo
  }, []);

  return(
    <>
      <div id="loader" className="loader"></div>
      <div className="landing-page" id="landing-page">
        <div className="square lobby">
          <span></span>
          <span></span>
          <span></span>
          <div className="content-lobby">
            <p className="welcome">bienvenidos a</p>
            <h1 className="title">Tejiendo Ritmos y Saberes</h1>
            <h2 className="subtitle">Academia y Costura</h2>
            <div className="buttons">
              <a href="pagina1.html" className="btn btn-primary">INGRESA</a>
              <a href="https://wa.me/c/573502204664" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">E-COMMERCE WHATSAPP</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
