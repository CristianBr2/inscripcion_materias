import React from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getRolUsuario=async(uid)=>{
    const docRef= doc(db,"Usuario_Nuevo", uid);
    const docSnap=await getDoc(docRef);
    if (docSnap.exists()) {
    return docSnap.data().rol || "usuario";
    } else {
        return "usuario";
    }
}