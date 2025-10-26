import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InscriptoCorrectamente.css';

function InscriptoCorrectamente() {
    const navigate = useNavigate();

    // Redirige al menú de servicios (/servicios)
    const handleInicioClick = () => {
        navigate('/InscriptoCorrectamente'); 
    };

    return (
        <div className="inscripto-correcto-container">
            <div className="inscripto-correcto-content">
                <h1 className="inscripto-correcto-title">Inscripto correctamente</h1>
                
                <button 
                    className="inscripto-correcto-button"
                    onClick={handleInicioClick}
                >
                    Inicio
                </button>
            </div>
        </div>
    );
}

export default InscriptoCorrectamente;