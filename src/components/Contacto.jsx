import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contacto.css';
import UserMenu from "./UserMenu";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

function Contacto() {

    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleVolver = () => navigate(-1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess(false);
        setLoading(true);

        const formData = {
        correo: e.target.correo.value,
        mensaje: e.target.problema.value,
        usuarioId: auth.currentUser?.uid || null,
        timestamp: new Date()
      };
      try{
          await addDoc(collection(db, "Mensaje"), formData);
      
          setLoading(false);
          setSuccess(true);
          e.target.reset();
      
          setTimeout(() => navigate('/servicios'), 1000);
        } catch (error) {
          console.error("Error al enviar la solicitud:", error);
          setLoading(false);
          alert("Hubo un error al enviar la solicitud. Intente de nuevo.");
        }
    const handleVolver = () => navigate(-1);

};
    return (
        <>
        <div className="contacto-container">
            <h1>Contacto</h1>
            <UserMenu />
            <div className="contacto-box"> 
                <div className='fondo-contacto'>
                <form className='formulario-contacto' onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" id="correo" value={correo} name="correo"  onChange={(e) => setCorreo(e.target.value)} required style={{borderBottom: '1px solid black'}} />
                    </div>
                    
                    <div className="form-field">
                        <label htmlFor="problema">Comentanos tu problema:</label>
                        <textarea 
                            id="problema" 
                            name="problema" 
                            rows="5" 
                            placeholder="Tu texto aquí..." 
                            required
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)} 
                        ></textarea>
                    </div>
                    
                    <div style={{ marginTop: 10, textAlign: 'center' }}>
                    {loading && <div className="spinner" aria-label="Cargando"></div>}
                    {success && <div id="mensaje-exito" style={{ color: 'green', fontSize: '2vh' }}>¡Mensaje enviado con éxito!</div>}
                    </div>

                    <button type="submit" className="btn-enviar">
                        Enviar
                    </button>

                </form>

                <div className='botonVolver'>
                    <button onClick={handleVolver} style={{ padding: '8px 15px' }}>Volver</button>
                 </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Contacto;