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

  return (
    <>
    
    </>
  );
}

export default MiPerfil;
