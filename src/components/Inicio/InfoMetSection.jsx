import Image from 'next/image'

export default function ContentSections() {
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
              src="/placeholder.svg"
              alt="Bailarines en acción"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conoce{" "}
              <span className="text-purple-600">
                nuestra metodología
              </span>:
            </h2>
            <p className="text-gray-600">
              Las clases se dividen en dos niveles, desde los más básicos hasta
              los avanzados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Level */}
            <div className="bg-green-50 rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Básico:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Salsa</h4>
                  <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Pasos básicos</li>
                    <li>En pareja</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Merengue</h4>
                  <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Pasos básicos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Folclor</h4>
                  <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Pasos básicos</li>
                    <li>En pareja</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Avanzado:</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Salsa</h4>
                  <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Pasos básicos</li>
                    <li>En pareja</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Merengue</h4>
                  <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Pasos básicos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Folclor</h4>
                  <ul className="list-disc list-inside pl-4 text-gray-700">
                    <li>Pasos básicos</li>
                    <li>En pareja</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}