'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function ScheduleCalendar() {
  const [showDialog, setShowDialog] = useState(false)
  const [selectedDay, setSelectedDay] = useState("")
  
  const scheduleInfo = {
    "Lunes": "9:00 - 11:00 am",
    "Martes": "2:00 - 4:00 pm",
    "Miércoles": "10:00 - 12:00 pm",
    "Jueves": "3:00 - 5:00 pm",
    "Viernes": "4:00 - 6:00 pm",
    "Sábado": "11:00 - 1:00 pm"
  }

  const calendarEvents = [
    { day: 1, event: "Clase de Tango para Principiantes" },
    { day: 2, event: "Día de Muertos - Taller de Decoración de Calaveras (Evento especial)" },
    { day: 3, event: "No hay clases" },
    { day: 4, event: "No hay clases" },
    { day: 5, event: "Taller de Baile Folclórico" },
    { day: 6, event: "Clase de Bordado - Flores y Naturaleza" },
    { day: 7, event: "Día del Tejido a Mano - Exposición de Proyectos" },
    { day: 8, event: "Clase de Bachata - Movimientos Avanzados" },
    { day: 9, event: "Clase de Tango para Intermedios" },
    { day: 10, event: "No hay clases" },
    // ... rest of the events
  ]

  const showSchedule = (day) => {
    setSelectedDay(day)
    setShowDialog(true)
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#a7c5eb] via-[#d5b8ff] to-[#e7c6ff]">
      {/* Schedule Section */}
      <section className="mb-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-[#4a2b5f]">Horarios de clases</h2>
        <h3 className="text-2xl font-semibold mb-6 text-center text-[#4a2b5f]">2024</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
          {Object.keys(scheduleInfo).map((day) => (
            <Button
              key={day}
              onClick={() => showSchedule(day)}
              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-[#4a2b5f] hover:bg-white/30 transition-all duration-300"
            >
              {day}
            </Button>
          ))}
        </div>
      </section>

      {/* Calendar Section */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-2 text-center bg-gradient-to-r from-[#4a2b5f] to-[#8b5fb4] text-transparent bg-clip-text">
          Noviembre 2024
        </h2>
        <p className="text-xl mb-8 text-center text-[#4a2b5f]">Calendario de Clases y Eventos</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
            const event = calendarEvents.find(e => e.day === day)
            return (
              <div
                key={day}
                className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
              >
                <span className="text-2xl font-bold block mb-2 text-[#4a2b5f]">{day}</span>
                <p className="text-sm text-[#4a2b5f] line-clamp-3">
                  {event?.event || "No hay clases"}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-white/90 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-[#4a2b5f]">
              {selectedDay} - Horario: {scheduleInfo[selectedDay]}
            </DialogTitle>
          </DialogHeader>
          <Button 
            onClick={() => setShowDialog(false)}
            className="mt-4 bg-gradient-to-r from-[#4a2b5f] to-[#8b5fb4] text-white hover:opacity-90 transition-all duration-300"
          >
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}