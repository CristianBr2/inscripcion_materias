import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { getUserRole } from "../utils/getUserRole";

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