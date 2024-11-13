"use client"
import { signOut } from 'next-auth/react'
import { Calendar, Bell, Users, Scissors, Music, BarChart2 } from 'lucide-react'
import Link from 'next/link'

function Dashboard() {
    const upcomingClasses = [
        { id: 1, name: "Salsa Básica", date: "2023-06-15", time: "18:00" },
        { id: 2, name: "Crochet para Principiantes", date: "2023-06-16", time: "10:00" },
        { id: 3, name: "Bachata Intermedia", date: "2023-06-17", time: "19:00" },
    ]

    const announcements = [
        { id: 1, title: "Nuevo Instructor de Tango", content: "Damos la bienvenida a María González como nuestra nueva instructora de tango." },
        { id: 2, title: "Taller de Crochet Avanzado", content: "Este sábado, taller especial de técnicas avanzadas de crochet." },
    ]

    return (
        <div className="min-h-screen bg-[#ffebee] p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <button
                        className="bg-[#69c7ee] hover:bg-[#9c6fb6] text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                        onClick={() => signOut({ callbackUrl: '/inicio' })}
                    >
                        Cerrar Sesión
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Users className="text-[#69c7ee] mr-2" />
                            <h2 className="text-xl font-semibold">Estudiantes Activos</h2>
                        </div>
                        <p className="text-3xl font-bold">150</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Music className="text-[#69c7ee] mr-2" />
                            <h2 className="text-xl font-semibold">Clases de Baile</h2>
                        </div>
                        <p className="text-3xl font-bold">8</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Scissors className="text-[#69c7ee] mr-2" />
                            <h2 className="text-xl font-semibold">Talleres de Crochet</h2>
                        </div>
                        <p className="text-3xl font-bold">5</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Calendar className="text-[#69c7ee] mr-2" />
                            <h2 className="text-xl font-semibold">Próximas Clases</h2>
                        </div>
                        <ul className="space-y-4">
                            {upcomingClasses.map((cls) => (
                                <li key={cls.id} className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">{cls.name}</span>
                                    <span className="text-gray-600">{cls.date} - {cls.time}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/classes" className="mt-4 text-[#69c7ee] hover:text-[#9c6fb6] inline-block">
                            Ver todas las clases
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Bell className="text-[#69c7ee] mr-2" />
                            <h2 className="text-xl font-semibold">Anuncios Recientes</h2>
                        </div>
                        <ul className="space-y-4">
                            {announcements.map((announcement) => (
                                <li key={announcement.id} className="border-b pb-2">
                                    <h3 className="font-medium">{announcement.title}</h3>
                                    <p className="text-gray-600">{announcement.content}</p>
                                </li>
                            ))}
                        </ul>
                        <Link href="/announcements" className="mt-4 text-[#69c7ee] hover:text-[#9c6fb6] inline-block">
                            Ver todos los anuncios
                        </Link>
                    </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <BarChart2 className="text-[#69c7ee] mr-2" />
                        <h2 className="text-xl font-semibold">Resumen de Actividades</h2>
                    </div>
                    <p className="text-gray-600">Aquí puedes agregar un gráfico o estadísticas más detalladas sobre las actividades de la academia.</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard