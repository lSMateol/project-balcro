"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/img/slide1.jpg",
      title: "¡Despierta tu pasión por la danza! Únete a nuestras clases y +aprende con los mejores. ¡Baila al ritmo de la vida!",
      buttonText: "BOTÓN PARA REDIRECCIONAR",
    },
    {
      image: "/img/slide2.jpeg",
      title: "Exprésate con movimiento y estilo. En nuestra academia, cada paso cuenta. ¡Ven y muestra tu energía!",
      buttonText: "BOTÓN PARA REDIRECCIONAR",
    },
    {
      image: "/img/slide3.jpg",
      title: "Da rienda suelta a tu creatividad con nuestro taller de crochet. Te enseñamos a crear obras únicas con tus propias manos.",
      buttonText: "BOTÓN PARA REDIRECCIONAR",
    },
    {
      image: "/img/slide4.jpg",
      title: "¡El crochet nunca fue tan divertido! Acompáñanos en eventos especiales y lleva tus proyectos a otro nivel.",
      buttonText: "BOTÓN PARA REDIRECCIONAR",
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt="Dance class"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h2 className="mb-8 text-6xl font-bold text-white [text-shadow:0_0_5px_rgb(119,0,255),0_0_10px_rgb(119,0,255),0_0_20px_rgb(119,0,255),0_0_40px_rgb(119,0,255),0_0_80px_rgb(119,0,255),0_0_90px_rgb(119,0,255),0_0_100px_rgb(119,0,255),0_0_140px_rgb(119,0,255)]">
                {slide.title}
              </h2>
              <Button
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 backdrop-blur-sm transition-all hover:bg-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 backdrop-blur-sm transition-all hover:bg-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}