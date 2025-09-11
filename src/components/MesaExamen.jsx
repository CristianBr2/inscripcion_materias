import { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

function MesaExamen() {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const col = collection(db, "mesa_examen");
    const q = query(collection(db, "mesa_examen"), where("activo", "==", true),orderBy("nombre_materia", "asc"))
    const snap = await getDocs(q);
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMesas(data);
    }

    fetchData();
  }, []);

  return (
<>
    <div>
    <h2 style={{ textAlign: "center", marginTop: "20px" }}>Mesas de Examen Activas</h2>
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
