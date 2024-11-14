'use client'

import React, { useState } from 'react'
import { Instagram, Facebook, MessageCircle, Send } from 'lucide-react'

export default function SocialMedia() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const socialIcons = {
    instagram: <Instagram className="w-5 h-5" />,
    facebook: <Facebook className="w-5 h-5" />,
    tiktok: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
      </svg>
    ),
    whatsapp: <MessageCircle className="w-5 h-5" />,
    menuOpen: <Send className="w-5 h-5" />,
    menuClose: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    ),
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <ul className="flex flex-col-reverse items-end space-y-2 space-y-reverse">
        <li>
          <button
            onClick={toggleMenu}
            className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            title={isOpen ? "Cerrar | Síguenos en Nuestras Redes Sociales" : "Abrir | Síguenos en Nuestras Redes Sociales"}
            aria-expanded={isOpen}
          >
            {isOpen ? socialIcons.menuClose : socialIcons.menuOpen}
          </button>
        </li>
        {['whatsapp', 'tiktok', 'facebook', 'instagram'].map((platform, index) => (
          <li
            key={platform}
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <a
              href={
                platform === 'instagram'
                  ? 'https://www.instagram.com/tejiendoritmosysaberes.of/profilecard/?igsh=MWF0MGpsZHE1ODE1dA=='
                  : platform === 'tiktok'
                  ? 'https://www.tiktok.com/@tejiendoritmossab?_t=8rLqXs0bx83&_r=1'
                  : platform === 'whatsapp'
                  ? 'https://wa.me/c/573502204664'
                  : '#'
              }
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                platform === 'instagram'
                  ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'
                  : platform === 'facebook'
                  ? 'bg-blue-600'
                  : platform === 'tiktok'
                  ? 'bg-black'
                  : 'bg-green-500'
              } text-white`}
              title={platform.charAt(0).toUpperCase() + platform.slice(1)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcons[platform]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}