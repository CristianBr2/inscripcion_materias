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
import { UserProvider } from './context/UserContext.js';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/registro" element={<Registro />} /> */}
        {/* <Route path="/registro-exitoso" element={<RegistroExitoso />} /> */}
        {/* <Route path="/mesa-examen" element={<MesaExamen/>} /> */}
         {/* <Route path="/alumno" element={<Alumno/>} /> */}
        {/* { <Route path="/registro" element={<Registro />} /> } redirección libre */}
        {/* <Route path="/registro-exitoso" element={<RegistroExitoso />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/mesa-examen" element={<UseMesaExamen />} />
        <Route path="/alta-mesa" element={<AltaMesaExamen />} />
        <Route path="/producto/:id" element={<Detalle />} /> */}

        {/* redireccion bloqueada */}
        <Route path="/alumno" element={<RutaPrivada><Alumno/></RutaPrivada>} />
        <Route path="/servicios" element={<RutaPrivada><Servicios /></RutaPrivada>}/> 
        <Route path="/mesa-examen" element={<RutaPrivada><UseMesaExamen /></RutaPrivada>} />
        <Route path="/alta-mesa" element={<RutaPrivada><AltaMesaExamen /></RutaPrivada>}/>
        <Route path="/producto/:id" element={<RutaPrivada><Detalle /></RutaPrivada>} />
        <Route path="/registro" element={<RutaPrivada><Registro /></RutaPrivada>} />
        <Route path="/registro-exitoso" element={<RutaPrivada><RegistroExitoso /></RutaPrivada>}/>
        <Route path="/programa" element={<RutaPrivada><Programa /></RutaPrivada>} />
        <Route path="/horario" element={<RutaPrivada><Horario /></RutaPrivada>} />
        <Route path="/solicitarmesa" element={<RutaPrivada><SolicitarMesa /></RutaPrivada>} />
        <Route path="/cargacorrecta" element={<RutaPrivada><CargaCorrecta /></RutaPrivada>} />
        <Route path="/InscripcionMateria" element={<RutaPrivada><InscripcionMateria /></RutaPrivada>} />
        <Route path="/InscriptoCorrectamente" element={<RutaPrivada><InscriptoCorrectamente /></RutaPrivada>} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;