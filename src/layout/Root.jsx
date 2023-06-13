// ? IMPORTACIÓN DE PAQUETES
// Importacion de Outlet de React Router
import { Outlet } from 'react-router-dom'
// Importamos useMemo de React
import { useMemo } from 'react'
// Importamos CssBaseLine, Theme Provider y createTheme de mui Material
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material'

// ? IMPORTACIÓN DE ELEMENTOS
// Importamos themeSettings del arhivo theme
import { themeSettings } from '../styles/theme'

// ! INICIO DEL COMPONENTE ROOT
const Root = () => {
  // ? FUNCIONES
  // TEMPORAL
  const mode = 'dark'
  // Funcion para cambiar el Tema
  let theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  theme = responsiveFontSizes(theme)

  // ? VISUALIZACION DEL COMPONENTE
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  )
}
export default Root
