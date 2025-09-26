import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registro from "./components/Registro";
import RegistroExitoso from "./components/RegistroExitoso";
import Servicios from "./components/Servicios";
<<<<<<< HEAD
import MesaExamen from "./components/MesaExamen";
import Alumno from "./components/Alumno";
=======
import UseMesaExamen from "./components/UseMesaExamen";
import AltaMesaExamen from "./components/AltaMesaExamen";
import Detalle from "./components/Detalle"
import RutaPrivada from "./components/RutaPrivada";
>>>>>>> 951a220f91dec61134e9b2270187e89130f1dada

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/registro" element={<Registro />} />
        <Route path="/registro-exitoso" element={<RegistroExitoso />} />
        <Route path="/mesa-examen" element={<MesaExamen/>} />
         <Route path="/alumno" element={<Alumno/>} />
=======
        {/* { <Route path="/registro" element={<Registro />} /> } redirección libre */}
        {/* <Route path="/registro-exitoso" element={<RegistroExitoso />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/mesa-examen" element={<UseMesaExamen />} />
        <Route path="/alta-mesa" element={<AltaMesaExamen />} />
        <Route path="/producto/:id" element={<Detalle />} /> */}

        {/* redireccion bloqueada */}
        
        <Route path="/servicios" element={<RutaPrivada><Servicios /></RutaPrivada>}/> 
        <Route path="/mesa-examen" element={<RutaPrivada><UseMesaExamen /></RutaPrivada>} />
        <Route path="/alta-mesa" element={<RutaPrivada><AltaMesaExamen /></RutaPrivada>}/>
        <Route path="/producto/:id" element={<RutaPrivada><Detalle /></RutaPrivada>} />
        <Route path="/registro" element={<RutaPrivada><Registro /></RutaPrivada>} />
        <Route path="/registro-exitoso" element={<RutaPrivada><RegistroExitoso /></RutaPrivada>}/>


>>>>>>> 951a220f91dec61134e9b2270187e89130f1dada
      </Routes>
    </BrowserRouter>
  );
}

export default App;