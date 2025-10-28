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
                            <input type="text" id="nombre" value={nombre} name="nombre" onChange={(e) => setNombre(e.target.value)} required className="input-line" />
                        </div>
                        <div className="form-field half">
                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" value={apellido} name="apellido" onChange={(e) => setApellido(e.target.value)} required className="input-line" />
                        </div>
                    </div>

                 
                    <div className="form-row">
                        <div className="form-field half">
                            <label htmlFor="materia">Materia:</label>
                            <select id="materia" name="materia"  value={materia} onChange={(e) => setMateria(e.target.value)} required className="input-line select-input">
                                {opcionesMateria.map((opcion, index) => (
                                    <option key={index} value={opcion}>{opcion}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-field half">
                            <label htmlFor="dni">DNI:</label>
                            <input type="text" id="dni" name="dni" value={dni} onChange={(e) => setDni(e.target.value)} required className="input-line" />
                        </div>
                    </div>

                    <div className="form-row single-field">
                        <div className="form-field">
                            <label htmlFor="curso">Curso:</label>
                            <input type="text" id="curso" name="curso" value={curso} onChange={(e) => setCurso(e.target.value)} required className="input-line short-line" />
                        </div>
                    </div>
                    
                    <div style={{ marginTop: 10, textAlign: 'center' }}>
                    {loading && <div className="spinner" aria-label="Cargando"></div>}
                    {success && <div id="mensaje-exito" style={{ color: 'green', fontSize: '2vh' }}>¡Mensaje enviado con éxito!</div>}
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