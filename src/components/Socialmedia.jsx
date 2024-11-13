'use client'

import React, { useState } from 'react'

export default function SocialMedia() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const socialIcons = {
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    tiktok: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    ),
    whatsapp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
    menuOpen: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    menuClose: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    ),
  }

  const styles = {
    container: {
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    menuButton: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#191919',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease',
      textDecoration: 'none',
      color: 'white',
      cursor: 'pointer',
      border: 'none',
      padding: 0,
    },
    menuItem: (index) => ({
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      transform: isOpen ? 'translateX(0)' : 'translateX(100px)',
      opacity: isOpen ? 1 : 0,
      transitionDelay: `${index * 0.1}s`,
    }),
    link: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '50%',
    },
  }

  return (
    <ul style={styles.container}>
      <button
        onClick={toggleMenu}
        style={styles.menuButton}
        title={isOpen ? "Cerrar | Síguenos en Nuestras Redes Sociales" : "Abrir | Síguenos en Nuestras Redes Sociales"}
      >
        {isOpen ? socialIcons.menuClose : socialIcons.menuOpen}
      </button>

      <li style={styles.menuItem(0)}>
        <a 
          href="https://www.instagram.com/tejiendoritmosysaberes.of/profilecard/?igsh=MWF0MGpsZHE1ODE1dA==" 
          style={{
            ...styles.link, 
            background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
          }} 
          title="Instagram"
        >
          {socialIcons.instagram}
        </a>    
      </li>
      <li style={styles.menuItem(1)}>
        <a 
          href="#" 
          style={{
            ...styles.link, 
            background: '#3b5998'
          }} 
          title="Facebook"
        >
          {socialIcons.facebook}
        </a>    
      </li>
      <li style={styles.menuItem(2)}>
        <a 
          href="https://www.tiktok.com/@tejiendoritmossab?_t=8rLqXs0bx83&_r=1" 
          style={{
            ...styles.link, 
            background: '#000000'
          }} 
          title="TikTok"
        >
          {socialIcons.tiktok}
        </a>    
      </li>
      <li style={styles.menuItem(3)}>
        <a 
          href="https://wa.me/c/573502204664" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            ...styles.link, 
            background: '#25D366'
          }} 
          title="WhatsApp"
        >
          {socialIcons.whatsapp}
        </a>
      </li>
    </ul>
  )
}