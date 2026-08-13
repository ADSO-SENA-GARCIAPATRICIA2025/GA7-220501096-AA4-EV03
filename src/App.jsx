import "./App.css";
import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useNavigate
} from "react-router-dom";

import Portada from "./pages/Portada.jsx";
import Users from "./pages/Users.jsx";


function Login({
    ingresar,
    usuario,
    password,
    cambiarUsuario,
    cambiarPassword,
    olvidaPassword
}) {

    return (
        <div className="container">

            <div className="login-card">

                <div className="logo">
                    🔐
                </div>

                <h1>Bienvenido</h1>

                <p>
                    Inicia sesión para continuar
                </p>

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


function AppContent() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
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

            cambiarUsuarioLogueado(datos.usuario);

            navigate("/portada");

        } else {

            alert(datos.message);

        }
    }


    return (
        <Routes>

            <Route
                path="/"
                element={
                    <Navigate
                        to="/login"
                        replace
                    />
                }
            />

            <Route
                path="/login"
                element={
                    <Login
                        ingresar={ingresar}
                        usuario={usuario}
                        password={password}
                        cambiarUsuario={cambiarUsuario}
                        cambiarPassword={cambiarPassword}
                        olvidaPassword={olvidaPassword}
                    />
                }
            />

            <Route
                path="/portada"
                element={
                    <Portada
                        usuario={usuarioLogueado}
                    />
                }
            />

            <Route
                path="/users"
                element={<Users />}
            />

        </Routes>
    );
}


function App() {

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}


export default App;