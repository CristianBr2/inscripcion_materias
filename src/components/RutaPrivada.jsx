import { Navigate } from "react-router-dom"; 
import { useUser } from '../context/UserContext';

function RutaPrivada({ children }) {
  // ✅ SOLUCIÓN: La llamada al Hook 'useUser' debe ir DENTRO de la función.
  const { user, loading } = useUser(); 
  
  // Tu lógica actual de autenticación (usando localStorage)
  const estaAutenticado = localStorage.getItem("autenticado") === "true";
  
  console.log("¿Autenticado?", estaAutenticado);
  
  if (estaAutenticado) {
    return children; // si estas logueado pasa
  } else {
    return <Navigate to="/login" />;  //sino logueate
  }
}

export default RutaPrivada;