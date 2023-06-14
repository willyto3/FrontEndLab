// ? IMPORTACIÓN DE PAQUETES
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

// ? IMPORTACIÓN DE ELEMENTOS DE DISEÑO
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

// ? IMPORTACION DE COMPONENTES
import columnas from './UserColumns'
import { labStore } from '../../store/labStore'

// ? IMPORTACION DE HOOKS
import { useUsers } from '../../hooks/useUsers'

// ! COMIENZO DEL COMPONENTE USER TABLE
const UserTable = () => {
  // ? CONSTANTES
  // se usa la tienda para conocer el valor del usuario
  const token = labStore(state => state.token)
  // Query para buscar todos los Usuarios
  const { data: users, isLoading, isError, error } = useUsers(token)

  const columns = columnas()

  // ? FUNCIONES
  // Se verifica si se esta cargando la información
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
        <Typography>Cargando...</Typography>
      </Box>
    )
  }

  // Se verifica si se presento un Error
  if (isError) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
        <Typography>{error.message}</Typography>
      </Box>
    )
  }

  return (
    <Box m='0 2rem'>
      <Box
        mt='10px'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '.name-column--cell': {},
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            textTransform: 'uppercase',
          },
          '& .MuiDataGrid-virtualScroller': {},
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {},
          '& .MuiCheckbox-root': {},
        }}
      >
        <DataGrid
          // loading={isLoading}
          getRowId={row => row._id}
          rows={users?.users || []}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          density='compact'
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
            sorting: {
              sortModel: [{ field: 'fullName', sort: 'asc' }],
            },
          }}
          pageSizeOptions={[10, 15, 20]}
          autoHeight={true}
        />
      </Box>
    </Box>
  )
}
export default UserTable
