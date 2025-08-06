import { useNavigate } from "react-router-dom";
// import "./Login.css";
function Login() {

  const navigate = useNavigate();

  const irARegistro = () => {
    navigate("/registro");
  };


  return (
    <>
      <div className="Mayor">
        <div className="Medio">
          <h2>Iniciar sesion</h2>
          <form>
            <label>Usuario:</label>
            <input type="text" required />

            <label>Contraseña:</label>
            <input type="password" required />
            
            <input type="submit" value="Iniciar" />
          </form>
        </div>
      </div>
      <div className="google">
         <h2>¡Ingresa hoy mismo!</h2>
            <button onClick={irARegistro}>Google</button>
        {/* <button onClick={irARegistro} className="google-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />Continuar con Google
            </button> */}
      </div>
    </>
  );
}

export default Login;