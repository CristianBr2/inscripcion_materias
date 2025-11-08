import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs, doc, deleteDoc, updateDoc, addDoc  } from "firebase/firestore";
import { db, auth } from "../firebaseConfig"; 
import { getRolUsuario } from "../utils/getRolUsuario";
import './Detalle.css';
import UserMenu from "./UserMenu";

     

function Detalle() {
  const navigate = useNavigate(); 
    const [role,setRole]=useState("usuario");
    const [newProducto, setNewProducto] = useState({ nombremateria: "", profesor: "", curso: "", horario:"", activo: true });
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ nombremateria: "", profesor: "", curso: "", horario:"" });
    const [producto, setProducto] = useState([]);  

    
    const handleVolver = () => {
    navigate(-1); 
    };  


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
        collection(db, "producto"),
        where("activo", "==", true),
        orderBy("nombremateria", "asc")
      );
      const snap = await getDocs(q);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducto(data);
    };
    fetchData();
  }, []);
    

  //eliminar producto solo el admi puede
  const handleDelete = async (id) => {
    if (role !== "admin") return;
    await updateDoc(doc(db, "producto", id), { activo: false }); //marcar inactivo en vez de eliminar
    setProducto(prev => prev.filter(m => m.id !== id)); //actualiza para que no se vea
  };

  const startEditing = (producto) => {
    if (role !== "admin") return;
    setEditingId(producto.id);
    setEditData({
      nombremateria: producto.nombremateria,
      profesor: producto.profesor,
      curso: producto.curso,
      horario: producto.horario,
    });
  };


  //marcar los productos como inactivos por si se estan editando
 const handleEditSave = async () => {
    if (role !== "admin" || !editingId) return;
    await updateDoc(doc(db, "producto", editingId), {
      nombremateria: editData.nombremateria,
      profesor: editData.profesor,
      curso: editData.curso,
      horario: editData.horario,
    });
    setProducto(prev =>
      prev.map(m =>
        m.id === editingId
          ? { ...m, nombremateria: editData.nombremateria, profesor: editData.profesor, curso: editData.curso, horario: editData.horario }
          : m
      )
    );
    setEditingId(null);
    setEditData({ nombremateria: "", profesor: "", curso: "", horario: "" });
  };

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewProducto(prev => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  setEditData(prev => ({ ...prev, [name]: value }));
  };

    //Añadir producto
    const handleAdd = async () => {
      if (role !== "admin") return;
      const docRef = await addDoc(collection(db, "producto"), newProducto);
      setProducto(prev => [...prev, { id: docRef.id, ...newProducto }]);
      setNewProducto({ nombremateria: "", profesor: "", curso: "", horario: "", activo: true });
    };
    
        return (
         <>
             <div>
             <h2 style={{ fontFamily:'sans-serif',fontSize:"5vh", textAlign: "center", marginTop: "40px", color:"white"}}>Materias</h2>
             <UserMenu />
              {role === "admin" && (
                 <div style={{ margin: "20px auto", width: "80%" }}>
                   <h3 style={{ fontFamily:'sans-serif',fontSize:"3vh",textAlign: "center", marginTop: "40px", color:"white", marginBottom:"20px"}}>Añadir nueva materia</h3>
                   <input
                     name="nombremateria"
                     value={newProducto.nombremateria}
                     placeholder="Materia"
                     onChange={handleNewChange}
                   />
                   <input
                     name="profesor"
                     value={newProducto.profesor}
                     placeholder="profesor"
                     onChange={handleNewChange}
                   />
                   <input
                     name="curso"
                     value={newProducto.curso}
                     placeholder="curso"
                     onChange={handleNewChange}
                   />
                   <input
                   name="horario"
                   value={newProducto.horario}
                   placeholder="horario"
                   onChange={handleNewChange}/>
                   <button onClick={handleAdd}>Añadir materia</button>
                 </div>
               )} 
             
             <table className="mesaTable" border="1" style={{ margin: "0 auto", marginTop: "90px" }}>
                 <thead>
                   <tr>
                     <th>ID</th>
                     <th>Materia</th>
                     <th>Profesor</th>
                     <th>Curso</th>
                     <th>Horario</th>
                     {role === "admin" && <th>Acciones</th>}
                   </tr>
                 </thead>
                 <tbody>
                   {producto.map((p) => (
                     <tr key={p.id}>
                       <td>{p.id}</td>
         
                       <td>
                         {editingId === p.id ? (
                           <input
                             name="nombremateria"
                             value={editData.nombremateria}
                             onChange={handleChange}
                           />
                         ) : (
                           p.nombremateria
                         )}
                       </td>
                       
                       <td>
                         {editingId === p.id ? (
                           <input
                             name="profesor"
                             value={editData.profesor}
                             onChange={handleChange}
                           />
                         ) : (
                           p.profesor
                         )}
                       </td>

                       <td>
                         {editingId === p.id ? (
                           <input
                             name="curso"
                             value={editData.curso}
                             onChange={handleChange}
                           />
                         ) : (
                           p.curso
                         )}
                       </td>

                       <td>
                         {editingId === p.id ? (
                           <input
                             name="horario"
                             value={editData.horario}
                             onChange={handleChange}
                           />
                         ) : (
                           p.horario
                         )}
                       </td>
         
                       {role === "admin" && (
                         <td>
                           {editingId === p.id ? (
                             <button onClick={handleEditSave}>Guardar</button>
                           ) : (
                             <>
                               <button onClick={() => startEditing(p)}>Editar</button>
                               <button onClick={() => handleDelete(p.id)}>Eliminar</button>
                             </>
                           )}
                         </td>
                       )}
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
              <div className='botonVolver'>
                <button onClick={handleVolver} style={{ padding: '8px 15px' }}>Volver</button>
              </div>
         </>
        );
    

    
}

export default Detalle;