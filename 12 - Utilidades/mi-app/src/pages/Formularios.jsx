import { Link } from "react-router-dom"

const Formularios = () => {
  return (
    <>
    <h1>Formularios</h1>
    <ul>
        <li>
            <Link to="/formularios/formulario-simple">Formulario Simple</Link>
        </li>
        <li>
            <Link to="/formularios/formulario-use-action-data">Formulario UseActionData</Link>
        </li>
        <li>
            <Link to="/formularios/formulario-formik">Formulario Formik</Link>
        </li>
        <li>
            <Link to="/formularios/formulario-reacthookform">Formulario ReactHookForm</Link>
        </li> 
    </ul>
    </>
  )
}

export default Formularios