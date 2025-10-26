import React from 'react';
import { useNavigate } from "react-router-dom"; 

function SolicitarMesa() { 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        navigate('/cargacorrecta');
    };

    const handleVolver = () => {
        navigate(-1);
    };

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

            <h1>Solicitud para mesa de examen:</h1>

            <div style={{ padding: '20px', border: '1px solid lightgray', display: 'inline-block', minWidth: '400px' }}>
                
                <form onSubmit={handleSubmit}>
                    
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

                    <div style={{ marginBottom: '25px' }}>
                        <label htmlFor="fecha">Fecha que desea:</label>
                        <input type="date" id="fecha" name="fecha" style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                        <button type="submit" style={{ padding: '8px 15px', border: '1px solid black' }}>
                            Solicitar Mesa
                        </button>
                    </div>

                </form>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-25px', marginRight: '-110px' }}>
                    <button onClick={handleVolver} style={{ padding: '8px 15px', border: '1px solid black' }}>Volver</button>
                </div>

            </div>

            <p style={{ fontSize: '0.8em', color: 'darkgray' }}>Tenga en cuenta que si usted no es egresado, no tiene privilegio a esta opción.</p>
        </div>
    );
}

export default SolicitarMesa; 