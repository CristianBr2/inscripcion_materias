import { useParams } from "react-router-dom";

const productos = [
    {id: 1, nombre: 'Matemáticas', descripcion: 'detalles'},
    {id: 2, nombre: 'Programación', descripcion: 'detalles'},
    {id: 3, nombre: 'Sistemas Operativo', descripcion: 'detalles'},
];      

function Detalle() {
    const {id} = useParams();
    const producto = productos.find((p) => p.id === Number(id)); 

    if (!producto){
        return <h2>No se encontro el producto</h2>;
    }

    return(
        <div>
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
        </div>
    );
}

export default Detalle;