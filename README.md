# Proyecto Login y Gestión de Usuarios

## Descripción

Este proyecto fue iniciado anteriormente en la evidencia **GA7-220501096-AA4-EV03**, donde se desarrolló el componente **frontend utilizando React**.

A partir de ese proyecto ya iniciado, se continuó el desarrollo para realizar las actividades:

* **GA7-220501096-AA5-EV01**
* **GA7-220501096-AA5-EV02**

Como punto de partida se utilizó el repositorio desarrollado en la evidencia anterior:

[GA7-220501096-AA4-EV03](https://github.com/ADSO-SENA-GARCIAPATRICIA2025/GA7-220501096-AA4-EV03)

En esta nueva etapa se integró el frontend con un **backend desarrollado en Node.js y Express** y una **base de datos MySQL**, permitiendo realizar el inicio de sesión y la gestión de los usuarios mediante operaciones CRUD.

---

## Tecnologías utilizadas

* **React** – Desarrollo del frontend.
* **Node.js** – Entorno utilizado para el backend.
* **Express** – Creación del servidor y las rutas de la API.
* **MySQL** – Base de datos para almacenar la información de los usuarios.
* **mysql2** – Conexión entre Node.js y MySQL.
* **React Router** – Gestión de la navegación entre las diferentes vistas.
* **CORS** – Permite la comunicación entre el frontend y el backend.
* **Postman** – Pruebas de los endpoints de la API.
* **Git y GitHub** – Control de versiones y almacenamiento del repositorio.

---

## Estructura general del proyecto

El proyecto está dividido principalmente en tres partes:

### Frontend

Desarrollado con React. Se encarga de la interfaz que utiliza el usuario, incluyendo:

* Login.
* Portada.
* Gestión de usuarios.
* Formularios para crear y editar usuarios.
* Botones para realizar las diferentes acciones.
* Navegación entre las páginas mediante React Router.

### Backend

Desarrollado con Node.js y Express.

El backend recibe las peticiones realizadas desde React y se comunica con la base de datos MySQL.

Se crearon diferentes rutas para realizar las operaciones sobre los usuarios:

| Método | Ruta         | Función                     |
| ------ | ------------ | --------------------------- |
| GET    | `/users`     | Consultar usuarios          |
| POST   | `/users`     | Crear usuarios              |
| PUT    | `/users/:id` | Modificar usuarios          |
| DELETE | `/users/:id` | Eliminar usuarios           |
| POST   | `/login`     | Validar el inicio de sesión |

### Base de datos

Se utiliza una base de datos MySQL llamada `login-react`, donde se almacena la información de los usuarios.

La tabla de usuarios contiene información como:

* ID
* Nombre
* Apellido
* Nickname
* Email
* Password
* Estado de administrador

El campo `isAdmin` permite diferenciar los usuarios administradores de los usuarios normales.

---

## Funcionalidades principales

### Inicio de sesión

El usuario introduce su **nickname y contraseña** en el formulario de login.

Los datos son enviados mediante una petición `POST` al backend, que consulta la información almacenada en MySQL.

Si las credenciales son correctas, el usuario puede acceder a la aplicación.

Además, la información del usuario autenticado se utiliza para mostrar su nombre en la portada.

---

### Gestión de usuarios

La aplicación permite consultar los usuarios almacenados en la base de datos.

La información se obtiene mediante una petición `GET` al backend y posteriormente se muestra en la interfaz de React.

La contraseña no se muestra en la interfaz, ya que corresponde a información sensible.

---

### Crear usuarios

Se desarrolló un formulario en React para registrar nuevos usuarios.

Los datos introducidos se envían mediante una petición `POST` al backend, donde se ejecuta una sentencia `INSERT` en MySQL.

Después de realizar correctamente la operación, se muestra un mensaje indicando que el usuario fue creado.

---

### Modificar usuarios

Se implementó una opción para editar la información de un usuario existente.

Los datos modificados se envían mediante una petición `PUT` utilizando el identificador del usuario.

El backend actualiza la información correspondiente en MySQL.

---

### Eliminar usuarios

También se implementó la opción de eliminar usuarios.

Para esto se utiliza una petición `DELETE`, enviando el ID del usuario seleccionado.

El backend recibe el identificador y elimina el registro correspondiente de la base de datos.

---

## Navegación con React Router

Durante el desarrollo se incorporó **React Router** para controlar la navegación entre las diferentes vistas de la aplicación.

Las principales rutas utilizadas son:

```text
/login
/portada
/users
```

De esta manera, después de realizar correctamente el login, el usuario puede ser dirigido a la portada y posteriormente acceder a la gestión de usuarios.

---

## Pruebas con Postman

Se utilizó **Postman** para comprobar el funcionamiento de los diferentes endpoints del backend.

Se realizaron pruebas de:

* Inicio de sesión.
* Consulta de usuarios.
* Creación de usuarios.
* Actualización de usuarios.
* Eliminación de usuarios.

Estas pruebas permitieron comprobar que el backend recibía correctamente las peticiones y que podía comunicarse con la base de datos MySQL.

---

## Control de versiones

El proyecto fue gestionado utilizando **Git** como herramienta de versionamiento y **GitHub** como repositorio remoto.

Durante el desarrollo se fueron registrando los cambios realizados en el proyecto y posteriormente se subieron al repositorio remoto.

Esto permite mantener un historial del desarrollo y disponer de una copia del proyecto en GitHub.

---

## Objetivo del proyecto

El objetivo principal es poner en práctica la integración entre **frontend, backend y base de datos**, desarrollando una aplicación que permita autenticar usuarios y realizar las operaciones básicas de gestión de información.

Con este proyecto se busca comprender de una manera práctica cómo React puede comunicarse con una API desarrollada con Node.js y Express, y cómo esta API puede interactuar con una base de datos MySQL.

---

## 👩‍💻 Aprendiz

**Jeanny Patricia García M.**
**SENA – Análisis y Desarrollo de Software**
Ficha **#3186636**
Año **2026**

