// ? IMPORTACIÓN DE PAQUETES
// Importación de los componentes de Zustand
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Se crea y exporta la tienda con persistencia
export const labStore = create(
  persist(
    set => ({
      // ? ESTADOS INICIALES
      user: '',
      token: '',

      // ? TOKEN DEL USUARIO
      setToken: token => set(state => ({ token })),

      // ? DATOS DEL USUARIO
      setUser: user =>
        set(state => ({
          user,
        })),

      // ? LOGOUT DEL USER
      logout: () =>
        set(state => ({
          token: '',
          usuario: '',
        })),
    }),
    { name: 'lab' }
  )
)
