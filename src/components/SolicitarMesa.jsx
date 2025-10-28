import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import './SolicitarMesa.css';

function SolicitarMesa() { 

  const navigate = useNavigate();
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

      setTimeout(() => navigate('/servicios'), 1000);
    }, 2000);
  };

  const handleVolver = () => navigate(-1);

  const opcionesMateria = [
    "Seleccione materia",
    "1 - Programación", 
    "2 - Matemáticas", 
    "3 - Base de Datos", 
    "4 - Dibujo",
    "5 - Lengua",
  ];

  return (
    <div className='contenedorMayor'>
      <h1>Solicitud para mesa de examen</h1>

      <div className='fondo' style={{ padding: 20 }}>
        <div className='contenedor-mesa 'style={{ padding: 20, color: 'gray', display: 'inline-block', minWidth: 400 }}>
          
          <form className='solicitarMesa' onSubmit={handleSubmit}>

            {/* Nombre / Apellido */}
            <div style={{ display: 'flex', marginBottom: 15 }}>
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: 5 }} />
              </div>
              <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: 5 }} />
              </div>
            </div>

            {/* DNI / Curso */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
              <div>
                <label htmlFor="dni">DNI:</label>
                <input type="text" id="dni" name="dni" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: 5 }} />
              </div>
              <div>
                <label htmlFor="curso">Curso:</label>
                <input type="text" id="curso" name="curso" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: 5 }} />
              </div>
            </div>

            {/* Materia / Año */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
              <div className="campo-materia">
                <label htmlFor="materia">Materia:</label>
                <select id="materia" name="materia" required defaultValue="">
                  <option value="" disabled>Seleccione materia</option>
                  {opcionesMateria.slice(1).map((opcion, i) => (
                    <option key={i} value={opcion}>{opcion}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="anio">Año:</label>
                <input type="text" id="anio" name="anio" required style={{ border: 'none', borderBottom: '1px solid black', marginLeft: 5 }} />
              </div>
            </div>

            {/* Fecha */}
            <div className='campo-fecha' style={{ marginBottom: 25 }}>
              <label htmlFor="fecha">Fecha que desea:</label>
              <input type="date" id="fecha" name="fecha" required style={{ border: 'none', marginLeft: '2vh' }} />
            </div>

            {/* Botón Enviar */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
              <button type="submit" disabled={loading} style={{ padding: '8px 15px' }}>
                Solicitar Mesa
              </button>
            </div>

            {/* Loader y Mensaje */}
            <div style={{ marginTop: 10, textAlign: 'center' }}>
              {loading && <div className="spinner" aria-label="Cargando"></div>}
              {success && <div id="mensaje-exito" style={{ color: 'green', fontSize: '2vh' }}>¡Solicitud enviada con éxito!</div>}
            </div>

          </form>

          {/* Boton Volver */}
          <div className='botonVolver'>
            <button onClick={handleVolver} style={{ padding: '8px 15px' }}>Volver</button>
          </div>
          
        </div>
      </div>

      <p>Tenga en cuenta que si usted no es egresado, no tiene privilegio a esta opción.</p>
    </div>
  );
}

export default SolicitarMesa;
