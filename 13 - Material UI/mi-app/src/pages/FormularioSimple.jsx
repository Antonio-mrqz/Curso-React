import {Link} from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"

const FormularioSimple = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [edad, setEdad] = useState(0);
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("El nombre es: " + nombre +" "+ apellidos + " y tiene " + edad + " años.")
  }
  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to="/formularios">Formularios</Link>
            </li>
            <li className='breadcrumb-item active' aria-current="page">
                Formulario Simple
            </li>
        </ol>
    </nav>

    <h1>Formulario Simple</h1>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
      
        <label htmlFor="apellidos">Apellidos</label>
        <input type="text" className="form-control" id="apellidos" value={apellidos} onChange={(e)=>{setApellidos(e.target.value)}}/>
      
        <label htmlFor="edad">Edad</label>
        <input type="number" className="form-control" id="edad" value={edad} onChange={(e)=>{setEdad(e.target.value)}}/>
      </div>
      <hr />
      <button className="btn btn-warning">Enviar</button>
    </form>
    </>
  )
}

export default FormularioSimple