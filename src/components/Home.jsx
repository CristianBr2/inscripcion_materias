// src/components/Home.jsx
import Login from "./Login";
function Home() {
  return (
    <div>
      <h1>Incripción a Materias</h1>
      <img
        src="https://static.vecteezy.com/system/resources/previews/011/157/541/non_2x/computer-dekstop-monitor-cartoon-icon-illustration-technology-object-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
        alt="Incripcion a materias"
        width="200"
      />
      <h2>E.P.E.T N° 20 - NEUQUÉN CAPITAL</h2>
      <h2>Nuestros servicios</h2>
      <p>Esto es un bloque en el cual nos fundamentamos en la ayuda a nuestros alumnos...</p>
      <p>Diseñado para facilitar el proceso de inscripción a materias...</p>
      <p>Diseñado para facilitar el proceso de inscripción a materias de forma rápida, segura y eficiente. Está pensada para estudiantes que necesitan organizar su horario académico y seleccionar las asignaturas adeudan de años pasados u previos.
A través de una interfaz intuitiva, los usuarios pueden:
Realizar la inscripción a materias en tiempo real, evitando errores o duplicaciones.
También permite seleccionar los programas de las materias adeudadas.
Los estudiantes egresados pueden pedir mesas para rendir cada un (1) mes en la fecha que ellos prefieran.</p>
     <Login/>
    </div>
  );
}

export default Home;