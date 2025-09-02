// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase (tuya)
const firebaseConfig = {
  apiKey: "AIzaSyB-Bh_5dRsLwKmtGA3TsijXA21LpqxTUtM",
  authDomain: "inscripcion-materias.firebaseapp.com",
  projectId: "inscripcion-materias",
  storageBucket: "inscripcion-materias.firebasestorage.app",
  messagingSenderId: "1081662847519",
  appId: "1:1081662847519:web:a4ba6655ad0af6e232b32a",
  measurementId: "G-3K1GGG3MJ0"
};

//inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Inicializar servicios de autenticación
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//exportar para usar en otros archivos (como el login)
export { auth, provider };