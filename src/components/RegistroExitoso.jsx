import { useLocation } from "react-router-dom";

function RegistroExitoso() {
  const location = useLocation();
  const nombre = location.state?.nombre || "usuario";
    return (
    <>
     <h1>¡Registro Exitoso!</h1>
     <h2>Bienvenido {nombre}</h2>
     <input type="submit" value="Siguiente" />
    </>
  );
}

export default RegistroExitoso;
