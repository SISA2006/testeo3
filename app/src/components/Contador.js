import { useState } from "react"
import  '../styles/Contador.css'


const Contador = () => {

    const [cont, setContar] = useState(0);

    // Función para sumar

    const manejarSuma = () => {
        setContar(cont + 1);
    }

    // Función para restar

    const manejarResta = () => {
        setContar(cont - 1);
    }

    return (
        <div className="containerC">
            <p className='titleC'>Contador de numeros</p>

            <p className='subtitleC'>Numero actual: {cont}</p>
            <button className='pressM' onClick={manejarResta}>-</button>
            <button className='pressP' onClick={manejarSuma}>+</button>
        </div>
    )

}



export default Contador;