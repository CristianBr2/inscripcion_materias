import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Gracias.css'; 

function Gracias() {
    const navigate = useNavigate();
    const { logout } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleInicio = () => {
        navigate('/servicios');
    };
    
    const handleVolver = () => {
        navigate(-1); 
    };

    const handleLogout = async () => {
        try {
            await logout(); 
            navigate('/');
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="gracias-container">
            <h1 className="gracias-title">Cargado correctamente.</h1>
            <p className="gracias-message">
                Gracias por comunicarse con el equipo directivo. Responderemos a la brevedad.
            </p>
            <p className="gracias-info">
                Gracias por el reporte de su inconveniente, nos aporta valor para poder 
                mejorar la eficiencia de nuestros usuarios.
            </p>

            <div className="gracias-actions">
                <button onClick={handleVolver} className="btn-volver">Volver</button>
                <button onClick={handleInicio} className="btn-inicio">Inicio</button>
            </div>

            <div className="dropdown-menu-container">
                <button onClick={toggleMenu} className="dropdown-toggle-btn">
                    Opciones
                </button>
                {isMenuOpen && (
                    <div className="dropdown-content">
                        <button onClick={handleLogout} className="btn-cerrar-sesion">
                            Cerrar Sesión
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Gracias;