import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Users, Music, Heart } from 'lucide-react'

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/img/aprenderbailar.jpg',
      title: '¿Quieres aprender a bailar?.',
      text: 'Adéntrate en nuestra academia y descubre la pasión por el movimiento con nuestros cursos de salsa, bachata y más.'
    },
    // Add more slides as needed
  ]

  const reasons = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Instructores expertos',
      description: 'Aprende de profesionales con amplia experiencia que te guiarán paso a paso en cada estilo de baile.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Ambiente inclusivo',
      description: 'Nuestras clases están diseñadas para todos los niveles, brindando un espacio cómodo y motivador para aprender a tu ritmo.'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'Diversión garantizada',
      description: 'Disfruta de cada sesión mientras mejoras tu coordinación, confianza y creatividad al ritmo de la música.'
    }
  ]

  const instructors = [
    {
      name: 'Sofía Torres',
      image: '/img/sofia.png',
      description: 'Sofía es una apasionada de la danza contemporánea y el ballet clásico. Con más de 10 años de experiencia, se especializa en trabajar con principiantes, ayudándoles a desarrollar una técnica sólida y confianza en sí mismos.'
    },
    {
      name: 'Carlos Mejía',
      image: '/img/carlos.png',
      description: 'Carlos tiene una gran trayectoria en el mundo del hip-hop y la danza urbana. Su energía contagiosa y estilo único hacen que cada clase sea una experiencia dinámica, ideal para quienes quieren mejorar su coordinación y expresión.'
    },
    {
      name: 'Valentina Ríos',
      image: '/img/valentina.png',
      description: 'Valentina es instructora de salsa y ritmos latinos, con un enfoque en la creatividad y la improvisación. Su objetivo es que los estudiantes no solo aprendan pasos, sino que también disfruten de la conexión con la música y el ritmo.'
    },
    {
      name: 'Diego Santillán',
      image: '/img/diego.png',
      description: 'Diego es experto en tango y folklore argentino. Con una metodología paciente y detallada, introduce a sus estudiantes en la técnica y la elegancia del tango, enfocándose en la conexión entre los bailarines.'
    },
    {
      name: 'Lucía Gómez',
      image: '/img/lucia.png',
      description: 'Lucía es instructora de zumba y danza fitness, y sus clases están llenas de energía y diversión. Con un enfoque en el bienestar físico, Lucía motiva a sus alumnos a mantenerse en forma mientras disfrutan de la música y el baile.'
    },
    // Add more instructors
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt="Dance class"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <h1 className="text-5xl font-bold mb-4 text-pink-400">
                {slide.title}
              </h1>
              <p className="max-w-2xl text-lg">{slide.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Reasons Section */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">
          3 motivos para aprender con nosotros:
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-white shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">
          Conoce a nuestros instructores:
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group relative p-4 rounded-lg bg-green-100 hover:bg-green-200 transition-colors duration-300"
            >
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-600 mb-2">
                {instructor.name}
              </h3>
              <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {instructor.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">
          Suscribete ahora
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="group p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-4">
                <Users className="w-full h-full text-pink-500 group-hover:text-purple-600 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Suscripción Individual</h3>
              <p className="text-gray-500">Mensual</p>
              <p className="text-gray-500">Vigencia por 30 días.</p>
              <p className="text-3xl font-bold text-purple-600 my-4">$ 40.000</p>
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
              >
                SOLICITALO POR WHATSAPP
              </a>
            </div>
          </div>

          <div className="group p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-4">
                <Users className="w-full h-full text-gray-500 group-hover:text-purple-600 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Suscripción Grupal</h3>
              <p className="text-gray-500">Mensual con descuento</p>
              <p className="text-gray-500">Vigencia por 30 días.</p>
              <p className="text-3xl font-bold text-purple-600 my-4">$ 50.000</p>
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
              >
                SOLICITALO POR WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}