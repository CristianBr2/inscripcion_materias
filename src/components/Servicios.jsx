import { useNavigate } from "react-router-dom";


function Servicios() {
  const navigate = useNavigate();

  return (
    <>
      <h1>¿Qué desea hoy?</h1>

      <button onClick={()=>navigate("/Progrma")}>Ver progrma</button>
      <button onClick={()=>navigate("/Solicitar")}>Solicitar mesa</button>
      <button onClick={()=>navigate("/hsprofe")}>Horarios de profesores</button>
      <button onClick={()=>navigate("/Inscripcion")}>Inscribirme a materias</button>
    </>
  );
}

export default Servicios;