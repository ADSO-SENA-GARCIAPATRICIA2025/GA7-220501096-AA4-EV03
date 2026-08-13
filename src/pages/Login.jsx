



function Login({ ingresar, usuario, password, cambiarUsuario, cambiarPassword, olvidaPassword }) {

    const navigate = useNavigate();

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