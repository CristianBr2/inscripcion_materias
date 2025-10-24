// Programa.jsx

import React from 'react';
import './Programa.css';
import { useNavigate } from "react-router-dom"; // Importamos useNavigate por si necesitas los botones

function Programa() {
    const navigate = useNavigate();

    // Las opciones visibles en la lista de la imagen
    const materias = [
        "1 - Programación ✔️",
        "2 - Matemáticas",
        "3 - Base de Datos",
        "4 - Dibujo",
        "5 - Lengua",
        "6 - Organización y Arquitectura",
        "8 - Redes",
        "9 - Testing"
    ];

    return (
        <div className="programa-container">
            <div className="programa-content">

                {/* --- Selector de Materia (El botón desplegable) --- */}
                <div className="materia-selector">
                    <span className="selector-text">Seleccione materia</span>
                    <span className="selector-icon"></span>
                </div>
                
                {/* --- Caja de Opciones de Materia (El cuadro con la lista) --- */}
                <div className="opciones-box">
                    <ul className="opciones-list">
                        {materias.map((materia, index) => (
                            <li 
                                key={index} 
                                className={materia.includes('✔️') ? 'selected' : ''}
                            >
                                {materia}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* --- Botones Inferiores --- */}
                <div className="botones-footer">
                    <button 
                        className="btn-volver" 
                        onClick={() => navigate(-1)} // Para volver a la página anterior
                    >
                        Volver
                    </button>
                    <button 
                        className="btn-aceptar" 
                        onClick={() => alert("Materia aceptada")}
                    >
                        Aceptar
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Programa;