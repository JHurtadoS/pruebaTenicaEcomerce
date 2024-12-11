# Gestión de Productos y Pedidos

Este proyecto es una aplicación desarrollada para la gestión de productos y pedidos, implementando un frontend moderno utilizando React con Next.js y TailwindCSS, así como un backend simulado con servicios mockeados y pruebas detalladas.

## Tabla de Contenidos

- [Características Principales](#características-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Pruebas](#pruebas)
- [Detalles de los Componentes](#detalles-de-los-componentes)
- [Contribuciones](#contribuciones)
- [Despliegue](#despliegue)

## Características Principales

- Gestión de productos: Crear, editar, listar y eliminar productos.
- Gestión de pedidos: Ver y gestionar pedidos.
- Validación de formularios utilizando React Hook Form.
- Notificaciones interactivas con React Toastify.
- Pruebas unitarias e integración utilizando React Testing Library y Vitest.
- Mock de servicios de API con Mock Service Worker (MSW).
- Diseño adaptable y moderno utilizando NextUI y TailwindCSS.
- Implementación de Docker para desarrollo y pruebas.

## Tecnologías Utilizadas

### Frontend

- React 18 y Next.js 13 (App Router)
- TailwindCSS para estilos
- NextUI para componentes interactivos
- React Toastify para notificaciones
- React Hook Form para manejo de formularios
- Axios para peticiones HTTP

### Backend (Mockeado)

- Mock Service Worker (MSW) para simular servicios API

### Pruebas

- Vitest para pruebas unitarias e integración
- React Testing Library para renderizado y manejo de DOM en pruebas
- Playwright para pruebas end-to-end

### Otros

- Docker para containerización
- ESLint y Prettier para linting y formateo de código

## Estructura del Proyecto

\`\`\`plaintext
src/
├── app/
│ ├── components/ # Componentes de React
│ │ ├── Header.tsx # Cabecera de la aplicación
│ │ ├── Sidebar.tsx # Barra lateral
│ │ ├── product/ # Componentes relacionados con productos
│ │ ├── ProductCard.tsx
│ │ ├── ProductList.tsx
│ │ ├── ProductForm.tsx
│ ├── services/ # Servicios API mockeados
│ │ ├── products.ts # Funciones para interactuar con productos
│ ├── contexts/ # Contextos de React
│ ├── test/ # Pruebas unitarias e integración
│ ├── unit/ # Pruebas unitarias
│ ├── integration/ # Pruebas de integración
\`\`\`

## Instalación

1. Clona el repositorio:
   \`\`\`bash
   git clone <https://github.com/JHurtadoS/pruebaTenicaEcomerce>
   \`\`\`

2. Accede al directorio del proyecto:
   \`\`\`bash
   cd <pruebaTenicaEcomerce>
   \`\`\`

3. Instala las dependencias:
   \`\`\`bash
   npm install
   \`\`\`

## Ejecución del Proyecto

### Desarrollo

Para iniciar el servidor en modo desarrollo:

\`\`\`bash
npm run dev
\`\`\`

El proyecto estará disponible en http://localhost:3000.

### Construcción

Para construir el proyecto para producción:

\`\`\`bash
npm run build
\`\`\`

### Servir la aplicación

Después de la construcción, sirve la aplicación:

\`\`\`bash
npm run start
\`\`\`

### Docker

Para ejecutar el proyecto usando Docker:

1. Construye la imagen:
   \`\`\`bash
   docker-compose build
   \`\`\`

2. Inicia el contenedor:
   \`\`\`bash
   docker-compose up
   \`\`\`

## Pruebas

### Ejecución de pruebas

- Ejecutar todas las pruebas:
  \`\`\`bash
  npm test
  \`\`\`

- Ejecutar pruebas unitarias:
  \`\`\`bash
  npm run test:unit
  \`\`\`

- Ejecutar pruebas de integración:
  \`\`\`bash
  npm run test:integration
  \`\`\`

- Ejecutar pruebas end-to-end:
  \`\`\`bash
  npm run test:e2e
  \`\`\`

- Ejecutar pruebas con cobertura:
  \`\`\`bash
  npm run test:coverage
  \`\`\`

### Pruebas en Docker

Para ejecutar las pruebas en un entorno Docker:

\`\`\`bash
npm run docker:test:all
\`\`\`

## Detalles de los Componentes

### Header

Componente que muestra la cabecera con opciones de inicio/cierre de sesión.

### Sidebar

Barra lateral con navegación para productos y pedidos.

### ProductCard

Tarjeta para mostrar información de un producto con opciones de edición y eliminación.

### ProductForm

Formulario reutilizable para crear y editar productos con validaciones dinámicas.

### ProductList

Lista que maneja las operaciones CRUD de productos.

## Contribuciones

Si deseas contribuir al proyecto:

1. Realiza un fork del repositorio.
2. Crea una rama para tus cambios:
   \`\`\`bash
   git checkout -b feature/nueva-funcionalidad
   \`\`\`
3. Realiza tus cambios y sube tus commits.
4. Envía un Pull Request describiendo tus cambios.

## Despliegue

### Vercel

Este proyecto está desplegado en Vercel. Puedes acceder a la versión en vivo aquí:

[https://prueba-tenica-ecomerce.vercel.app/]

### Despliegue Local con Docker

Para desplegar el proyecto localmente usando Docker:

1. Construye la imagen de producción:
   \`\`\`bash
   docker build -t gestion-productos-pedidos .
   \`\`\`

2. Ejecuta el contenedor:
   \`\`\`bash
   docker run -p 3000:3000 gestion-productos-pedidos
   \`\`\`

La aplicación estará disponible en `http://localhost:3000`.

---
