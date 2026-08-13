import { useState, useEffect } from "react";

function Users() {
    const [usuarios, setUsuarios] = useState([]);

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

                <h1>Gestión de usuarios</h1>

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
                                    {usuario.isAdmin ? "Sí" : "No"}
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