import { auth, provider, db } from "../firebaseConfig";
import { signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";



function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuario autenticado con Google: ",user);

      const docRef = doc(db, "Usuario_Nuevo", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()){
        await setDoc(docRef, {uid: user.uid, nombre: user.displayName, registrado: false});
        console.log("Registro base creado en firebase para el usuario nuevo");
        navigate("/registro", {state: {nombre: user.displayName} });
      } else if (!docSnap.data().registrado){
        navigate("/registro", {state: { nombre: user.displayName} });
      }else{
        navigate("/servicios");
      }
    }catch (error) {
      console.error("error al iniciar sesión con Google: ", error);
      setError("refresque e intente nuevamente");
    }
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
    
    try{
      await signInWithEmailAndPassword(auth, username, password);
      const user=auth.currentUser;
      console.log("usuario autenticado (Email/Pasword):", user.email);
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