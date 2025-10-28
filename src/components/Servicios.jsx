import { useNavigate } from "react-router-dom";
import './Servicios.css';
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";


function Servicios() {
  const navigate = useNavigate();

  useEffect(() => {
    const verificarRegistro = async () => {
    const user = auth.currentUser; 
    
    if (!user){
      navigate('/login');
      return;
    }  

    const docRef = doc(db, "Usuario_Nuevo", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists() || !docSnap.data().registrado) {
        console.log("Usuario sin registro se redirigi a /registro");
        navigate("/registro");
      } else {
        console.log("usuario ya registrado");
      }
    };

    verificarRegistro();
    },[navigate]);

  return (
    <div className="servicios-container">
      <div className="servicios-content">
        <h1>¿Qué desea hoy?</h1>

        <div className="servicios-button-grid">
          <button onClick={()=>navigate("/Programa")}>Ver programa</button>
          <button onClick={()=>navigate("/solicitarmesa")}>Solicitar mesa</button>
          <button onClick={()=>navigate("/Horario")}>Hs profesores</button>
          <button onClick={() => navigate("/Contacto")}>Tengo un problema</button>
          <button onClick={()=>navigate("/InscripcionMateria")}>Inscribirme a materias</button>
        </div>
      </div>
    </div>
  );
}

export default Servicios;