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
          <li><Link href="/nosotros">Sobre nosotros</Link></li>
          <li className="lg:hidden"><Link href="/auth/register">Regístrate</Link></li>
          <li className="lg:hidden"><Link href="/auth/login">Inicia sesión</Link></li>
        </ul>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link href="/auth/register" className={styles.registro}>
            Regístrate
          </Link>
          <Link href="/auth/login" className={styles.registro}>
            Inicia sesión
          </Link>
        </div>
      </nav>
    </header>
  )
}