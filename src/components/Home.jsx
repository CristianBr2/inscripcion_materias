// src/components/Home.jsx
import Login from './Login';
import './Home.css';
function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="left-content">
          <img
            className="main-image"
            src="/img/laptop-cartoon-2-vector.png"
            alt="Inscripción a materias"
          />
        </div>
        <div className="right-content">
          <h1 className="main-title">
            Inscripción<br />
            a Materias
          </h1>
        </div>
      </div>
      <h2 className="school-name">E.P.E.T N° 20 - NEUQUÉN CAPITAL</h2>
      <div className="carousel-container">
        <button className="arrow left-arrow">&lt;</button>
        <img
          src="/img/img.png"
          alt="Epet"
          className="school-image"
        />
        <button className="arrow right-arrow">&gt;</button>
      </div>
      <h2 className="section-title">Nuestros servicios</h2>
      <p className="service-intro">Esto es un bloque en el cual nos fundamentamos en la ayuda a nuestros alumnos...</p>
      <div className="service-details">
        <p className="service-summary">Diseñado para facilitar el proceso de inscripción a materias...</p>
        <p className="service-description">
          Diseñado para facilitar el proceso de inscripción a materias de forma rápida, segura y eficiente. Está pensada para estudiantes que necesitan organizar su horario académico y seleccionar las asignaturas adeudan de años pasados u previos. A través de una interfaz intuitiva, los usuarios pueden:
        </p>
        <ul className="service-list">
          <li>Realizar la inscripción a materias en tiempo real, evitando errores o duplicaciones.</li>
          <li>También permite seleccionar los programas de las materias adeudadas.</li>
          <li>Los estudiantes egresados pueden pedir mesas para rendir cada un (1) mes en la fecha que ellos prefieran.</li>
        </ul>
        <Login/>
      </div>
      </div>    
    );
  }

export default Home;