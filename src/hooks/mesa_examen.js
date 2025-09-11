
// #1crear collecion 'mesa de examen' y cargar 3 documentos (nombre_materia - fehca - hora)
// #2hacer una consulta ('activo','==',true)
// #3mostrar los resultados en una tabla (nombre,fecha, hora)

import { query, orderBy, getDocs, collection } from "firebase/firestore"

async function getMesasActivas() {
    
	const col = collection(db, "mesa_examen");
    
    const q = query(col, where("activo", "==", true), orderBy("nombre_materia", "asc"));

	const snap = await getDocs(q);
	
    const data = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));	

    console.log("Mesas activas:", data);

}

//Ordenar resultados (orderBy)


    // const col = collection(db, "Horarios de mesa");
    // const q = query(col, orderBy("nombre", "asc"));
    // const snap = await getDocs(q);

//armar consulta SQL segun el proyecto
