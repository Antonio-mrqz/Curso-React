import React from 'react'
import { Link } from 'react-router-dom'

const EventoClick = () => {

    const handlePresioname = () => {
        alert("Hola que tal")
    }
    const presionameConParametro = (nombre) => {
        console.log("Tu nombre es: "+nombre);
    }

  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className='breadcrumb-item active' aria-current="page">
                Evento Click
            </li>
        </ol>
    </nav>

    <hr />

    <h1>Evento Click</h1>

    <button className='btn btn-primary' onClick={handlePresioname}>Click</button>
    <hr />
    <button className='btn btn-danger' onClick={()=>{handlePresioname()}}>Click funcion flecha</button>
    <hr />
    <button className='btn btn-warning' onClick={()=>{presionameConParametro("Antonio")}}>Click funcion flecha con parametro</button>

    </>
  )
}

export default EventoClick