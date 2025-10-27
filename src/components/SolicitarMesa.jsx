import React from 'react';
import { useNavigate } from "react-router-dom"; 
import './SolicitarMesa.css';

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
        <>
        <div className='contenedorMayor'>
        <h1>Solicitud para mesa de examen</h1>

        <div className='fondo' style={{ padding: '20px' }}>


            <div style={{ padding: '20px', border: '3px solid lightgray', borderRadius: '5px', color: 'gray',  display: 'inline-block', minWidth: '400px' }}>
                
                <form className='solicitarMesa' onSubmit={handleSubmit}>
                    
                    <div style={{ display: 'flex', marginBottom: '15px' }}>
                        <div>
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                        <div>
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <div>
                            <label htmlFor="dni">DNI:</label>
                            <input type="text" id="dni" name="dni" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                        <div>
                            <label htmlFor="curso">Curso:</label>
                            <input type="text" id="curso" name="curso" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                       <div className="campo-materia">
                            <label htmlFor="materia">Materia:</label>
                                <select id="materia" name="materia" required defaultValue="">
                                    <option value="" disabled>Seleccione materia</option>
                                    {opcionesMateria.slice(1).map((opcion, index) => (
                                        <option key={index} value={opcion}>{opcion}</option>
                                    ))}
                                </select>

                        </div>

                        <div>
                            <label htmlFor="anio">Año:</label>
                            <input type="text" id="anio" name="anio" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: '5px' }} />
                        </div>
                    </div>

                    <div className='campo-fecha' style={{ marginBottom: '25px' }}>
                        <label htmlFor="fecha">Fecha que desea:</label>
                        <input type="date" id="fecha" name="fecha" required style={{ border: 'none', marginLeft: '2vh' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                        <button type="submit" style={{ padding: '8px 15px' }}>
                            Solicitar Mesa
                        </button>
                    </div>

                </form>

                <div  className='botonVolver' >
                    <button  onClick={handleVolver} style={{ padding: '8px 15px' }}>Volver</button>
                </div>

            </div>

        </div>
        <p >Tenga en cuenta que si usted no es egresado, no tiene privilegio a esta opción.</p>
        </div>
        </>
    );
}

export default SolicitarMesa; 