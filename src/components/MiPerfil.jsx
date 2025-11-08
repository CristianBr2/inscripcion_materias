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
  

  return (
    <>
    
    </>
  );
}

export default MiPerfil;
