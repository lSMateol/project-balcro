"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'start',
      padding: '20px',
      backgroundColor: '#f8e1e6',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginRight: '27%',
    },
    nav: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginLeft: '20px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      padding: '10px',
      borderRadius: '5px',
      transition: 'all 0.3s ease',
    },
    activeNavLink: {
      backgroundColor: '#91171F',
      color: 'white',
    },
    btnA: {
      border: 'solid',
      backgroundColor: '#BA1F33',
      borderRadius: '30px',
      color: 'white',
    },
    btnB: {
      border: 'solid',
      backgroundColor: '#410B13',
      borderRadius: '30px',
      color: 'white',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>LOGO</div>
      <nav>
        <ul style={styles.nav}>
          <li style={styles.navItem}>
            <Link href="/Inicio" passHref>
              <span style={{ ...styles.navLink, ...styles.activeNavLink, ...styles.btnA }}>Inicio</span>
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/Clases" passHref>
              <span style={{ ...styles.navLink, ...styles.btnB }}>Clases</span>
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/crochet" passHref>
              <span style={{ ...styles.navLink, ...styles.btnA }}>Crochet</span>
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/sobre-nosotros" passHref>
              <span style={{ ...styles.navLink, ...styles.btnB }}>Sobre nosotros</span>
            </Link>
          </li>  
            <li style={styles.navItem}>
            <Link href="/registro" passHref>
              <span style={{ ...styles.navLink, ...styles.btnA }}>Registrate</span>
            </Link>
          </li>          
        </ul>        
      </nav>
    </header>
  );
};

