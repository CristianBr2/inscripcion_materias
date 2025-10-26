import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CargaCorrecta.css'; 

function CargaCorrecta() {
    const navigate = useNavigate();

    const handleInicioClick = () => {
        navigate('/servicios'); 
    };
    
    const handleVolver = () => {
        navigate(-1); 
    };

    return (
        <div className="carga-correcta-container">
            <div className="carga-correcta-content">
                <h1 className="carga-correcta-title">Cargado correctamente.</h1>
                
                <div className="carga-correcta-button-group">
                    
                    <button 
                        className="carga-correcta-button"
                        onClick={handleInicioClick}
                    >
                        Inicio
                    </button>
                   
                    <button 
                        className="carga-correcta-button"
                        onClick={handleVolver}
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CargaCorrecta;