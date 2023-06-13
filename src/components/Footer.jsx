// ? IMPORTACIÓN DE PAQUETES

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Grid, Paper } from '@mui/material'

// ? IMPORTACIÓN DE COMPONENTES

//! INICIO DEL COMPONENTE
const Footer = () => {
  return (
    <Box position='fixed' bottom='0' width='100%'>
      <Paper>
        <Grid
          container
          spacing={1}
          alignContent='center'
          justifyContent='center'
          gap='2rem'
        >
          <Grid item xs={10} sm={5}>
            <Typography
              fontWeight='bold'
              variant='h6'
              component='div'
              mb='0.2rem'
              sx={{
                flexGrow: 1,
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              // onClick={() => navigate('/')}
            >
              Laboratorio Apiay
            </Typography>
            <Typography
              variant='body1'
              component='div'
              align='justify'
              mb='0.3rem'
            >
              Realizamos los Analisis de Certificación de Crudo y Productos de
              Crudo en la Estación Apiay.
            </Typography>
          </Grid>

          <Grid item xs={10} sm={3} display='flex' alignSelf='center'>
            <Typography
              fontWeight='bold'
              variant='h6'
              lineHeight='1'
              component='div'
              mb='0.2rem'
              sx={{
                flexGrow: 1,
              }}
            >
              Redes Sociales
            </Typography>
            <Grid container>
              <Grid item xs={3}>
                <LinkedInIcon
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/ing-quimico-willy-corzo/',
                      '_blank'
                    )
                  }
                  sx={{
                    fontSize: '35px',
                    flexGrow: 1,
                    '&:hover': {
                      color: '#0e76a8',
                      cursor: 'pointer',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <GitHubIcon
                  onClick={() =>
                    window.open('https://github.com/willyto3', '_blank')
                  }
                  sx={{
                    fontSize: '35px',
                    flexGrow: 1,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <WhatsAppIcon
                  onClick={() =>
                    window.open(
                      'https://api.whatsapp.com/send?phone=573017893883&text=Me%20interesa%20Saber%20m%C3%A1s%20sobre%20tu%20Hoja%20de%20Vida',
                      '_blank'
                    )
                  }
                  sx={{
                    fontSize: '35px',
                    flexGrow: 1,
                    '&:hover': {
                      color: '#00bb2d',
                      cursor: 'pointer',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Divider />
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        mt='0.2rem'
        pb='0.2rem'
      >
        <Typography variant='caption'>
          Made With 💖 by Black Dog Solutions -{' '}
          {`Todos los derechos reservados. @ ${new Date().getFullYear()}`}
        </Typography>
      </Box>
    </Box>
  )
}
export default Footer
