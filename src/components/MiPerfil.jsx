import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { updateEmail, signOut } from "firebase/auth";
import UserMenu from "./UserMenu";
import "./MiPerfil.css";

function MiPerfil() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    correo: "",
    curso: "",
    telefono: "",
    activo: true
  });
  const handleVolver = () => { navigate(-1); };

  //cargar datos perfil
  useEffect(() => {
    if (user) {
      const fetchPerfil = async () => {
        const ref = doc(db, "alumno", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setFormData(snap.data());
        } else {
          // si no existe el doc crear uno
          await setDoc(ref, {
            ...formData,
            correo: user.email,
            activo: true,
          });
        }
      };
      fetchPerfil();
    }
  }, [user]);

  // manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // guardar el perfil en firebas
  const handleGuardar = async () => {
    if (!user) return;

    if (formData.dni.length !== 8) {
      return alert("El DNI debe tener 8 dígitos");
    }

    if (formData.telefono.length !== 10) {
      return alert("El teléfono debe tener 10 dígitos");
    }

    try{
      // si cambio el correo, actualizarlo tmb en auth
      if (formData.correo !== user.email) {
        await updateEmail(user, formData.correo);
      }

      const ref = doc(db, "alumno", user.uid);
      //  setDoc con merge:true para evitar errores si el doc no existe tva
      await setDoc(ref, { ...formData, activo: true }, { merge: true });
      alert("Perfil actualizado correctamente ");
    }
    catch (error) {
      console.error("Error al guardar perfil:", error);
      alert("Error al guardar: " + error.message);
    }
  };

  // cuenta inactiva seria como eliminada
  const handleEliminar = async () => {
    if (!user) return;  

    try {
      const ref = doc(db, "alumno", user.uid);
      await updateDoc(ref, { activo: false });

      alert("Cuenta marcada como inactiva (no eliminada)");
      await signOut(auth);
      navigate("/login");
    }
    catch (error) {
      console.error("Error al marcar cuenta inactiva:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <>
    <div className="contenedorPerfil">
      <UserMenu />
      <h1>Mi perfil</h1>

      {formData.activo === false && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Tu cuenta está inactiva
        </p>
      )}

      <div className="tablaPerfil">
        <label>Nombre:</label>
  <input
    type="text"
    name="nombre"
    value={formData.nombre}
    onChange={handleChange}
    placeholder="Ingresa tu nombre"
  />

  <label>Apellido:</label>
  <input
    type="text"
    name="apellido"
    value={formData.apellido}
    onChange={handleChange}
    placeholder="Ingresa tu apellido"
  />

  <label>DNI:</label>
    <input
      type="text"
      name="dni"
      value={formData.dni}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 8);
        setFormData({ ...formData, dni: value });
      }}
      placeholder="Ingresa tu DNI"
    />

  <label>Correo:</label>
    <input
      type="email"
      name="correo"
      value={formData.correo}
      onChange={handleChange}
      placeholder="Ingresa tu correo"
    />

  <label>Curso:</label>
    <input
      type="text"
      name="curso"
      value={formData.curso}
      onChange={handleChange}
      placeholder="Ingresa tu curso"
    />

  <label>Teléfono:</label>
    <input
      type="text"
      name="telefono"
      value={formData.telefono}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
        setFormData({ ...formData, telefono: value });
      }}
      placeholder="Ingresa tu teléfono"
    />
      </div>
    </div>
    </>
  );
}

export default MiPerfil;
