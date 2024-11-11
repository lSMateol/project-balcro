'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/css/Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <nav className={styles.header1}>
        <Link href="/">
          <Image src="/img/logo.png" alt="Logo" width={200} height={45} />
        </Link>

        <button
          id="hamburguesita"
          className={`${styles.hamburguesita} ${isMenuOpen ? styles.show_x : ''}`}
          onClick={toggleMenu}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>

        <ul className={`${styles.menu_gen} ${isMenuOpen ? styles.show : ''}`}>
          <li><Link href="/inicio">Inicio</Link></li>
          <li><Link href="/clases">Clases</Link></li>
          <li><Link href="/crochet">Crochet</Link></li>
          <li><Link href="/sobre-nosotros">Sobre nosotros</Link></li>
        </ul>

        <Link href="/registro" className={styles.registro}>
          Regístrate
        </Link>
      </nav>
    </header>
  )
}