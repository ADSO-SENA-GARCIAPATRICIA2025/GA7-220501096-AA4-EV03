
import "./App.css";
import { useState } from 'react';
import Portada from "./pages/Portada.jsx";

function App() {
// variables state para almacenar el usuario y la contraseña ingresados por el usuario
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPortada, setMostrarPortada] = useState(false);
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
// funcion para cambiar el valor del usuario y la contraseña cuando el usuario ingresa datos en los campos de texto
   
// funcion para cambiar el valor del usuario cuando el usuario ingresa datos en el campo de texto

function cambiarUsuario(event) {
    setUsuario(event.target.value);
  }
// funcion para cambiar el valor de la contraseña cuando el usuario ingresa datos en el campo de texto
  function cambiarPassword(event) {
    setPassword(event.target.value);
  } 
// funcion para cambiar el valor del usuario logueado cuando el usuario inicia sesión correctamente
  function cambiarUsuarioLogueado(usuario) {
    setUsuarioLogueado(usuario);
  }
// funcion para mostrar un mensaje de alerta cuando el usuario hace clic en el enlace de "¿Olvidaste tu contraseña?"
  function olvidaPassword() {
    alert('Recuperación de contraseña no implementada');
  }

  

// funcion para validar el usuario y la contraseña ingresados por el usuario
  async function ingresar() {

        const respuesta = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: usuario,
                password: password
            })
        });

        const datos = await respuesta.json();

        if (respuesta.ok) {
            alert('Inicio de sesión correcto');
            setMostrarPortada(true);
            cambiarUsuarioLogueado(datos.usuario);
        } else {
            alert(datos.message);
        }
    }
if (mostrarPortada) {
        return <Portada usuario={usuarioLogueado} />;
        
    }

    return (
    <div className="container">
    <div className="login-card">
        <div className="logo">🔐</div>

        <h1>Bienvenido</h1>
        <p>Inicia sesión para continuar</p>

        <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={cambiarUsuario}
        />

        <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={cambiarPassword}
        />

        <button onClick={ingresar}>Ingresar</button>

        <a href="#" onClick={olvidaPassword}>¿Olvidaste tu contraseña?</a>
    </div>
</div>
  );

}

export default App;
