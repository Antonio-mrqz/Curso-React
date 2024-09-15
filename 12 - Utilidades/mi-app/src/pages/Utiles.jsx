import { Link } from "react-router-dom"

const Utiles = () => {
  return (
    <>
        <h1>Útiles</h1>
        <ul>
            <li>
                <Link to="/utiles/dayjs">Dayjs</Link>
            </li>
            <li>
                <Link to="/utiles/momentjs">Momentjs</Link>
            </li>
            <li>
                <Link to="/utiles/spinner">Spinner</Link>
            </li>
            <li>
                <Link to="/utiles/swipeable">Swipeable</Link>
            </li>
            <li>
                <Link to="/utiles/webcam">Webcam</Link>
            </li>
            <li>
                <Link to="/utiles/graficos">Graficos</Link>
            </li>
            <li>
                <Link to="/utiles/mapas-clasicos">Mapas Clásicos</Link>
            </li>
            <li>
                <Link to="/utiles/modal">Modal</Link>
            </li>
            <li>
                <Link to="/utiles/carrusel">Carrusel de imagenes</Link>
            </li>
        </ul>
    </>
  )
}

export default Utiles