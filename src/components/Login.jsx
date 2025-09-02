import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Usuario autenticado:", result.user);
        navigate("/registro", { state: { nombre: result.user.displayName } });
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  return (
    <div className="login-container">
      <div className="Mayor">
        <div className="Medio">
          <h2>Iniciar sesión</h2>
          <form>
            <label>Usuario:</label>
            <input type="text" required />

            <label>Contraseña:</label>
            <input type="password" required />
            
            <input type="submit" value="Iniciar" />
          </form>
        </div>
        <div className="google">
          <h2>¡Ingresa hoy mismo!</h2>
          <button onClick={handleGoogleLogin}>
            <img src="/img/imggogle.png" alt="Google" className="google-logo"/>
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;