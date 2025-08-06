import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registro from "./components/Registro";
import RegistroExitoso from "./components/RegistroExitoso";
import Servicios from "./components/Servicios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registro-exitoso" element={<RegistroExitoso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;