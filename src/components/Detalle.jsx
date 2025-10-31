import { useParams } from "react-router-dom";
import './Detalle.css';
import UserMenu from "./UserMenu";

const productos = [
    {id: 1, nombremateria: 'Matemáticas', profesor: 'Juan Castro', curso:'4° 2°', horario: '19:30 hs a 20:50 hs'},
    {id: 2, nombremateria: 'Programación', profesor: 'Lucas Alvarado', curso: '5° 1°', horario: '18:00 hs a 19:20 hs'},
    {id: 3, nombremateria: 'Sistemas Operativo', profesor: 'Erick Calderon', curso: '6° 1°', horario: '21:00 hs a 22:20 hs'},
    {id: 4, nombremateria: 'Literatura', profesor: 'Emanuel Lagos', curso: '5° 1°', horario: '18:00 hs a 19:20 hs'},
    {id: 5, nombremateria: 'Base de Datos', profesor: 'Teran Joaquin', curso: '5° 1°', horario: '18:00 hs a 19:20 hs'},
];      

function Detalle() {
    const {id} = useParams();
    const producto = productos.find((p) => p.id === Number(id)); 

    if (!producto){
        return <h2>No se encontro el producto</h2>;
    }

    return(
        
        <table className="DetalleTabla" border="1" style={{ margin: "0 auto", marginTop: "90px" }}>
            <UserMenu />
            <thead>
                <tr>
                    <th>Nombre Materia</th>
                    <th>Profesor</th>
                    <th>Curso</th>
                    <th>Horario</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{producto.nombremateria}</td>
                    <td>{producto.profesor}</td>
                    <td>{producto.curso}</td>
                    <td>{producto.horario}</td>
                </tr>
            </tbody>
        </table> 
    );
}

export default Detalle;