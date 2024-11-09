import React from "react";
import '@/css/SocialMedia.css';

const RedesSociales = () => {
  return (
    <ul id="redes-sociales">
      <a
        className="menu-button"
        href="#redes-sociales"
        title="Abrir | Síguenos en Nuestras Redes Sociales"
      >
        ➡️
      </a>
      <a
        className="menu-button"
        href="#"
        title="Cerrar | Síguenos en Nuestras Redes Sociales"
      >
        ⬅️
      </a>

      <li className="menu-item item-instagram">
        <a href="#">📸</a>
      </li>
      <li className="menu-item item-facebook">
        <a href="#">📘</a>
      </li>
      <li className="menu-item item-tiktok">
        <a href="#">🎵</a>
      </li>
      <li className="menu-item item-whatsapp">
        <a href="https://wa.me/c/573502204664" target="_blank" rel="noopener noreferrer">
          📱
        </a>
      </li>
    </ul>
  );
};

export default RedesSociales;
