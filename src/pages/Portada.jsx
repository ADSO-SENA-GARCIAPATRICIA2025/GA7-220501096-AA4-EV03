function Portada({ usuario }) {
const Salir = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  //estructura de la portada, con un mensaje de bienvenida y un boton para salir
  return (
  <div className="portada">
    <div className="portada-card">

      <div className="portada-icon">
        ✨
      </div>

      <h1>¡Bienvenido! {usuario.nombre}!</h1>

      <p>
        Has iniciado sesión correctamente.
      </p>
    
      <button onClick={Salir}>
        Salir
      </button>

    </div>
  </div>
);
}

export default Portada;