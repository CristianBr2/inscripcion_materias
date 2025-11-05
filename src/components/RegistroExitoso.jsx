import { useLocation } from "react-router-dom";

import { Box, Typography, GlobalStyles } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function RegistroExitoso() {
  const navigate = useNavigate();

  const location = useLocation();
  const nombre = location.state?.nombre || "usuario";
    return (
    <>

    <Box sx={{
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

    <Box>
      <Typography
        variant="h1"
        align="center"
        sx={{
          fontFamily: 'Liberation Serif, serif',
          marginTop: 9,
          marginBottom: 8,
          color: 'black',
          fontWeight: 'bold',
          animation: 'fadeUp 1.2s ease-out forwards',
          opacity: 0,
          transform: 'translateY(30px)',
          '@keyframes fadeUp': {
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        🎉 ¡Registro Exitoso! 
      </Typography>

    
    <Typography
        variant="h3"
        align="center"
        sx={{
           fontFamily: "'Times New Roman', serif",
          marginTop: 9,
          marginBottom: 7,
          color: 'black',
          fontWeight: 'bold',
          animation: 'fadeUp 1.2s ease-out forwards',
          opacity: 0,
          transform: 'translateY(30px)',
          '@keyframes fadeUp': {
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
       Bienvenido {nombre}
      </Typography>
     
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 9 }}>
      <Button onClick={() => navigate("/Servicios")}
        type="submit"
        variant="contained"
        color="primary"
      sx={{
          marginTop: 9,
          marginBottom: 8,
          color: 'white',
          fontWeight: 'bold',
          animation: 'fadeUp 1.2s ease-out forwards',
          opacity: 0,
          transform: 'translateY(30px)',
          '@keyframes fadeUp': {
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          }
        }}>
          
        Siguiente
      </Button>
    </Box>


    </Box>

  </Box>  
    
    </>
  );
}

export default RegistroExitoso;