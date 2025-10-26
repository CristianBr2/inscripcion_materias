import React from 'react';
import { useNavigate } from "react-router-dom"; 

function SolicitarMesa() { /* Nombre de la función: SolicitarMesa */
    const navigate = useNavigate();

    // Función de manejo de envío de formulario (placeholder)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos de la solicitud de mesa enviados...');
        alert('Solicitud de Mesa de Examen enviada con éxito (simulado).');
        // Aquí iría la lógica para enviar los datos al backend
    };

    const handleVolver = () => {
        navigate(-1); // Regresa a la pantalla anterior (el menú de servicios)
    };

    // Opciones para el campo 'Materia'
    const opcionesMateria = [
        "Seleccione materia",
        "1 - Programación", 
        "2 - Matemáticas", 
        "3 - Base de Datos", 
        "4 - Dibujo",
        "5 - Lengua",
    ];

    return (
        <div style={{ padding: '20px' }}>
            {/* Título principal del formulario */}
            <h1>Solicitud para mesa de examen:</h1>

            {/* Contenedor del formulario */}
            <div style={{ padding: '20px', border: '1px solid lightgray', display: 'inline-block', minWidth: '400px' }}>
                
                <form onSubmit={handleSubmit}>
                    
                    {/* Fila 1: Nombre y Apellido */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <div>
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                        <div>
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                    </div>

                    {/* Fila 2: DNI y Curso */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <div>
                            <label htmlFor="dni">DNI:</label>
                            <input type="text" id="dni" name="dni" style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                        <div>
                            <label htmlFor="curso">Curso:</label>
                            <input type="text" id="curso" name="curso" style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                    </div>

                    {/* Fila 3: Materia y Año */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <div>
                            <label htmlFor="materia">Materia:</label>
                            <select id="materia" name="materia" style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }}>
                                {opcionesMateria.map((opcion, index) => (
                                    <option key={index} value={opcion}>{opcion}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="anio">Año:</label>
                            <input type="text" id="anio" name="anio" style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                    </div>

                    {/* Fila 4: Fecha que desea */}
                    <div style={{ marginBottom: '25px' }}>
                        <label htmlFor="fecha">Fecha que desea:</label>
                        <input type="date" id="fecha" name="fecha" style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                    </div>

                    {/* Botón Solicitud Mesa */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                        <button type="submit" style={{ padding: '8px 15px', border: '1px solid black' }}>
                            Solicitar Mesa
                        </button>
                    </div>

                </form>

                {/* Botón Volver */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-25px', marginRight: '-110px' }}>
                    <button onClick={handleVolver} style={{ padding: '8px 15px', border: '1px solid black' }}>Volver</button>
                </div>

            </div>

            {/* Nota de restricción */}
            <p style={{ fontSize: '0.8em', color: 'darkgray' }}>Tenga en cuenta que si usted no es egresado, no tiene privilegio a esta opción.</p>
        </div>
    );
}

export default SolicitarMesa; // Exportación corregida a SolicitarMesa