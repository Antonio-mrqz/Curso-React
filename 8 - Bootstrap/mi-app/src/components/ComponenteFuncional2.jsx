import React from 'react'
import Pais from './Pais'
import Estudiante from './Estudiante'

const ComponenteFuncional2 = ({prop1, nombre, paises, estudiantes}) => {

  return (
    <>
    <h3>Contenido desde el componente 2</h3>
    <ul>
        <li>Prop1: {prop1}</li>
        <li>Nombre: {nombre}</li>
        <li>
            <ul>
                {paises.map((pais)=>(
                    <li key={pais.dominio}>{pais.nombre}</li>
                ))}
            </ul>
        </li>
    </ul>

    <hr />

    <table>
        <thead>
                <tr>
                    <th>ID</th>
                    <th>Dominio</th>
                    <th>Nombre</th>
                </tr>
        </thead>
        <tbody>
            {paises.map((pais)=>(
                <>
                {pais.peninsula && (
                    <Pais key={pais.id} pais={pais}/>
                )}
                </>
            ))}
        </tbody>
    </table>

    <hr />

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
            </tr>
        </thead>
        <tbody>
            {estudiantes.map((estudiante)=>(
                <Estudiante key={estudiante.id} estudiante={estudiante}/>
            ))}
        </tbody>
    </table>

    </> 
  )
}

export default ComponenteFuncional2