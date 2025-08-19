import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aca puedo validar, guardar o enviar datos a una API si quiero.
    navigate("/registro-exitoso", { state: { nombre } });
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
     
      <TextField label="Apellido" required sx={{ width: 300 }} />
    </Box>

    {/* dni y curso */}
    <Box sx={{ display: 'flex', gap: 6 }}>
      <TextField
        label="DNI"
        required
        sx={{ width: 300 }}
        type="text"
        inputMode="numeric"
        inputProps={{
          pattern: '[0-9]*',
          maxLength: 8,
        }}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }}
      />

      <TextField
        select
        label="Curso"
        required
        sx={{ width: 300 }}
        defaultValue=""
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
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*',
          maxLength: 10,
        }}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }}
      />

      <TextField
        label="Materias a rendir"
        required
        inputProps={{ maxLength: 1 }}
        placeholder="min: 1 & max: 5"
        sx={{ width: 300 }}
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