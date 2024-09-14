import { Link, useNavigate } from "react-router-dom"

const UseNavigate = () => {
    const navigate = useNavigate();
  return (
    <>
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                    useNavigate
                </li>
            </ol>
        </nav>

        <h1>UseNavigate</h1>
        <button className="btn btn-success" onClick={()=>{navigate("/sobre-nosotros")}} >Ir a Sobre Nosotros</button>
        <hr />
        <button className="btn btn-success" onClick={()=>{navigate(-1)}}>Ir atrás</button>
    </>
  )
}

export default UseNavigate