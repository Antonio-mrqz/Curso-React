import {Titulo, Circulo, Triangulo, Caja} from "./../styled/Estilos";

const StyleComponent = () => {
  return (
    <>
    <Titulo>Styled Components renovado</Titulo>
    <hr />
    <Circulo>Círculo</Circulo>
    <Triangulo>Triangulo</Triangulo>
    <hr />
    <Caja type="text" defaultValue="@Antonio.mrqz_" placeholder="Texto" color_custom="orange" />
    </>
  )
}

export default StyleComponent