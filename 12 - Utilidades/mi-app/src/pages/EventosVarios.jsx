import {Link} from 'react-router-dom'

const EventosVarios = () => {
    const mover = ()=>{
        console.log("Se movio")
    }
    const salir = ()=>{
        console.log("Salimos")
    }
  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className='breadcrumb-item active' aria-current="page">
                Eventos Varios
            </li>
        </ol>
    </nav>

    <h1>Eventos Varios</h1>
    <img src="/images/logo.png" width="25%" onMouseMove={mover} onMouseOut={salir}/>
    <hr />
    </>
  )
}

export default EventosVarios