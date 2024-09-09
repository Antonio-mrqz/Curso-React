import { Link } from "react-router-dom"
import { useRef, useState } from "react"

const UseRef = () => {
    const [texto, setTexto]= useState("");
    const inputRef = useRef();
    const colorRef = useRef(null);
    const imprimirValor = ()=>{
        setTexto(inputRef.current.value);
    }
    const cambiaColor = ()=>{
        colorRef.current.className = "clase_azul"
    }
  return (
    <>
    <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                    useRef
                </li>
            </ol>
    </nav>
    <h1>UseRef</h1>
    <input type="text" className="form-control" ref={inputRef}/>
    <hr />
    <button className="btn btn-primary" onClick={imprimirValor}>Mostrar</button>
    <hr />
    <div className="clase_roja" ref={colorRef}>
        {texto}
    </div>
    <hr />
    <button className="btn btn-primary" onClick={cambiaColor}>Cambiar color</button>
    
    </>
  )
}

export default UseRef