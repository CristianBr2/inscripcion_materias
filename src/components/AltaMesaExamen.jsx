import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import { useNavigate } from "react-router-dom";



function AltaDocumento() {
  const navigate = useNavigate();
  const [materia, setMateria] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Materia:", materia);
  console.log("Fecha:", fecha);
  console.log("Hora:", hora);

    try{
        await addDoc(collection(db, "mesa_examen"), {
            nombre_materia: materia,
            fecha,
            hora,
            activo: true,
        });

        alert("Documento cargado correctamente");
        navigate("/"); // o a donde quieras redirigir
        } catch (error) {
        console.error("Error al cargar documento:", error);
        alert("Error al guardar");
    }
}



  return (
    <div className="formulario">
        <h2>Cargar documento</h2>
    <form onSubmit={handleSubmit}>
        <label>Materia:</label>
        <input
        type="text"
        value={materia}
        onChange={(e) => setMateria(e.target.value)}
        required
        />

        <label>Fecha:</label>
        <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
        />


        <label>Hora:</label>
        <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
        required
        />


        <input type="submit" value="Cargar" />
    </form>
    </div>
  );
}

export default AltaDocumento;