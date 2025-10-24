import { useNavigate } from "react-router-dom";
import './Servicios.css';


function Servicios() {
  const navigate = useNavigate();

  return (
    <div className="servicios-container">
      <div className="servicios-content">
        <h1>¿Qué desea hoy?</h1>

        <div className="servicios-button-grid">
          <button onClick={()=>navigate("/Progrma")}>Ver prograama</button>
          
          <button onClick={()=>navigate("/Solicitar")}>Solicitar mesa</button>
          
          <button onClick={()=>navigate("/hsprofe")}>Hs profesores</button>
          
    
          <button onClick={() => navigate("/problema")}>Tengo un problema</button>
          
          <button onClick={()=>navigate("/Inscripcion")}>Inscribirme a materias</button>
          
        </div>
      </div>
    </div>
  );
}

export default Servicios;