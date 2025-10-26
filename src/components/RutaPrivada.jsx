import { Navigate } from "react-router-dom"; 
import { useUser } from '../context/UserContext';

function RutaPrivada({ children }) { 
  const { user, loading } = useUser(); 
  const estaAutenticado = localStorage.getItem("autenticado") === "true";
  
  console.log("¿Autenticado?", estaAutenticado);
  
  if (estaAutenticado) {
    return children;
  } else {
    return <Navigate to="/login" />; 
  }
}

export default RutaPrivada;