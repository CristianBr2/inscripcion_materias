import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebaseConfig'; 
import { doc, setDoc } from "firebase/firestore";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography, GlobalStyles } from '@mui/material';

//import './Registro.css';

const cursos = ['1° 1', '1° 2', '1° 3', '1° 4', 
                '2° 1', '2° 2', '2° 3', '2° 4'];


function Registro() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [curso, setCurso] = useState('');
  const [telefono, setTelefono] = useState('');
  const [materias, setMaterias] = useState('');
  

  const handleSubmit = async (e) => {

    e.preventDefault();

    const user = auth.currentUser;

    if (!user) {
      alert("Debes iniciar sesión primero");
      navigate("/login");
      return;
    }

    if (dni.length!==8){
      alert('El DNI debe ser de 8 dígitos.')
      return
    }

    if (telefono.length!==10){
      alert('El telefono debe ser de 10 dígitos.')
      return
    }

    const materiasNum = Number(materias);
    if (!materiasNum || materiasNum < 1 || materiasNum > 5) {
    alert("Materias debe ser un número entre 1 y 5.");
    return;
  } 

    try {
      
      const docRef = await addDoc(collection(db, "Usuario_Nuevo"), {
        uid:user.uid,
        nombre,
        apellido,
        dni,
        curso,
        telefono,
        materias:materiasNum,
        registrado:true,
      });

      console.log("Usuario nuevo, agregado con ID:", docRef.id);

      setNombre('');
      setApellido('');
      setCurso('');
      setDni('');
      setTelefono('');
      setMaterias('');

      alert("Usuario nuevo agregado correctamente ✅");

      // Aca puedo validar, guardar o enviar datos a una API si quiero.
    navigate("/registro-exitoso", { state: { nombre } });

    } catch (error) {
      console.error("Error al agregar usuario:", error);
    }
  };

  return (
    <>
{/*
       <div className="Mayor">
        <div className="Medio">
          <h1>Registro</h1>
          <form onSubmit={handleSubmit}>
            <label>Apellido:</label>
            <input type="text" required />

           <label>Nombre:</label>
            <input
            type="text"
            required
            onChange={(e) => setNombre(e.target.value)}
          />

            <label>DNI:</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="\d{8}"
              maxLength="8"
              placeholder="DNI (8 dígitos)"
              required
            />

            <label>Curso:</label>
            <input type="number" required />

            <label>Teléfono:</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              placeholder="Ej: 2991234567"
              required
            />

            <label>Materias a rendir:</label>
            <input type="text" required />

            <label>¿Es la última materia de la secundaria?</label>
            <select required>
              <option value="">Seleccione una opción</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>

             <Button variant="contained" color="primary">Enviar</Button>
          </form>
          </div>
          </div>
. */}
 <Box
  sx={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, #4fc3f7 0%, #b3e5fc 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  }}
>
  <Typography
    variant="h2"
    sx={{
      fontFamily: "'Arial Black', Gadget, sans-serif",
      textAlign: 'center',
      marginBottom: 4,
      color: 'white',
      marginTop: 9,
    }}
  >
    Registro
  </Typography>

  <Box
    component="form"onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      marginTop: 6,
    }}
  >

    {/* nombre y Apellid */}
    <Box sx={{ display: 'flex', gap: 6 }}>
      <TextField 
      label="Nombre" 
      required 
      sx={{ width: 300 }} 
      onChange={(e) => setNombre(e.target.value)} 
      />
     
      <TextField 
      label="Apellido" 
      required sx={{ width: 300 }}
      onChange={(e) => setApellido(e.target.value)}
     />
    </Box>

    {/* dni y curso */}
    <Box sx={{ display: 'flex', gap: 6 }}>
      <TextField
        label="DNI"
        required
        sx={{ width: 300 }}
        type="text"
        value={dni}
        inputMode="numeric"
        inputProps={{
          pattern: '[0-9]*',
          maxLength: 8,
        }}
        onInput={(e) => {
           const valor = e.target.value.replace(/[^0-9]/g, ''); 
          setDni(valor);
        }}
      />

      <TextField
        select
        label="Curso"
        required
        sx={{ width: 300 }}
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
      >
        {cursos.map((curso, index) => (
          <MenuItem key={index} value={curso}>
            {curso}
          </MenuItem>
        ))}
      </TextField>
    </Box>

    {/* Teléfono y materias */}
    <Box sx={{ display: 'flex', gap: 6 }}>
      <TextField
        label="Teléfono"
        required
        sx={{ width: 300 }}
        type="text"
        value={telefono}
        inputProps={{
          pattern: '[0-9]*',
          maxLength: 10,
        }}
        onInput={(e) => 
          setTelefono(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))
        }

      />

      <TextField
        label="Materias a rendir"
        required
        inputProps={{ maxLength: 1 }}
        placeholder="min: 1 & max: 5"
        sx={{ width: 300 }}
        value={materias}
        onChange={(e) => setMaterias(e.target.value)}
      />
    </Box>

    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{ marginTop: 4 }}
    >
      Enviar
    </Button>
  </Box>
</Box>

 </>
  );
}

export default Registro;