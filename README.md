# Appointments Project
Este proyecto es una aplicación para agendar citas. Permite a los usuarios iniciar sesión o inscribirse para gestionar sus citas de manera eficiente. Las principales características del sistema son:

- **Autenticación de Usuarios:** Los usuarios pueden iniciar sesión o registrarse para acceder a sus turnos y gestionar sus citas.
- **Gestión de Citas:** Los usuarios registrados pueden ingresar nuevas citas y cancelar citas existentes.
- **Visualización de Citas:** Es posible ver todas las citas registradas en el sistema.
- **Restricciones de Cancelación:** No se permite la cancelación de citas con menos de un día de anticipación para garantizar una mejor organización.
- **Requisito de Edad:** Solo los usuarios mayores de edad pueden inscribirse en la plataforma, asegurando un uso responsable del servicio.
- **Base de Datos:** Se implementó Postgres tanto para registrar usuarios como las citas.
- **Peticiones:** Backend configurado con Endpoints para peticiones GET, POST y PUT.

Puedes acceder al proyecto mediante: https://appointment.jccm.dev/

## Screenshot

![Appointments App Screenshot](https://i.imgur.com/xF3Edgq.png)

## Tecnologías Utilizadas

### Backend
- **TypeScript:** Lenguaje de programación utilizado para el desarrollo del servidor.
- **Express:** Framework de Node.js para la creación de la API REST.
- **Nodemon:** Herramienta para ejecutar automáticamente el servidor cada vez que se realizan cambios en el código.
- **Morgan:** Middleware para registrar las solicitudes HTTP en el servidor.
- **Cors:** Paquete para habilitar el intercambio de recursos de origen cruzado (CORS).
- **TypeORM:** ORM para trabajar con bases de datos usando TypeScript.

### Frontend
- **React con Vite:** Framework utilizado para la creación de la interfaz de usuario, con Vite como herramienta de construcción.
- **axios:** Biblioteca para realizar solicitudes HTTP desde el navegador.
- **Bootstrap:** Framework de CSS para el diseño y estilización de la interfaz.

## Instalación y Configuración

Para instalar y configurar este proyecto en tu entorno local, sigue estos pasos:

### Requisitos Previos
- Asegúrate de tener instalado [Node.js](https://nodejs.org/) y npm en tu sistema.
- Clona el repositorio a tu máquina local

### Backend
1. Navega al directorio del backend
2. Instala las dependencias
3. Configura las variables de entorno creando un archivo `.env`. Según el archivo "data-source.ts"
4. Inicia el servidor de desarrollo:
npm start
Ahora deberías poder acceder a la aplicación en `http://localhost:3000`.


### Frontend
1. Navega al directorio del frontend
2. Instala las dependencias
3. Inicia el servidor de desarrollo:
npm run dev

Ahora deberías poder acceder a la aplicación en `http://localhost:5173`.

## Contribución

Si estás interesado en contribuir a este proyecto, ¡tus aportes son bienvenidos! Sigue estos pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica o corrección (`git checkout -b mi-nueva-caracteristica`).
3. Realiza tus cambios y haz commit de ellos (`git commit -m 'Añadir alguna caracteristica'`).
4. Empuja tus cambios a la rama (`git push origin mi-nueva-caracteristica`).
5. Crea un nuevo Pull Request.

Antes de enviar tu Pull Request, asegúrate de que tu código sigue las convenciones y estándares del proyecto.

## Licencia

Este proyecto está bajo la Licencia [MIT](https://opensource.org/licenses/MIT). Consulta el archivo [LICENSE](LICENSE) para obtener más información.

---
---

# Appointments Project
This project is an application for scheduling appointments. It allows users to log in or sign up to manage their appointments efficiently. The main features of the system are:

- **User Authentication:** Users can log in or sign up to access their appointments and manage them.
- **Appointment Management:** Registered users can enter new appointments and cancel existing ones.
- **Viewing Appointments:** It is possible to view all the appointments registered in the system.
- **Cancellation Restrictions:** Cancellation of appointments with less than one day's notice is not allowed to ensure better organization.
- **Age Requirement:** Only users of legal age can sign up for the platform, ensuring responsible use of the service.
- **Database:** Postgres was implemented for both user registration and appointments.
- **Requests:** Backend configured with Endpoints for GET, POST, and PUT requests.

You can access to this proyect: https://appointment.jccm.dev/

## Technologies Used

### Backend
- **TypeScript:** Programming language used for server development.
- **Express:** Node.js framework for creating the REST API.
- **Nodemon:** Tool for automatically running the server whenever changes are made to the code.
- **Morgan:** Middleware for logging HTTP requests on the server.
- **Cors:** Package to enable Cross-Origin Resource Sharing (CORS).
- **TypeORM:** ORM for working with databases using TypeScript.

### Frontend
- **React with Vite:** Framework used for creating the user interface, with Vite as the build tool.
- **axios:** Library for making HTTP requests from the browser.
- **Bootstrap:** CSS framework for design and styling of the interface.

## Installation and Configuration

To install and configure this project in your local environment, follow these steps:

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/) and npm installed on your system.
- Clone the repository to your local machine.

### Backend
1. Navigate to the backend directory.
2. Install the dependencies.
3. Configure the environment variables by creating a `.env` file. Refer to the "data-source.ts" file.
4. Start the development server:
npm start

You should now be able to access the application at `http://localhost:3000`.

### Frontend
1. Navigate to the frontend directory.
2. Install the dependencies.
3. Start the development server:
npm run dev

You should now be able to access the application at `http://localhost:5173`.

## Contribution

If you are interested in contributing to this project, your contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a branch for your feature or correction (`git checkout -b my-new-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push your changes to the branch (`git push origin my-new-feature`).
5. Create a new Pull Request.

Before submitting your Pull Request, make sure your code follows the conventions and standards of the project.

## License

This project is under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for more information.