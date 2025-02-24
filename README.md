# API de Usuarios

Este es un proyecto de API  para realizar operaciones CRUD de usuarios, con metodos de array, desde un archivo data.ts. Desarrollado con Node.js, Express,TypeScript.
## Tecnologías utilizadas
- Node.js
- Express
- TypeScript

## Instalación

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Lisandro85/api-express
   cd tu-repo
   ```

2. Instalar dependencias:
   ```sh
   npm install
   ```

## Uso

### Levantar el servidor
Para iniciar la API en modo desarrollo, ejecutar:
```sh
npm run dev
```

El servidor se ejecutará en `http://localhost:3001` por defecto.

## Endpoints principales
| Método | Endpoint         | Descripción             |
|--------|----------------|-------------------------|
| GET    | /users         | Obtener todos los usuarios |
| GET    | /users/:id     | Obtener un usuario por ID |
| POST   | /users         | Crear un nuevo usuario |
| PUT    | /users/:id     | Actualizar un usuario |
| DELETE | /users/:id     | Eliminar un usuario |
