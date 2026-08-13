import { useState, useEffect } from "react";


function Users() {
    const [usuarios, setUsuarios] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    const respuesta = await fetch('http://localhost:3000/users', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            nickname: nickname,
            email: email,
            password: password,
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

                <h1>Gestión de usuarios test </h1>

                <button className="create-user-button" onClick={() => setMostrarFormulario(true)}>
                    + Crear usuario
                </button>

                <button className="create-user-button" 
                onClick={() => setMostrarFormulario(false)}>
                    Cancelar
                </button>

                            {mostrarFormulario && (
             

                    
                        <div className="create-user">

                        <h2>Crear usuario</h2>

                        <input
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={cambiarNombre}
                        />

                        <input
                            type="text"
                            placeholder="Apellido"
                            value={apellido}
                            onChange={cambiarApellido}
                        />

                        <input
                            type="text"
                            placeholder="Nickname"
                            value={nickname}
                            onChange={cambiarNickname}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={cambiarEmail}
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={cambiarPassword}
                        />

                        <label>
                            <input
                                type="checkbox"
                                checked={IsAdmin}
                                onChange={cambiarIsAdmin}
                            />

                            Administrador
                        </label>
                    
                        <button className="create-user-button" >
                                                       
                             + Guardar usuario
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