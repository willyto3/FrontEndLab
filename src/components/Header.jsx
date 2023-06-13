// ? IMPORTACIÓN DE PAQUETES
import { PropTypes } from 'prop-types'

// ? IMPORTACION DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ! INICIO DEL COMPONENTE HEADER
const Header = ({ title, subtitle }) => {
  return (
    <Box ml='3rem'>
      <Typography
        variant='h4'
        fontWeight='bold'
        textTransform='uppercase'
      >
        {title}
      </Typography>
      <Typography variant='h5' textTransform='capitalize' sx={{ mb: '5px' }}>
        {subtitle}
      </Typography>
    </Box>
  )
}
export default Header

// ? PROTOTIPOS
Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}
