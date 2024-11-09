import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import '@/css/ScheduleCalendar.css';

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
    { day: 11, event: "No hay clases" },
    { day: 12, event: "Clase de Zumba - Sesión de Alta Energía" },
    { day: 13, event: "Clase de Ganchillo - Crea tu Bufanda" },
    { day: 14, event: "Clase de Salsa para Principiantes" },
    { day: 15, event: "Clase de Flamenco - Ritmo y Taconeo" },
    { day: 16, event: "Día del Diseño de Tejido - Diseña tu Patrón" },
    { day: 17, event: "No hay clases" },
    { day: 18, event: "Clase de Crochet - Técnicas Avanzadas" },
    { day: 19, event: "Día de Presentación - Muestra de Baile y Tejido" },
    { day: 20, event: "Clase de Salsa para Avanzados" },
    { day: 21, event: "Clase de Tejido - Bufandas y Chales" },
    { day: 22, event: "Día de la Comunidad - Sesión Abierta de Baile" },
    { day: 23, event: "Clase de Bordado - Motivos Geométricos" },
    { day: 24, event: "No hay clases" },
    { day: 25, event: "Taller de Tejido - Gorros y Guantes" },
    { day: 26, event: "Día de Baile Libre - Improvisación" },
    { day: 27, event: "Clase de Tango - Técnicas de Pareja" },
    { day: 28, event: "Día del Aprendiz - Exposición de Proyectos" },
    { day: 29, event: "Fiesta de Fin de Mes - Baile Social y Rifa" },
    { day: 30, event: "Clase de Baile Folclórico - Rondas y Círculos" },    
    // ... add all events
  ]

  const showSchedule = (day) => {
    setSelectedDay(day)
    setShowDialog(true)
  }

  return (
    <div className="container">
      {/* Schedule Section */}
      <section className="schedule-section">
        <h2 className="schedule-title">Horarios de clases</h2>
        <h3 className="schedule-subtitle">2024</h3>
        
        <div className="schedule-buttons">
          {Object.keys(scheduleInfo).map((day) => (
            <button
              key={day}
              onClick={() => showSchedule(day)}
              className="schedule-button"
            >
              {day}
            </button>
          ))}
        </div>

        <p className="schedule-note">
          Tomar en cuenta que los horarios planteados pueden estar sujetos a cambios,
          antes de cada clase verifique desde el apartado de clases que no hallan cambios.
        </p>
      </section>

      {/* Calendar Section */}
      <section className="calendar-section">
        <h2 className="calendar-title">Noviembre 2024</h2>
        <p className="calendar-subtitle">Calendario de Clases y Eventos</p>

        <div className="calendar-grid">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
            const event = calendarEvents.find(e => e.day === day)
            return (
              <div
                key={day}
                className="calendar-day"
              >
                <span className="calendar-day-number">{day}</span>
                <p className="calendar-day-event">
                  {event?.event || "No hay clases"}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedDay} - Horario: {scheduleInfo[selectedDay]}
            </DialogTitle>
          </DialogHeader>
          <Button 
            onClick={() => setShowDialog(false)}
            className="button-close"
          >
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
