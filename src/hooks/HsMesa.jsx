
// #1crear collecion 'profesores' y cargar 3 documentos
// #2hacer una consulta ('activo','==',true)
// #3mostrar los resultados en una tabla (nombre,email, materias)

import { collection, getDocs } from "firebase/firestore";
import { query, orderBy, getDocs, collection } from "firebase/firestore"
	
	const col = collection(db, "Horarios de mesa");
	const snap = await getDocs(col);
	const data = snap.docs.map(d => ({id, hs_mesa: fecha, nombre_materia, d.id, ...d.data()}));
	console.log(data);

//Ordenar resultados (orderBy)


    const col = collection(db, "Horarios de mesa");
    const q = query(col, orderBy("nombre", "asc"));
    const snap = await getDocs(q);

//armar consulta SQL segun el proyecto
