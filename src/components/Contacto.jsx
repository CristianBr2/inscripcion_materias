import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contacto() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario de Contacto enviado. Redirigiendo a Gracias...');
        
        navigate('/Gracias'); 
    };

    return (
        <div className="contacto-container">
            <div className="contacto-box"> 
                <h1>Contacto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" id="correo" name="correo" required />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="problema">Comentanos tu problema:</label>
                        <textarea 
                            id="problema" 
                            name="problema" 
                            rows="5" 
                            placeholder="Tu texto aquí..." 
                            required
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-enviar">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;