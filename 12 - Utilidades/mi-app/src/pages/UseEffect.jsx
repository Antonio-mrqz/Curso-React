import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
  let [arreglo, setArreglo] = useState([]);
  let [marcador, setMarcador] = useState();
  
  useEffect(() => {
    return () => {
        setArreglo(
            [
                {
                    id: 1,
                    nombre: "Antonio Marquez",
                    correo: "antonio@gmail.com"
                },
                {
                    id: 2,
                    nombre: "Raul Gomez",
                    correo: "raul@gmail.com"
                }
            ]
        );
    }
  }, [marcador]);
  const mostrarArreglo = (valor)=>{
    setMarcador(valor);
  }
  

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            UseEffect
          </li>
        </ol>
      </nav>

      <h1>UseEffect</h1>
      <button className="btn btn-success" onClick={()=>{mostrarArreglo(1)}}>Mostrar Arreglo</button>
      <br/> <br/>
      <button className="btn btn-danger" onClick={()=>{mostrarArreglo(0)}}>Esconder Arreglo</button>
      {marcador==1 && (
        <>
        <hr/>
        <ul>
            {arreglo.map((item)=>(
                <li key={item.id}>
                    Nombre: {item.nombre}
                    <br/>
                    E-Mail: {item.correo}
                </li>
            ))}
        </ul>
        </>
      )}
    </>
  );
};

export default UseEffect;
