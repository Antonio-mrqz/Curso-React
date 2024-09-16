import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel"
//https://react-bootstrap.github.io/docs/components/carousel
import { imagenes } from "../datos/datos";
import CarouselItem from "react-bootstrap/esm/CarouselItem";

const Carrusel = () => {
  return (
    <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Carrusel De Imagenes
          </li>
        </ol>
      </nav>

      <hr />

      <h1>Carrusel de Imagenes </h1>
      <Carousel>
        {imagenes.map((imagen)=>(
            <Carousel.Item key={imagen.id}>
                <img className="d-block w-100 h-100" src={imagen.nombre} alt={imagen.titulo} />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
         
      </Carousel>

    </>
  )
}

export default Carrusel