import { useNavigate } from "react-router-dom";

function Portada({ usuario }) {

    const navigate = useNavigate();

    const Salir = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <div className="portada">
            <div className="portada-card">

                <div className="portada-icon">
                    ✨
                </div>

                <h1>
                    ¡Bienvenido! {usuario.nombre}!
                </h1>

                <p>
                    Has iniciado sesión correctamente.
                </p>

                <button onClick={() => navigate("/users")}>
                    Gestionar usuarios
                </button>

                <span> </span>

                <button
                    onClick={Salir}
                    style={{
                        backgroundColor: "red",
                        color: "white"
                    }}
                >
                    Salir
                </button>

            </div>
        </div>
    );
}

export default Portada;