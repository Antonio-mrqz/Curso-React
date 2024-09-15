import { Link } from "react-router-dom";

const Mapas1 = () => {
  return (
    <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utiles">Útiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Mapa clásico
          </li>
        </ol>
      </nav>
      <hr />
      <h1>Mapa clásico </h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.2970748715825!2d-6.343792423730689!3d36.7874270684188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0de0bb153f8c97%3A0x39d4ca2d62712c73!2sIES%20Francisco%20Pacheco!5e0!3m2!1ses!2ses!4v1726408772118!5m2!1ses!2ses" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Mapas1