import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import "./Login.css";
function Login() {

  const navigate = useNavigate();

  // funcionalidad: login con google
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Usuario autenticado:", result.user);
        // redirige a la página de registro o dashboard
        navigate("/registro", { state: { nombre: result.user.displayName } });
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
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