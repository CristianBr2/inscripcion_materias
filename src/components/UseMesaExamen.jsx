import { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs, doc, deleteDoc, updateDoc, addDoc  } from "firebase/firestore";
import { db, auth } from "../firebaseConfig"; 
import { getRolUsuario } from "../utils/getRolUsuario";
import UserMenu from "./UserMenu";
import "./UseMesaExamen.css";


function MesaExamen(){
  const [mesas,setMesas] = useState([]);
  const [role,setRole]=useState("usuario");
  const [newMesa, setNewMesa] = useState({ nombre_materia: "", fecha: "", hora: "", activo: true });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ nombre_materia: "", fecha: "", hora: "" });


  useEffect(() => {
    const fetchRole = async () => {
      if (auth.currentUser) {
        const r = await getRolUsuario(auth.currentUser.uid);
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

  const startEditing = (mesa) => {
    if (role !== "admin") return;
    setEditingId(mesa.id);
    setEditData({
      nombre_materia: mesa.nombre_materia,
      fecha: mesa.fecha,
      hora: mesa.hora
    });
  };

  //marcar las mesas como inactiva por si se estan editando
 const handleEditSave = async () => {
    if (role !== "admin" || !editingId) return;
    await updateDoc(doc(db, "mesa_examen", editingId), {
      nombre_materia: editData.nombre_materia,
      fecha: editData.fecha,
      hora: editData.hora
    });
    setMesas(prev =>
      prev.map(m =>
        m.id === editingId
          ? { ...m, nombre_materia: editData.nombre_materia, fecha: editData.fecha, hora: editData.hora }
          : m
      )
    );
    setEditingId(null);
    setEditData({ nombre_materia: "", fecha: "", hora: "" });
  };
  
  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewMesa(prev => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  setEditData(prev => ({ ...prev, [name]: value }));
  };

    //Añadir mesa
    const handleAdd = async () => {
      if (role !== "admin") return;
      const docRef = await addDoc(collection(db, "mesa_examen"), newMesa);
      setMesas(prev => [...prev, { id: docRef.id, ...newMesa }]);
      setNewMesa({ nombre_materia: "", fecha: "", hora: "", activo: true });
    };

  return (
<>
    <div className="addMesaForm">
    <h2 style={{ textAlign: "center", marginTop: "20px", color:"black"}}>Mesas de Examen Activas</h2>
    <UserMenu />
     {role === "admin" && (
        <div style={{ margin: "20px auto", width: "80%" }}>
          <h3>Añadir nueva mesa</h3>
          <input
            name="nombre_materia"
            value={newMesa.nombre_materia}
            placeholder="Materia"
            onChange={handleNewChange}
          />
          <input
            name="fecha"
            value={newMesa.fecha}
            placeholder="Fecha"
            onChange={handleNewChange}
          />
          <input
            name="hora"
            value={newMesa.hora}
            placeholder="Hora"
            onChange={handleNewChange}
          />
          <button onClick={handleAdd}>Añadir mesa</button>
        </div>
      )} 
    
    <table className="mesaTable" border="1" style={{ margin: "0 auto", marginTop: "20px" }}>
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
              <td>
                {editingId === mesa.id ? (
                  <input
                    name="nombre_materia"
                    value={editData.nombre_materia}
                    onChange={handleChange}
                  />
                ) : (
                  mesa.nombre_materia
                )}
                </td>

              <td>
                {editingId === mesa.id ? (
                  <input
                    name="fecha"
                    value={editData.fecha}
                    onChange={handleChange}
                  />
                ) : (
                  mesa.fecha
                )}
              </td>
              
              <td>
                {editingId === mesa.id ? (
                  <input
                    name="hora"
                    value={editData.hora}
                    onChange={handleChange}
                  />
                ) : (
                  mesa.hora
                )}
              </td>

              {role === "admin" && (
                <td>
                  {editingId === mesa.id ? (
                    <button onClick={handleEditSave}>Guardar</button>
                  ) : (
                    <>
                      <button onClick={() => startEditing(mesa)}>Editar</button>
                      <button onClick={() => handleDelete(mesa.id)}>Eliminar</button>
                    </>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</>
  );
}
export default MesaExamen;
