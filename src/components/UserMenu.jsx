import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import './Gracias.css';

export default function UserMenu() {
  const navigate = useNavigate();
  const { logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInicio = () => navigate('/servicios');

  const handleMiPerfil = () => navigate('/miperfil');

  const handleLogout = async () => {
    try {
      await logout();
      navigate('');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="dropdown-menu-container">
      <span className="user-icon" onClick={toggleMenu}>👤</span>
      {isMenuOpen && (
        <div className="dropdown-content">
          <button onClick={handleInicio} className="btn-menu">Inicio</button>
          <button onClick={handleMiPerfil} className="btn-menu">Mi perfil</button>
          <button onClick={handleLogout} className="btn-menu">Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
}
