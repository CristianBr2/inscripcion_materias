import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contacto.css';

function Contacto() {

    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
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

        setTimeout(() => navigate('/Gracias'), 1000);
        }, 2000);
    };

    const handleVolver = () => navigate(-1);


    return (
        <>
        <div className="contacto-container">
            <h1>Contacto</h1>
            <div className="contacto-box"> 
                <div className='fondo-contacto'>
                <form className='formulario-contacto' onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" id="correo" value={correo} name="correo"  onChange={(e) => setCorreo(e.target.value)} required style={{borderBottom: '1px solid black'}} />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="problema">Comentanos tu problema:</label>
                        <textarea 
                            id="problema" 
                            name="problema" 
                            rows="5" 
                            placeholder="Tu texto aquí..." 
                            required
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)} 
                        ></textarea>
                    </div>
                    
                    <div style={{ marginTop: 10, textAlign: 'center' }}>
                    {loading && <div className="spinner" aria-label="Cargando"></div>}
                    {success && <div id="mensaje-exito" style={{ color: 'green', fontSize: '2vh' }}>¡Mensaje enviado con éxito!</div>}
                    </div>

                    <button type="submit" className="btn-enviar">
                        Enviar
                    </button>

                </form>

                <div className='botonVolver'>
                    <button onClick={handleVolver} style={{ padding: '8px 15px' }}>Volver</button>
                 </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Contacto;