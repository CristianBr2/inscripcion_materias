import { Navigate } from "react-router-dom"; 

function RutaPrivada({ children }) {
  const estaAutenticado = localStorage.getItem("autenticado") === "true";
  console.log("¿Autenticado?", estaAutenticado);
  if (estaAutenticado) {
    return children; // si estas logueado pasa
  } else {
    return <Navigate to="/login" />;  //sino logueate
  }
}

export default RutaPrivada;


// crtl + shift + i

// console:

// 1 --> localStorage.clear() --> borrar todo

// 2 --> localStorage --> verificar si se borro todo

// 3 --> Storage {length: 0}  --> resultado si es que se borro todo
