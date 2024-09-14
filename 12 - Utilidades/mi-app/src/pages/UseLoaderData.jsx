import {Link, useLoaderData} from 'react-router-dom'
import { paises } from '../datos/datos'

export function loader(){
    //const countrys = paises;
    const countrys = paises.sort().reverse();
    return countrys;
}

const UseLoaderData = () => {
    const countrys = useLoaderData();

  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to="/hooks">Hooks</Link>
            </li>
            <li className='breadcrumb-item active' aria-current="page">
                useLoaderData
            </li>
        </ol>
    </nav>
    <h1>UseLoaderData</h1>
    <hr />
    <ul>
        {countrys.map((pais)=>(
            <li key={pais.id}>
                {pais.nombre} ({pais.dominio})
            </li>
        ))}
    </ul>
    </>
  )
}

export default UseLoaderData