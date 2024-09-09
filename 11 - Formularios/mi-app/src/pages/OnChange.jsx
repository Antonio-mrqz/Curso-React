import { useState } from 'react'
import {Link} from 'react-router-dom'

const OnChange = () => {
  const [nombre, setNombre] = useState("");
  const handleFormulario = ()=>{
    console.log(nombre)
  }
  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className='breadcrumb-item active' aria-current="page">
                OnChange
            </li>
        </ol>
    </nav>

    <h1>OnChange</h1>

    <p>
      <input type="text" value={nombre}  onChange={(e)=>{setNombre(e.target.value)}}  className='form-control' placeholder='Nombre'/>
    </p>
    <button className='btn btn-warning' onClick={handleFormulario}>Enviar</button>
    </>
  )
}

export default OnChange