import ComponenteFuncional2 from "./ComponenteFuncional2"
import Numero from "./Numero";
import ChildrenComponent from "./ChildrenComponent";

const ComponenteFuncional = () => {
  let nombre = "Antonio Marquez";
  let numero = 12;
  let paises = [
      {
        id: 1,
        nombre: "España",
        dominio: "es",
        peninsula: true,
      },
      {
        id: 2,
        nombre: "Portugal",
        dominio: "pt",
        peninsula: true,
      },
      {
        id: 3,
        nombre: "Francia",
        dominio: "fr",
        false: true,
      },
    ];

    let estudiantes = [
      {
        id: 1,
        nombre: "Antonio",
        apellido: "Márquez",
      },
      {
        id: 2,
        nombre: "Juan",
        apellido: "Gomez",
      },
      {
        id: 3,
        nombre: "Lucia",
        apellido: "Lopez",
      },
    ];
  return (
    <>
    <h1>Hola desde componente funcional</h1>

    <ComponenteFuncional2 prop1="manzana" nombre={nombre} paises={paises} estudiantes={estudiantes}/>
    
    <hr />

    {(numero==12) ? (
      <Numero numero={numero}/>
    ):(
      <div>es distinto a 12</div>
    )}

    <hr />

    <ChildrenComponent otro="mas contenido">
      <p className="rojo">contenido desde el children</p>
    </ChildrenComponent>
    
    </>
  )
}

export default ComponenteFuncional