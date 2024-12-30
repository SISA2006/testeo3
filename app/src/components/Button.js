import React, { useState } from 'react';
import  '../styles/Button.css'

//hacer un selector de urgencia con opciones desplegables y para ingresar solicitud que luego sea enviado a un sitio especifico

const Button = () => {

    const [depart, setDepartamento] = useState(null);
    const [urgencia, setUrgencia] = useState('');
    const [solicitud, setSolicitud] = useState('');

    const handleClick = () => {
        alert('Accion confirmada');
    }

//objeto con la información a enviar

        const data = {
            depart,
            urgencia,
            solicitud,
        };

    return (
        <div className='form-container'>
            <p className='form-title'>Formulario de solicitudes</p>
            <form className='form' onSubmit={handleClick}> 

                <p className='form-subtitle'>Departamento: {depart}//enves de edad poner algo para que salga el departamento desde el que se ingresa</p>
                <label htmlFor="urgencia" className='form-subtitle'>Grado de urgencia</label>
                <select id="urgencia"
                value={urgencia} 
                onChange={(e) => setUrgencia(e.target.value)} 
                required>

                    <option value="">Seleccione urgencia</option>

                    <option value="bajo">Bajo</option>

                    <option value="medio">Medio</option>

                    <option value="alto">Alto</option>

                    <option value="urgente">Urgente</option>

                </select>

                <p className='form-subtitle'>Detalles de solicitud</p>

                <label htmlFor="solicitud" className='form-subtitle'>Solicitud</label>

                <textarea 
                    id="solicitud"
                    value={solicitud} 
                    onChange={(e) => setSolicitud(e.target.value)}  
                    required 
                    
                    rows="10" 
                    maxLength={5000} 
                ></textarea>

                <button className='press' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Button;