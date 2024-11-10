'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#f8e1e6] border-b border-[#966a8b] shadow-md">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between flex-wrap">
        <Link href="/" className="flex items-center">
          <Image src="/img/logo.png" alt="Logo" width={200} height={45} priority />
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <ul className={`w-full lg:w-auto flex-grow lg:flex lg:items-center lg:justify-end ${isMenuOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
          {['Inicio', 'Clases', 'Crochet', 'Sobre Nosotros'].map((item) => (
            <li key={item} className="mb-4 lg:mb-0 lg:ml-6">
              <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[#833582] font-bold hover:text-[#68246e] transition-colors duration-200">
                {item}
              </Link>
            </li>
          ))}
          <li className="mt-4 lg:mt-0 lg:ml-6">
            <Button asChild className="w-full lg:w-auto bg-gradient-to-r from-[#228B22] to-[#1E90FF] hover:opacity-80 transition-opacity duration-300">
              <Link href="/registro">Regístrate</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}