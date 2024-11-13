'use client'

import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()
  const router = useRouter()

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
     
    if (res.ok) {
      router.push('/auth/login')
    } else {
      alert("El registro falló. Por favor, inténtalo de nuevo.")
    }
  }

  const socialIcons = {
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    google: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  }

  return (
    <div className="min-h-screen bg-[#ffebee] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registro
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                {...register("username", {
                  required: "El nombre de usuario es obligatorio",
                })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#69c7ee] focus:border-[#69c7ee] focus:z-10 sm:text-sm"
                placeholder="Nombre de usuario"
              />
              {errors.username && (
                <span className="text-red-500 text-xs mt-1">{errors.username.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "El correo electrónico es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Dirección de correo electrónico inválida",
                  },
                })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#69c7ee] focus:border-[#69c7ee] focus:z-10 sm:text-sm"
                placeholder="Correo electrónico"
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#69c7ee] focus:border-[#69c7ee] focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Por favor, confirma tu contraseña",
                  validate: (val) => {
                    if (watch('password') != val) {
                      return "Las contraseñas no coinciden";
                    }
                  },
                })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#69c7ee] focus:border-[#69c7ee] focus:z-10 sm:text-sm"
                placeholder="Confirmar contraseña"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#69c7ee] hover:bg-[#9c6fb6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#69c7ee]"
            >
              Registrar
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#ffebee] text-gray-500">O continuar con</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Registrarse con Facebook</span>
                {socialIcons.facebook}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Registrarse con Google</span>
                {socialIcons.google}
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/auth/login" className="font-medium text-[#69c7ee] hover:text-[#9c6fb6]">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}