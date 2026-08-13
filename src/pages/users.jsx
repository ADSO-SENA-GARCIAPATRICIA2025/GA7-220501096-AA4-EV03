import { useState, useEffect } from "react";


function Users() {
    const [usuarios, setUsuarios] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Nickname, setNickname] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [IsAdmin, setIsAdmin] = useState(false);

    function cambiarNombre(event) {
    setNombre(event.target.value);
}

function cambiarApellido(event) {
    setApellido(event.target.value);
}

function cambiarNickname(event) {
    setNickname(event.target.value);
}

function cambiarEmail(event) {
    setEmail(event.target.value);
}

function cambiarPassword(event) {
    setPassword(event.target.value);
}

function cambiarIsAdmin(event) {
    setIsAdmin(event.target.checked);
}


    async function crearUsuario() {

    const respuesta = await fetch('http://localhost:3000/users',{
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            Nombre: Nombre,
            Apellido: Apellido,
            Nickname: Nickname,
            Email: Email,
            Password: Password,
            IsAdmin: IsAdmin
        })
    });

    const datos = await respuesta.json();

    if (respuesta.ok) {

        alert('Usuario creado correctamente');

    } else {

        alert(datos.message);
    }
}



    useEffect(() => {
        async function obtenerUsuarios() {
            const respuesta = await fetch("http://localhost:3000/users");
            const datos = await respuesta.json();

            console.log(datos);
            setUsuarios(datos);
        }

        obtenerUsuarios();
    }, []);

    return (
        <div className="users-container">

          <div className="users-card">

    <div className="users-header">
        <h1>Gestión de usuarios</h1>

        <div className="users-actions">

            <button
                className="create-user-button"
                onClick={() => setMostrarFormulario(true)}
            >
                + Crear usuario
            </button>

            {mostrarFormulario && (
                <button
                    className="cancel-user-button"
                    onClick={() => setMostrarFormulario(false)}
                >
                    Cancelar
                </button>
            )}

        </div>
    </div>


    {mostrarFormulario && (

        <div className="create-user">

            <h2>Crear usuario</h2>

            <div className="create-user-form">

                <div className="form-field">
                    <label style={{ color: '#666', fontSize: '13px', fontWeight: 'bold' }}>Nombre</label>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={Nombre}
                        onChange={cambiarNombre}
                    />
                </div>

                <div className="form-field">
                    <label style={{ color: '#666', fontSize: '13px', fontWeight: 'bold', textAlign: 'start' }}          >Apellido</label>
                    <input
                        type="text"
                        placeholder="Apellido"
                        value={Apellido}
                        onChange={cambiarApellido}
                    />
                </div>

                <div className="form-field">
                    <label style={{ color: '#666', fontSize: '13px', fontWeight: 'bold', textAlign: 'start' }}  >Nickname</label>
                    <input
                        type="text"
                        placeholder="Nickname"
                        value={Nickname}
                        onChange={cambiarNickname}
                    />
                </div>

                <div className="form-field">
                    <label style={{ color: '#666', fontSize: '13px', fontWeight: 'bold', textAlign: 'start' }}>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={Email}
                        onChange={cambiarEmail}
                    />
                </div>

                <div className="form-field">
                    <label style={{ color: '#666', fontSize: '13px', fontWeight: 'bold', textAlign: 'start' }}  >Contraseña</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={Password}
                        onChange={cambiarPassword}
                    />
                </div>

                <label style={{ color: '#666', fontSize: '13px', fontWeight: 'bold', textAlign: 'start' }}  className="admin-checkbox">
                    <input
                        type="checkbox"
                        checked={IsAdmin}
                        onChange={cambiarIsAdmin}
                    />

                    <span>Administrador</span>
                </label>

            </div>

            <button
                className="save-user-button"
                onClick={crearUsuario}
            >
                Guardar usuario
            </button>

        </div>

    )}





                <div className="users-list">

                    {usuarios.map((usuario) => (
                        <div key={usuario.Id} className="user-row">

                            <div className="user-field">
                                <span>ID</span>
                                <strong>{usuario.Id}</strong>
                           </div>

                            <div className="user-field">
                                <span>Nombre</span>
                                <strong>{usuario.Nombre}</strong>
                            </div>

                            <div className="user-field">
                                <span>Apellido</span>
                                <strong>{usuario.Apellido}</strong>
                            </div>

                            <div className="user-field">
                                <span>Nickname</span>
                                <strong>{usuario.Nickname}</strong>
                            </div>

                            <div className="user-field">
                                <span>Email</span>
                                <strong>{usuario.Email}</strong>
                            </div>

                            <div className="user-field">
                                <span>Administrador</span>
                                <strong>
                                    {usuario.IsAdmin ? "Sí" : "No"}
                                </strong>
                            </div> 

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Users;