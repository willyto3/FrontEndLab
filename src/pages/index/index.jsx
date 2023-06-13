// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Container, Stack } from '@mui/material'

// ! INICIO DEL COMPONENTE INDEX
const Index = () => {
  // ? VISUALIZACION DEL COMPONENTE
  return (
    <Box
      display='flex'
      sx={{
        backgroundImage: 'url(background.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0.9',
        width: '100wh',
        height: '85vh',
        zIndex: -10,
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container
        sx={{
          height: '30vh',
          mt: 8,
          maxWidth: '90rem',
          ml: '4rem',
        }}
      >
        <Stack sx={{ height: '100%' }} justifyContent='center'>
          <Typography
            variant='h1'
            sx={{ fontWeight: 400, letterSpacing: '0.05em', mb: 1 }}
          >
            Analisís
          </Typography>

          <Typography
            variant='h2'
            sx={{ fontWeight: 500, letterSpacing: '0.05em', mb: 5 }}
          >
            Precisos y Confiables.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
export default Index
