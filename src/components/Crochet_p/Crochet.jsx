'use client'

import React, { useState, useRef, useEffect, useReducer } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import '@/css/CrochetCarousel.css'

const carouselSlides = [
  {
    title: "Amigurumi",
    subtitle: "Técnica",
    description: "Crea adorables figuras en 3D",
    image: "/img/amigurumi.jpg"
  },
  {
    title: "Manta Granny",
    subtitle: "Proyecto",
    description: "Clásico y acogedor",
    image: "/img/granny-blanket.jpg"
  },
  {
    title: "Chal de Encaje",
    subtitle: "Proyecto Avanzado",
    description: "Elegancia en cada puntada",
    image: "/img/lace-shawl.jpg"
  },
  {
    title: "Tapestry Crochet",
    subtitle: "Técnica",
    description: "Crea patrones coloridos",
    image: "/img/tapestry-crochet.jpg"
  },
  {
    title: "Bolso de Verano",
    subtitle: "Proyecto",
    description: "Funcional y a la moda",
    image: "/img/summer-bag.jpg"
  }
]

const whyStudyData = [
  {
    title: "Instructores expertos",
    description: "Nuestros profesores son artesanos experimentados con años de experiencia en crochet.",
    icon: "👩‍🏫"
  },
  {
    title: "Clases flexibles",
    description: "Ofrecemos horarios flexibles para adaptarnos a tu estilo de vida ocupado.",
    icon: "🕰️"
  },
  {
    title: "Comunidad de apoyo",
    description: "Únete a una comunidad vibrante de entusiastas del crochet para compartir y aprender.",
    icon: "👥"
  },
  {
    title: "Proyectos prácticos",
    description: "Aprende haciendo con proyectos prácticos que puedes usar y regalar.",
    icon: "🧶"
  }
]

const timelineData = [
  { title: "Fundamentos", description: "Aprende los puntos básicos y cómo leer patrones." },
  { title: "Proyectos simples", description: "Crea tus primeros proyectos como bufandas y gorros." },
  { title: "Técnicas intermedias", description: "Domina técnicas más avanzadas y patrones complejos." },
  { title: "Proyectos avanzados", description: "Crea prendas, accesorios y decoraciones elaboradas." },
  { title: "Maestría", description: "Desarrolla tu propio estilo y crea diseños originales." }
]

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % carouselSlides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? carouselSlides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function CrochetCarousel() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div className="carousel-container">
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...carouselSlides, ...carouselSlides, ...carouselSlides].map((slide, i) => {
        let offset = carouselSlides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
    </div>
  );
}

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-300"></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="w-1/2"></div>
            <div className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 bg-emerald-500 rounded-full"></div>
            <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-emerald-800">{item.title}</h3>
              <p className="text-emerald-700">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Crochet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-100">
      {/* Header Section */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/crochet-background.jpg"
            alt="Crochet background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
          >
            Crochet para Principiantes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-3xl mx-auto drop-shadow-lg"
          >
            Descubre el arte del crochet con nosotros y da vida a tus creaciones
          </motion.p>
        </div>
      </header>

      {/* Explore Our Projects Section */}
      <section className="py-16 bg-gradient-to-r from-green-200 to-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
            Explora Nuestros Proyectos
          </h2>
          <CrochetCarousel />
        </div>
      </section>

      {/* Why Study With Us Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-100 to-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-emerald-800 mb-12 text-center">¿Por qué estudiar crochet con nosotros?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyStudyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">{item.title}</h3>
                <p className="text-emerald-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-emerald-800 mb-12 text-center">Tu viaje de aprendizaje</h2>
          <Timeline items={timelineData} />
        </div>
      </section>

      {/* What Are You Waiting For Section */}
      <section className="py-16 bg-gradient-to-b from-emerald-200 to-green-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-emerald-800 mb-6"
          >
            ¿Qué estás esperando?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-emerald-700 mb-12"
          >
            El crochet no solo es un pasatiempo relajante, sino también una forma de expresión artística. 
            Aprende a crear piezas únicas, desde accesorios de moda hasta decoraciones para el hogar. 
            Con el crochet, darás vida a tus ideas y crearás recuerdos duraderos.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={`/img/crochet-example${index}.jpg`}
                  alt={`Crochet example ${index}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
                  <h3 className="text-white text-xl font-semibold"> Aprende con nosotros </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/subscribe" className="inline-block bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition duration-300 transform hover:scale-105 shadow-lg">
              Suscríbete Ahora
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}