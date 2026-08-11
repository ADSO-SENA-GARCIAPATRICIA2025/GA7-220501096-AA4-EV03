# 🔐 Login React

## Componente front-end del proyecto formativo y proyectos de clase

**Evidencia:** GA7-220501096-AA4-EV03  
**Tecnología:** React  
**Herramienta de desarrollo:** Visual Studio Code  
**Entorno:** Vite + JavaScript  

---

## 📌 Descripción

Este proyecto corresponde al desarrollo de un componente front-end utilizando React.

La aplicación consiste en una interfaz de inicio de sesión que permite al usuario ingresar un nombre de usuario y una contraseña. Los datos ingresados son almacenados mediante el estado de React y posteriormente validados mediante una condición.

Para efectos de esta actividad, la validación se realiza de manera local, sin conexión a una base de datos ni a un servicio externo.

Cuando el usuario ingresa las credenciales correctas, la aplicación muestra un mensaje de confirmación y permite acceder a una segunda pantalla denominada **Portada**.

---

## 🎯 Objetivo

Desarrollar un componente front-end utilizando React, aplicando conceptos básicos como:

- Componentes.
- JSX.
- Estados mediante `useState`.
- Eventos `onChange`.
- Eventos `onClick`.
- Renderizado condicional.
- Manejo de formularios.
- Organización de componentes en diferentes archivos.

---

## 🚀 Funcionalidades

La aplicación cuenta con las siguientes funcionalidades:

### Inicio de sesión

El usuario puede ingresar:

- Nombre de usuario.
- Contraseña.

Los datos son almacenados utilizando `useState`.

### Validación

Para esta actividad se utilizan las siguientes credenciales de prueba:

```text
Usuario: admin
Contraseña: admin
```
## 🛠️ Tecnologías utilizadas

- React
- JavaScript
- JSX
- CSS
- Vite
- Node.js
- npm
- Visual Studio Code

---

## 📂 Estructura del proyecto

```text
login-react/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── pages/
│   │   └── Portada.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

```

## ⚙️ Instalación

Para ejecutar el proyecto localmente es necesario tener instalado Node.js y npm.

1. Clonar o descargar el proyecto
Abrir el proyecto desde Visual Studio Code.

2. Instalar las dependencias
Desde la terminal ejecutar:
```text
npm install
3. Ejecutar el proyecto
npm run dev
```
Vite mostrará en la terminal la dirección local donde se encuentra disponible la aplicación.

## 🖥️ Uso de la aplicación

Al iniciar la aplicación se presenta el formulario de inicio de sesión.
```text
Credenciales de prueba
Usuario: admin
Contraseña: admin
```
Después seleccionar el botón Ingresar.

Si los datos son correctos, se mostrará un mensaje de confirmación y posteriormente la pantalla de bienvenida.

Para regresar al inicio, seleccionar el botón Salir.

## 🧠 Conceptos de React aplicados
useState

Se utiliza para almacenar temporalmente los valores introducidos por el usuario.
```text
const [usuario, setUsuario] = useState('');
const [password, setPassword] = useState('');
```
También se utiliza un estado para controlar qué pantalla debe mostrarse:
```text
const [mostrarPortada, setMostrarPortada] = useState(false);
onChange
```
Permite detectar los cambios realizados en los campos del formulario y actualizar los estados correspondientes.
```text
onChange={cambiarUsuario}
onChange={cambiarPassword}
onClick
```
Permite ejecutar la función de validación cuando el usuario selecciona el botón de ingreso.
```text
<button onClick={ingresar}>
    Ingresar
</button>
Renderizado condicional
```
Cuando las credenciales son correctas, el estado mostrarPortada cambia a true y React muestra el componente Portada.
```text
if (mostrarPortada) {
    return <Portada />;
}

```
## 🔐 Nota sobre la autenticación

Este proyecto tiene fines académicos y demostrativos.
La validación de usuario y contraseña se realiza directamente en el código y no representa un sistema de autenticación seguro para producción.
No se utiliza:
Base de datos
API
Backend
Sistema real de autenticación


## 📚 Evidencia

GA7-220501096-AA4-EV03
Componente front-end del proyecto formativo y proyectos de clase.
Proyecto desarrollado como parte del programa:
Análisis y Desarrollo de Software – SENA

## 👩‍💻 Aprendiz
Jeanny Patricia García M
Año: 2026
