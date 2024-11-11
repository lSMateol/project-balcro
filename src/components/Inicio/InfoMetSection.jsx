import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContentSections() {
  const [activeTab, setActiveTab] = useState('basic')

  const methodologyData = {
    basic: [
      { name: 'Salsa', steps: ['Pasos básicos', 'En pareja'] },
      { name: 'Merengue', steps: ['Pasos básicos'] },
      { name: 'Folclor', steps: ['Pasos básicos', 'En pareja'] },
    ],
    advanced: [
      { name: 'Salsa', steps: ['Pasos avanzados', 'Figuras complejas', 'Improvisación'] },
      { name: 'Merengue', steps: ['Combinaciones avanzadas', 'Estilo personal'] },
      { name: 'Folclor', steps: ['Coreografías tradicionales', 'Interpretación artística'] },
    ],
  }

  return (
    <>
      {/* Art and Grace Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600">
              Arte en cada puntada,
              <br />
              gracia en cada paso.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Descubre cómo fusionamos la{" "}
              <span className="text-purple-600 font-semibold">
                elegancia de la danza
              </span>{" "}
              con la{" "}
              <span className="text-purple-600 font-semibold">
                creatividad del crochet
              </span>
              , ofreciéndote una experiencia única donde el movimiento y el arte se
              entrelazan. Aprende nuevas técnicas, disfruta del proceso creativo y
              conéctate con otros apasionados. ¡Únete a nosotros y deja que tu  
              pasión teja tu propio ritmo!
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/img/parejabaile.jpg"
              alt="Bailarines en acción"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Descubre{" "}
              <span className="text-purple-600">
                nuestra metodología
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explora nuestros niveles de enseñanza y encuentra el que mejor se adapte a ti.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-2 rounded-l-full ${
                activeTab === 'basic' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'
              } font-semibold transition-colors duration-300`}
              onClick={() => setActiveTab('basic')}
            >
              Básico
            </button>
            <button
              className={`px-6 py-2 rounded-r-full ${
                activeTab === 'advanced' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'
              } font-semibold transition-colors duration-300`}
              onClick={() => setActiveTab('advanced')}
            >
              Avanzado
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {methodologyData[activeTab].map((dance, index) => (
              <div key={dance.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">{dance.name}</h3>
                <ul className="space-y-2">
                  {dance.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}