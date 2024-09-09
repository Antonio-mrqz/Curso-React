import {Link} from "react-router-dom"

const FormularioSimple = () => {
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
    </>
  )
}

export default FormularioSimple