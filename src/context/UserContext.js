import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebaseConfig';

const UserContext = createContext();

export const UserProvider = ({ children }) => { 
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); 
    });



    return () => unsubscribe();
  }, []);



  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  
  const logout = () => {
    return signOut(auth);
  };



  const value = {
    user,
    loading, 
    login,
    logout,
    isAuthenticated: !!user 
  };



  return (
    <UserContext.Provider value={value}>
      {children} 
    </UserContext.Provider>
  );
};



export const useUser = () => useContext(UserContext);
