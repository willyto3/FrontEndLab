// Importación de CSS
import './index.css'

// ? IMPORTACION DE PAQUETES
// Importacion de React y del ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importacion del SnackbarProvider
import { SnackbarProvider, closeSnackbar } from 'notistack'
// Importacion del Query Provider
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
// Importacion del provider del sideBar
import { ProSidebarProvider } from 'react-pro-sidebar'

// ? IMPORTACION DE MODULOS
import App from './App.jsx'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

// ? CONSTANTES
const queryClient = new QueryClient()

//! INICIO DE LA APLICACION
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProSidebarProvider>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          action={snackbarId => (
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={() => closeSnackbar(snackbarId)}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          )}
        >
          <App />
        </SnackbarProvider>
      </ProSidebarProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
