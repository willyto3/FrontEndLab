// ? IMPORTACIÓN DE PAQUETES
import { useQuery, useMutation, useQueryClient } from 'react-query'

// Importamos las funciones de API
import {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
} from '../api/users'

const key = 'getAllUsers'

export const useUsers = () => {
  return useQuery({ queryKey: key, queryFn: getAllUsers })
}

export const useUser = id => {
  return useQuery(['getUser', id], () => getUser(id))
}

export const useCreateNewUser = () => {
  const queryClient = useQueryClient()
  return useMutation('createNewUser', createNewUser, {
    onSuccess: user => {
      queryClient.setQueryData([key, prevUsers => prevUsers.concat(user)])
      queryClient.invalidateQueries([key])
    },
  })
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  return useMutation('updateUser', updateUser, {
    onSuccess: user => {
      queryClient.setQueryData([key, prevUsers => prevUsers.concat(user)])
      queryClient.invalidateQueries([key])
    },
    onError: error => {
      console.log(error)
    },
  })
}

export const useDeleteUser = id => {
  const queryClient = useQueryClient()
  return useMutation('deleteUser', deleteUser, {
    onSuccess: user => {
      queryClient.setQueryData([key, prevUsers => prevUsers.concat(user)])
      queryClient.invalidateQueries([key])
    },
  })
}
