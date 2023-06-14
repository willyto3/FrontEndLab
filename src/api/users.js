// ? IMPORTACIÓN DE PAQUETES
// Importación del modulo Axios
import axios from 'axios'

// ? IMPORTACIÓN DE COMPONENTES
import { labStore } from '../store/labStore'

// Se coloca la URL como una constante
const BASE_URL = 'http://localhost:8001/api/v1'

// Se genera la conexión por Axios con la base de Datos
const usersAPI = axios.create({
  baseURL: BASE_URL,
})

// Se crea y exporta el enlace para conectar a los usuarios
export const userUrlEndPoint = '/users'

// Se exporta el token del Usuario
export const token = labStore.getState().token

// Se exporta el header
export const header = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/json',
}

// ? OBTENER TODOS LOS USUARIOS
// Se crea y exporta la Función para obtener todos los usuarios
export const getAllUsers = async () => {
  const response = await usersAPI.get(userUrlEndPoint, { headers: header })
  return response.data
}

// ? OBTENER UN USUARIO
// Se crea y exporta la Función para obtener todos los usuarios
export const getUser = async id => {
  const response = await usersAPI.get(`${userUrlEndPoint}/${id}`, {
    headers: header,
  })
  return response.data
}

// ? CREAR UN USUARIO
// Se crea y exporta la Función para añadir un usuario
export const createNewUser = async formData => {
  const response = await usersAPI.post(`${userUrlEndPoint}`, formData, {
    headers: header,
  })
  return response.data
}

// ? ELIMINAR UN USUARIO
// Se crea y exporta la Función para eliminar un usuario
export const deleteUser = async id => {
  const response = await usersAPI.delete(`${userUrlEndPoint}/${id}`, {
    data: { id },
    headers: header,
  })

  return response.data
}

// ? ACTUALIZAR UN USUARIO
// Se crea y exporta la Función para actualizar un usuario
export const updateUser = async ({
  id,
  nombres,
  apellidos,
  documento,
  email,
  contrasena,
  cargo,
  picturePath,
}) => {
  const response = await usersAPI.patch(`${userUrlEndPoint}/${id}`, {
    id,
    nombres,
    apellidos,
    documento,
    email,
    contrasena,
    cargo,
    picturePath,
    headers: header,
  })
  return response.data
}

export default usersAPI
