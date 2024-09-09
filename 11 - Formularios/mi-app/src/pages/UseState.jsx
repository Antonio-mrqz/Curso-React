import {useState} from 'react'
import { Link } from 'react-router-dom'

const UseState = () => {
    const [contador, setContador] = useState(0);
    const handleIncrementar =() =>{
        setContador(contador+1);
    }
    const handleDisminuir =() =>{
        {contador>0 && (setContador(contador-1))}
    }
  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className='breadcrumb-item active' aria-current="page">
                UseState
            </li>
        </ol>
    </nav>

    <hr />
    <h1>UseState</h1>
    <button className='btn btn-info' onClick={handleIncrementar}>Incrementar</button>
    <button className='btn btn-danger' onClick={handleDisminuir}>Disminuir</button>
    <hr />
    <p>Contador: {contador}</p>
    </>
  )
}

export default UseState