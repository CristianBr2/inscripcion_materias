import { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import { getUserRole } from "../utils/getUserRole";
import { auth } from "../firebaseConfig";

function MesaExamen(){
  const [mesas,setMesas] = useState([]);
  const [role,setRole]=useState("usuario");

  useEffect(() => {
    const fetchRole = async () => {
      if (auth.currentUser) {
        const r = await getUserRole(auth.currentUser.uid);
        setRole(r);
      }
    };
    fetchRole();
  }, []);
} 

  return (
<>
    <div>
    <h2 style={{ textAlign: "center", marginTop: "20px", color:"black"}}>Mesas de Examen Activas</h2>
    <table border="1" style={{ margin: "0 auto", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Materia</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {mesas.map((mesa) => (
            <tr key={mesa.id}>
              <td>{mesa.nombre_materia}</td>
              <td>{mesa.fecha}</td>
              <td>{mesa.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>
  );
}

export default MesaExamen;
