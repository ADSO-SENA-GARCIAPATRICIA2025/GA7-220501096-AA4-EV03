import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

import Portada from "./pages/Portada.jsx";
import Users from "./pages/Users.jsx";

function App() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
   // const [mostrarPortada, setMostrarPortada] = useState(false);
    const [usuarioLogueado, setUsuarioLogueado] = useState(null);

    function cambiarUsuario(event) {
        setUsuario(event.target.value);
    }

    function cambiarPassword(event) {
        setPassword(event.target.value);
    }

    function cambiarUsuarioLogueado(usuario) {
        setUsuarioLogueado(usuario);
    }

    function olvidaPassword() {
        alert("Recuperación de contraseña no implementada");
    }

    async function ingresar() {
        const respuesta = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nickname: usuario,
                password: password
            })
        });

        const datos = await respuesta.json();

        if (respuesta.ok) {
            alert("Inicio de sesión correcto");
            // setMostrarPortada(true);
            cambiarUsuarioLogueado(datos.usuario);
        } else {
            alert(datos.message);
        }
    }

    if (!mostrarPortada) {
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

                    <button onClick={ingresar}>
                        Ingresar
                    </button>

                    <a href="#" onClick={olvidaPassword}>
                        ¿Olvidaste tu contraseña?
                    </a>

                </div>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Portada usuario={usuarioLogueado} />}
                />

                <Route
                    path="/users"
                    element={<Users />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;