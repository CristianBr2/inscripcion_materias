// Programa.jsx (FINAL CON DATOS COMPLETOS)

import React, { useState } from 'react';
import './Programa.css';
import { useNavigate } from "react-router-dom"; 
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Programa() {
    const navigate = useNavigate();
    const [materiaSeleccionada, setMateriaSeleccionada] = useState(null); 
    const [opcionesVisibles, setOpcionesVisibles] = useState(false);

    // 🚨 DATOS COMPLETOS DE TODOS LOS PROGRAMAS 🚨
    const programas = {
        "1 - Programación": [
            ["Unidad 1", "Introducción a JavaScript", "Variables, Tipos de datos, Operadores, Scope."],
            ["Unidad 2", "Estructuras de Control", "Condicionales (if/else), Bucles (for/while), Switch."],
            ["Unidad 3", "Funciones y Objetos", "Declaración, retorno, objetos literales, métodos."],
            ["Unidad 4", "DOM y Eventos", "Manipulación del DOM, Asignación y manejo de eventos."],
        ],
        "2 - Matemáticas": [
            ["Unidad 1", "Álgebra Lineal", "Vectores, Matrices y Determinantes, Sistemas de Ecuaciones."],
            ["Unidad 2", "Cálculo", "Límites, Continuidad, Derivadas e Integrales básicas."],
            ["Unidad 3", "Estadística", "Media, Mediana, Moda, Desviación estándar."],
        ],
        "3 - Base de Datos": [
            ["Unidad 1", "Modelo Relacional", "Conceptos de tablas, Claves Primarias y Foráneas."],
            ["Unidad 2", "SQL DDL", "Sentencias CREATE TABLE, ALTER TABLE, DROP TABLE."],
            ["Unidad 3", "SQL DML", "Sentencias SELECT, INSERT, UPDATE, DELETE, Joins."],
            ["Unidad 4", "Normalización", "Formas normales (1FN, 2FN, 3FN), BCNF."],
        ],
        "4 - Dibujo": [
            ["Unidad 1", "Elementos Básicos", "Línea, forma, color, textura, perspectiva a un punto."],
            ["Unidad 2", "Herramientas Digitales", "Introducción a software de diseño (ej. Illustrator, Inkscape)."],
            ["Unidad 3", "Composición", "Regla de tercios, equilibrio, contraste, diseño de bocetos."],
        ],
        "5 - Lengua": [
            ["Unidad 1", "Comunicación y Lenguaje", "Funciones del lenguaje, elementos de la comunicación."],
            ["Unidad 2", "Gramática y Ortografía", "Uso de tildes, signos de puntuación, concordancia verbal."],
            ["Unidad 3", "Tipos de Textos", "Textos expositivos, argumentativos, narrativos, cohesión."],
        ],
        "6 - Organización y Arquitectura": [
            ["Unidad 1", "Introducción", "Conceptos de hardware, software, y sistemas operativos."],
            ["Unidad 2", "Arquitectura de Computadoras", "Modelo Von Neumann, CPU, memoria (RAM/ROM)."],
            ["Unidad 3", "Sistemas de Numeración", "Binario, octal, hexadecimal, conversiones."],
            ["Unidad 4", "Dispositivos", "Periféricos de entrada/salida, almacenamiento."],
        ],
        "8 - Redes": [
            ["Unidad 1", "Modelos de Red", "Modelo OSI (Capas), Modelo TCP/IP, Protocolos básicos."],
            ["Unidad 2", "Direccionamiento IP", "IP v4, Clases, Máscaras de Subred, CIDR."],
            ["Unidad 3", "Dispositivos", "Routers, Switches, Hubs, Configuración básica."],
        ],
        "9 - Testing": [
            ["Unidad 1", "Conceptos Fundamentales", "Qué es testing, objetivos, principios, ciclo de vida."],
            ["Unidad 2", "Tipos de Pruebas", "Pruebas unitarias, de integración, de sistema, de aceptación."],
            ["Unidad 3", "Técnicas de Diseño", "Caja blanca, caja negra, partición de equivalencia."],
        ],
    };
    
    // Lista de materias (ahora se genera directamente del objeto programas, eliminando la duplicación)
    const materias = Object.keys(programas);


    const handleSelectMateria = (materia) => {
        setMateriaSeleccionada(materia);
        setOpcionesVisibles(false);
    };

    const handleToggleOpciones = () => {
        setOpcionesVisibles(!opcionesVisibles);
    };

    const handleAceptarYDescargar = () => {
        if (!materiaSeleccionada) {
            alert("Por favor, seleccione una materia antes de continuar.");
            return;
        }

        const doc = new jsPDF();
        const materia = materiaSeleccionada;
        // Ahora, como todas las materias están definidas, este fallback solo es de seguridad
        const programaData = programas[materia] || [
            ["Error", "Programa no disponible", "No se encontraron datos para esta materia. Comuníquese con la secretaría."]
        ];
        
        // Título del documento
        doc.setFontSize(18);
        doc.text(`Programa de la Materia: ${materia}`, 14, 22);

        // Generar la tabla con jspdf-autotable
        autoTable(doc, {
            head: [['Unidad', 'Tema Principal', 'Contenidos']],
            body: programaData,
            startY: 30,
            theme: 'striped',
            headStyles: { fillColor: [50, 100, 150] }, // Color azul oscuro para el encabezado
            styles: { fontSize: 10, cellPadding: 3 },
        });

        // Nombre del archivo y descarga
        doc.save(`Programa_${materia.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`);
    };

    return (
        <div className="programa-container">
            {/* INICIO DE programa-content: Contiene el selector y la lista */}
            <div className="programa-content">
                
                {/* --- Selector de Materia (Centrado) --- */}
                <div 
                    className={`materia-selector ${opcionesVisibles ? 'active' : ''}`}
                    onClick={handleToggleOpciones}
                >
                    <span className="selector-text">
                        {materiaSeleccionada ? materiaSeleccionada : "Seleccione materia"}
                    </span>
                    <span className="selector-icon"></span>
                </div>
                
                {/* --- Caja de Opciones de Materia (Solo visible si opcionesVisibles es true) --- */}
                {opcionesVisibles && (
                    <div className="opciones-box">
                        <ul className="opciones-list">
                            {materias.map((materia, index) => (
                                <li 
                                    key={index} 
                                    className={materia === materiaSeleccionada ? 'selected' : ''}
                                    onClick={() => handleSelectMateria(materia)}
                                >
                                    {materia}
                                    {materia === materiaSeleccionada && <span className="check-icon">✔️</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            
            {/* --- Botones Inferiores (ANCLADO CON CSS FIXED) --- */}
            <div className="botones-footer"> 
                <button 
                    className="btn-volver" 
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
                <button 
                    className="btn-aceptar" 
                    onClick={handleAceptarYDescargar}
                    disabled={!materiaSeleccionada}
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
}

export default Programa;