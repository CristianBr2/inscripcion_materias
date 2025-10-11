import { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; 

function MesaExamen() {
  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const col = collection(db, "alumno");
    const q = query(collection(db, "alumno"), where("activo", "==", true),orderBy("nombre", "asc"))
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
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {mesas.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.dni}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>
  );
}

export default MesaExamen;