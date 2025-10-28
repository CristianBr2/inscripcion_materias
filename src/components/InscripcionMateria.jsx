import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InscripcionMateria.css';

function InscripcionMateria() {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [materia, setMateria] = useState('');
    const [dni, setDni] = useState('');
    const [curso, setCurso] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
 
    const handleSubmit = (e) => {
        e.preventDefault();

        setSuccess(false);
        setLoading(true);

        setTimeout(() => {
        setLoading(false);
        setSuccess(true); 
        e.target.reset();

        setTimeout(() => navigate('/InscriptoCorrectamente'), 1000);
        }, 2000);
    };

    const handleVolver = () => {
        navigate(-1);
    };

    const opcionesMateria = [
        "Seleccione materia",
        "Programación Avanzada", 
        "Cálculo I", 
        "Física Aplicada", 
        "Historia del Arte",
    ];

    return (
        <>
        <div className="inscripcion-materia-container">
            
            <h1 className="inscripcion-materia-title">Inscripción a materia</h1>
            
            <div className="inscripcion-form-box">
                <div className='fondo-incripcion'> 
                <form className='form-inscripcion' onSubmit={handleSubmit}>
                    
                  
                    <div className="form-row">
                        <div className="form-field half">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" className="input-line" />
                        </div>
                        <div className="form-field half">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" className="input-line" />
                        </div>
                    </div>

                 
                    <div className="form-row">
                        <div className="form-field half">
                            <label htmlFor="materia">Materia:</label>
                            <select id="materia" name="materia" className="input-line select-input">
                                {opcionesMateria.map((opcion, index) => (
                                    <option key={index} value={opcion}>{opcion}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-field half">
                            <label htmlFor="dni">DNI:</label>
                            <input type="text" id="dni" name="dni" className="input-line" />
                        </div>
                    </div>

                    <div className="form-row single-field">
                        <div className="form-field">
                            <label htmlFor="curso">Curso:</label>
                            <input type="text" id="curso" name="curso" className="input-line short-line" />
                        </div>
                    </div>

                   <div className="form-submit">
                        <button type="submit" className="btn-enviar">Enviar</button>
                    </div>

                </form>
                 </div>
            </div>

            <p className="inscripcion-info-text">
                Recuerde que los programas están en su respectiva sección.
            </p>
                                
            <div className="btn-volver">
            <button onClick={handleVolver} >Volver</button>
            </div>
            
        </div>
        </>
    );
}

export default InscripcionMateria;