'use client'

import React, { useState, useEffect } from 'react';
import { Music, Paintbrush, Heart, Target, Compass, Star, Award, ChevronLeft, ChevronRight, Calendar, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const bannerImages = [
    { src: '/img/banner1.jpg', alt: 'Bailarina practicando en el estudio' },
    { src: '/img/banner2.jpg', alt: 'Manos tejiendo crochet' },
    { src: '/img/banner3.jpg', alt: 'Exhibición de danza y crochet' },
    { src: '/img/banner4.jpg', alt: 'Clase grupal de danza' },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    setIsAutoPlay(false);
  };

  const services = [
    {
      icon: <Music className="icon-pink" />,
      title: "Danza",
      description: "Expresión artística a través del movimiento. Clases para todos los niveles y edades."
    },
    {
      icon: <Paintbrush className="icon-pink" />,
      title: "Crochet",
      description: "Arte textil que combina creatividad y tradición. Talleres personalizados y proyectos únicos."
    },
    {
      icon: <Heart className="icon-pink" />,
      title: "Nuestra Pasión",
      description: "Fusionamos el arte del movimiento con la artesanía manual para crear experiencias únicas."
    }
  ];

  const institutionalInfo = [
    {
      icon: <Target className="icon-pink" />,
      title: "Visión",
      description: "Ser reconocidos como la academia líder en la integración de danza y crochet, inspirando a artistas de todas las edades a explorar su creatividad de maneras innovadoras."
    },
    {
      icon: <Compass className="icon-pink" />,
      title: "Misión",
      description: "Proporcionar un espacio acogedor y estimulante donde los estudiantes puedan descubrir y desarrollar sus talentos en danza y crochet, fomentando la expresión personal y la comunidad artística."
    },
    {
      icon: <Star className="icon-pink" />,
      title: "Objetivos",
      description: "1. Ofrecer programas de alta calidad en danza y crochet. 2. Fomentar la creatividad y la expresión personal. 3. Crear una comunidad artística inclusiva y solidaria. 4. Promover la fusión innovadora de danza y artesanía textil."
    },
    {
      icon: <Award className="icon-pink" />,
      title: "Valores",
      description: "Creatividad, Inclusión, Excelencia, Pasión, Comunidad, Innovación"
    }
  ];

  const historyTimeline = [
    { year: 2010, event: "Fundación de la academia" },
    { year: 2012, event: "Primera exhibición de danza y crochet" },
    { year: 2015, event: "Expansión a un nuevo local más amplio" },
    { year: 2018, event: "Lanzamiento de programas en línea" },
    { year: 2020, event: "Celebración del 10º aniversario" },
    { year: 2023, event: "Apertura de sucursales en otras ciudades" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-pink-50">
      <motion.div 
        className="header text-center mb-12 relative py-20 overflow-hidden rounded-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/about-us-bg.jpg"
            alt="Fondo de Sobre Nosotros"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-pink-300 bg-opacity-60"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-white mb-6 shadow-text">Sobre Nosotros</h1>
          <p className="text-xl text-white max-w-3xl mx-auto shadow-text">
            Bienvenidos a nuestra academia, donde la danza y el crochet se entrelazan para crear una experiencia artística única. 
            Fundada en 2010 por un grupo de apasionados artistas, nuestra academia ha crecido hasta convertirse en un referente 
            en la fusión de estas dos hermosas formas de expresión.
          </p>
          <p className="text-xl text-white max-w-3xl mx-auto mt-4 shadow-text">
            En nuestro espacio, creemos que cada persona tiene un potencial creativo esperando ser descubierto. Ya sea a través 
            de los movimientos fluidos de la danza o los intrincados patrones del crochet, nuestro objetivo es ayudarte a 
            encontrar tu voz artística única.
          </p>
        </div>
      </motion.div>

      <div className="relative w-full h-96 mb-12 overflow-hidden rounded-lg shadow-xl">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={bannerImages[currentSlide].src}
            alt={bannerImages[currentSlide].alt}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white text-xl font-semibold shadow-text">
          {bannerImages[currentSlide].alt}
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlay(false);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-pink-500' : 'bg-white'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-pink-500 mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-pink-700 mb-2">{service.title}</h3>
            <p className="text-pink-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {institutionalInfo.map((info, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-pink-500 mb-4 flex justify-center">
              {info.icon}
            </div>
            <h3 className="text-2xl font-semibold text-pink-700 mb-2">{info.title}</h3>
            <p className="text-pink-600">{info.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-lg shadow-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">Nuestra Historia</h2>
        <div className="relative">
          {historyTimeline.map((item, index) => (
            <div key={index} className="mb-8 flex items-center">
              <div className="flex-shrink-0 w-24 text-right mr-4">
                <span className="text-2xl font-bold text-pink-500">{item.year}</span>
              </div>
              <div className="w-4 h-4 bg-pink-500 rounded-full flex-shrink-0 mr-4"></div>
              <div className="flex-grow bg-pink-100 rounded-lg p-4 shadow-md">
                <p className="text-pink-700">{item.event}</p>
              </div>
            </div>
          ))}
          <div className="absolute h-full w-0.5 bg-pink-300 left-28 top-0 z-0"></div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-pink-500 mb-4 flex justify-center">
            <Calendar className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-pink-700 mb-2">Eventos Especiales</h3>
          <p className="text-pink-600">
            Organizamos regularmente exhibiciones, talleres y presentaciones que muestran la 
            hermosa fusión entre la danza y el crochet. ¡No te pierdas nuestros próximos eventos!
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-pink-500 mb-4 flex justify-center">
            <Users className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-pink-700 mb-2">Comunidad</h3>
          <p className="text-pink-600">
            Más que una academia, somos una familia. Únete a nuestra comunidad de artistas 
            apasionados y encuentra inspiración, apoyo y amistad.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-pink-500 mb-4 flex justify-center">
            <Sparkles className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-pink-700 mb-2">Proyectos Innovadores</h3>
          <p className="text-pink-600">
            Exploramos constantemente nuevas formas de combinar la danza y el crochet. 
            Participa en nuestros proyectos innovadores y sé parte de la vanguardia artística.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;