import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registro from "./components/Registro";
import RegistroExitoso from "./components/RegistroExitoso";
import Servicios from "./components/Servicios";
import Alumno from "./components/Alumno";
import UseMesaExamen from "./components/UseMesaExamen";
import AltaMesaExamen from "./components/AltaMesaExamen";
import Detalle from "./components/Detalle";
import RutaPrivada from "./components/RutaPrivada";
import Programa from "./components/Programa";
import Horario from "./components/Horario";
import SolicitarMesa from "./components/SolicitarMesa";
import CargaCorrecta from "./components/CargaCorrecta";
import InscripcionMateria from "./components/InscripcionMateria"; 
import InscriptoCorrectamente from "./components/InscriptoCorrectamente";
import Contacto from "./components/Contacto"; 
import Gracias from "./components/Gracias"; 
import { UserProvider } from './context/UserContext.js';
import MiPerfil from "./components/MiPerfil.jsx";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* rutas usuario normal (y admin tbm) */}
          <Route path="/alumno" element={<RutaPrivada requiredRole="usuario"><Alumno/></RutaPrivada>} />
          <Route path="/servicios" element={<RutaPrivada requiredRole="usuario"><Servicios /></RutaPrivada>} />
          <Route path="/registro" element={<RutaPrivada requiredRole="usuario"><Registro /></RutaPrivada>} />
          <Route path="/registro-exitoso" element={<RutaPrivada requiredRole="usuario"><RegistroExitoso /></RutaPrivada>} />
          <Route path="/programa" element={<RutaPrivada requiredRole="usuario"><Programa /></RutaPrivada>} />
          <Route path="/horario" element={<RutaPrivada requiredRole="usuario"><Horario /></RutaPrivada>} />
          <Route path="/solicitarmesa" element={<RutaPrivada requiredRole="usuario"><SolicitarMesa /></RutaPrivada>} />
          <Route path="/cargacorrecta" element={<RutaPrivada requiredRole="usuario"><CargaCorrecta /></RutaPrivada>} />
          <Route path="/InscripcionMateria" element={<RutaPrivada requiredRole="usuario"><InscripcionMateria /></RutaPrivada>} />
          <Route path="/InscriptoCorrectamente" element={<RutaPrivada requiredRole="usuario"><InscriptoCorrectamente /></RutaPrivada>} />
          <Route path="/Contacto" element={<RutaPrivada requiredRole="usuario"><Contacto /></RutaPrivada>} />
          <Route path="/Gracias" element={<RutaPrivada requiredRole="usuario"><Gracias /></RutaPrivada>} />
                    <Route path="/MiPerfil" element={<RutaPrivada requiredRole="usuario"><MiPerfil /></RutaPrivada>} />

          
          <Route path="/mesa-examen" element={<RutaPrivada requiredRole="usuario"><UseMesaExamen /></RutaPrivada>} />
          <Route path="/producto/:id" element={<RutaPrivada requiredRole="usuario"><Detalle /></RutaPrivada>} />
          <Route path="/producto" element={<RutaPrivada requiredRole="usuario"><Detalle /></RutaPrivada>} />


          {/* Rutas para admin */}
          <Route path="/alta-mesa" element={<RutaPrivada requiredRole="admin"><AltaMesaExamen /></RutaPrivada>} />
          
          


        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
