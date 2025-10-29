import { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs, doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../firebaseConfig"; 
import { getUserRole } from "../utils/getUserRole";


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

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "mesa_examen"),
        where("activo", "==", true),
        orderBy("nombre_materia", "asc")
      );
      const snap = await getDocs(q);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMesas(data);
    };
    fetchData();
  }, []);

  //eliminar mesa solo el admi puede
  const handleDelete = async (id) => {
    if (role !== "admin") return;
    await deleteDoc(doc(db, "mesa_examen", id));
    setMesas(prev => prev.filter(m => m.id !== id));
  };

  //marcar las mesas como inactiva por si se estan editando
  const handleEdit = async (id) => {
    if (role !== "admin") return;
    await updateDoc(doc(db, "mesa_examen", id), { activo: false });
    setMesas(prev => prev.map(m => m.id === id ? { ...m, activo: false } : m));
  };
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
            {role === "admin" && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {mesas.map((mesa) => (
            <tr key={mesa.id}>
              <td>{mesa.nombre_materia}</td>
              <td>{mesa.fecha}</td>
              <td>{mesa.hora}</td>
              {role === "admin" && (
                <td>
                   <button onClick={() => handleEdit(mesa.id)}>Editar</button>
                   <button onClick={() => handleDelete(mesa.id)}>Eliminar</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>
  );


export default MesaExamen;
