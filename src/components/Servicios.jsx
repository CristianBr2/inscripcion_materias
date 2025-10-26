import { useNavigate } from "react-router-dom";
import './Servicios.css';


function Servicios() {
  const navigate = useNavigate();

  return (
    <div className="servicios-container">
      <div className="servicios-content">
        <h1>¿Qué desea hoy?</h1>

        <div className="servicios-button-grid">
          <button onClick={()=>navigate("/Programa")}>Ver programa</button>
          <button onClick={()=>navigate("/solicitarmesa")}>Solicitar mesa</button>
          <button onClick={()=>navigate("/Horario")}>Hs profesores</button>
          <button onClick={() => navigate("/problema")}>Tengo un problema</button>
          <button onClick={()=>navigate("/InscripcionMateria")}>Inscribirme a materias</button>
        </div>
      </div>
    </div>
  );
}

export default Servicios;