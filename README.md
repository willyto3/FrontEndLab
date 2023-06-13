# LABORATORIO APIAY

Proyecto Pagina Laboratorio para Apiay
www.laboratorioApiay.com
BLACK DOG SOLUTION
FRONTEND REACT

SECTION VARIABLES
React
Idioma Español
Estilo de Escritura camelCase
CSS
Metodologia BEM

SECTION COMENTARIOS
Idioma Español

SECTION PROCEDIMIENTO

- Se crea la carpeta para guardar el frontend
- se inicia el proyecto utilizando el comando npm init vite@latest
- se selecciona React
- se instalan los paquetes necesarios con npm i
- se prueba la pagina utilizando el siguiente codigo npm run dev
- se elimina el codigo que trae la pagina estandar
- se realizan las instalaciones de las dependencias de desarrollo
- se realizan las instalaciones de las dependencias del proyecto
- se crea la carpeta pages en la carpeta src, donde vamos a guardar todas las paginas del proyecto
  - Home
  - Experiencia
  - Estudios
  - Proyectos
  - Contacto
- se crea la carpeta components en la carpeta src, donde vamos a guardar todos los componentes del proyecto
- se crea la carpeta styles en la carpeta src, donde vamos a guardar todos los estilos visuales del proyecto

  - Themes.jsx
  - GlobalStyle.jsx

- SECTION DEPENDENCIAS

Dependencias de Desarrollo

### 1. ESlint

npm install eslint -D
funciones
Es una herramienta que reporta errores en los patrones de codigo, ayuda a que tu codigo se mantenga ordenado y cumpliendo las normas.
configuración:
en la terminal se ejecuta este codigo $npx eslint --init
en el archivo de configuracion creado modificamos la linea de extends
extends: ['plugin:react/recommended', 'standard', 'plugin:react/jsx-runtime'],
adicional se debe incluir esta configuracion, para que detecte la version de React
settings:{
react:{
version:'detect'
}
},

### 2. Prettier

- npm install prettier -D
  funciones
  Es una herramienta que formatea el codigo, ayuda a que tu codigo se mantenga ordenado y cumpliendo las normas.
  configuración:
  se crea el archivo .prettierrc en la carpeta principal del proyecto
  en el archivo de creado incluimos esta configuracion
  {
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid"
  }

### 3. ESLint Config Prettier

npm install eslint-config-prettier -D
funciones
Es una herramienta que iguala las normas de ESlint y Prettier en el codigo.
configuración:
en el archivo de configuracion de eslint modificamos la linea de extends
extends: [
'plugin:react/recommended',
'standard',
'plugin:react/jsx-runtime',
'eslint-config-prettier',
],

Dependencias del proyecto

### 1. React Router

npm i react-router-dom
funciones
React Router, es un framework para routear tu aplicacion.

### 2. MUI MATERIAL

npm install @mui/material @emotion/react @emotion/styled
funciones
MUI Material es un libreria de componentes que implementa Google material Design.

### 3. MUI MATERIAL ICONS

npm install @mui/icons-material
funciones
MUI Material Icons es un libreria de componentes para Iconos.

### 4. FORMIK

npm i formik
funciones
Formik es una libreria para construir Formularios.

### 5. YUP

npm i yup
funciones
YUP es una libreria para realizar validaciones.

### 6. AXIOS

npm i axios
funciones
Axios es un Cliente basado en Promesas HTTP.

### 7. NOTISTACK

npm i notistack
funciones
Notistack es una Libreria que muestra notificaciones en la pantalla.