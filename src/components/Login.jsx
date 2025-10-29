import { auth, provider, db } from "../firebaseConfig";
import { signInWithPopup,signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc, setDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
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

  const handleRegularLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (email.length < 5) {
        setError("Revise su correo, antes de enviar");
        return;
    }

    if (password.length < 5) { 
      setError("Contraseña no válida, debe tener más de 4 caracteres.");
      return; 
    }
    
    try{
      console.log("Email:", email, "Password:", password);
      await signInWithEmailAndPassword(auth, email, password);
      const user=auth.currentUser;
      console.log("usuario autenticado (Email/Pasword):", user.email);
    
      const docRef = doc(db, "Usuario_Nuevo", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, { uid: user.uid, nombre: user.displayName || user.email, registrado: false });
        navigate("/registro", { state: { nombre: user.displayName || user.email } });
      } else if (!docSnap.data().registrado) {
        navigate("/registro", { state: { nombre: user.displayName || user.email } });
      } else {
        navigate("/servicios");
      } 
    } catch (err) {
        console.error(err);
        setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container">
      <div className="Mayor">
        <div className="Medio">
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleRegularLogin}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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