export default function Component() {
    return (
      <section className="bg-[#ffebee] py-8">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#69c7ee]">
              ¿Dónde nos encontramos?
            </h2>
            
            <div>
              <h3 className="text-xl font-semibold text-[#9c6fb6]">
                Estamos ubicados en
              </h3>
              <p className="text-gray-700">[Dirección del estudio]</p>
            </div>
  
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Contacto:</h4>
              <p className="text-gray-700">
                WhatsApp: <a href="tel:+573155905854" className="hover:underline">+57 3155905854</a>
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:example@gmail.com" className="hover:underline">example@gmail.com</a>
              </p>
            </div>
          </div>
  
          <div className="w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-74.0!3d4.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDAnMDAuMCJOIDc0wrAwMCcwMC4wIlc!5e0!3m2!1sen!2sco!4v1600000000000!5m2!1sen!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    )
  }