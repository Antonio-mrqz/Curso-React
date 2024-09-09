import { Link } from "react-router-dom"

const Formularios = () => {
  return (
    <>
    <h1>Formularios</h1>
    <ul>
        <li>
            <Link to="/formularios/formulario-simple">Formulario Simple</Link>
        </li>   
    </ul>
    </>
  )
}

export default Formularios