import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CargaCorrecta.css'; // Importa el CSS

function CargaCorrecta() {
    const navigate = useNavigate();

    // Redirige al menú de servicios (/servicios)
    const handleInicioClick = () => {
        navigate('/servicios'); 
    };
    
    // Vuelve a la página anterior (el formulario SolicitarMesa)
    const handleVolver = () => {
        navigate(-1); 
    };

    return (
        <div className="carga-correcta-container">
            <div className="carga-correcta-content">
                <h1 className="carga-correcta-title">Cargado correctamente.</h1>
                
                <div className="carga-correcta-button-group">
                    
                    {/* Botón 1: Inicio */}
                    <button 
                        className="carga-correcta-button"
                        onClick={handleInicioClick}
                    >
                        Inicio
                    </button>
                    
                    {/* Botón 2: Volver */}
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