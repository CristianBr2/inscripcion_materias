import { auth, provider, db } from "../firebaseConfig";
import { signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from '../context/UserContext';
import "./Login.css";



function Login() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Usuario autenticado (Google):", result.user);
        localStorage.setItem("autenticado", "true");
        navigate("/registro", { state: { nombre: result.user.displayName } });
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  const handleRegularLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (username.length < 5) {
        setError("El nombre de usuario debe tener más de 4 caracteres.");
        return;
    }

    if (password.length < 5) { 
      setError("Contraseña no válida, debe tener más de 4 caracteres.");
      return; 
    }
    
    const userFound = VALID_USERS.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
     
      console.log("Usuario autenticado (Formulario):", userFound.username);
      localStorage.setItem("autenticado", "true");
      
  
      setError(""); 
      setSuccessMessage("Se ha iniciado sesión correctamente."); 
      
      setTimeout(() => {
        setUsername("");
        setPassword("");
        setSuccessMessage(""); 
        navigate("/registro", { state: { nombre: userFound.displayName } });
      }, 1500); 
      
    } else {
      setError("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <div className="Mayor">
        <div className="Medio">
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleRegularLogin}>
            <label>Usuario:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            {/* Mostrar mensaje de error (rojo) o éxito (verde) */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            
            <input type="submit" value="Iniciar" />
          </form>
        </div>
        <div className="google">
          <h2>¡Ingresa hoy mismo!</h2>
          <button onClick={handleGoogleLogin}>
            <img src="/img/imggoogle.png" alt="Google" className="google-logo"/>
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;