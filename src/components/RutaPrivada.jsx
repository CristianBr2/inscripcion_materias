import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { getUserRole } from "../utils/getUserRole";

function PrivateRoute({ children, requiredRole }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const rol = await getUserRole(user.uid);
        setRole(rol);
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  
  if (loading) return <p>Cargando...</p>;

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/no-autorizado" replace />; 
  }

  return children;
}

export default RutaPrivada;