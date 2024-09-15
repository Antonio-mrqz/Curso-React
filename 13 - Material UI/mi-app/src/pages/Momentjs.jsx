import {Link} from "react-router-dom"
import moment from "moment"

//npm i moment --save
const Momentjs = () => {
    let fecha = new Date();
  return (
    <>
         <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to="/utiles">Útiles</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                Momentjs
                </li>
            </ol>
        </nav>

        <h1>Momentjs</h1>
        <h3>Formatear Fecha</h3>
            <ul>
                <li>Fecha: {fecha.toString()}</li>
                <li>Fecha corta:  {moment(fecha).format("DD/MM/YYYY")}</li>
                <li>Fecha: {moment(fecha).format("dddd")} {moment(fecha).format("DD")} {moment(fecha).format("dddd")} de {moment(fecha).format("MMMM")} de {moment(fecha).format("YYYY")} a las {moment(fecha).format("HH:mm:ss")}</li>
                <li>Fecha timestamp:  {fecha.valueOf()}</li>
            </ul>

        <hr />
        
        <h3>Calculos con Fecha</h3>
        <ul>
        <li>Fecha + 7 dias:  {moment(fecha).add(7,"days").format("DD/MM/YYYY")}</li>
            <li>Fecha - 7 dias:  {moment(fecha).subtract(7,"days").format("DD/MM/YYYY")}</li>
            <li>Fecha + 7 meses:  {moment(fecha).add(7,"month").format("DD/MM/YYYY")}</li>
            <li>Fecha - 7 meses:  {moment(fecha).subtract(7,"month").format("DD/MM/YYYY")}</li>
            <li>Fecha + 7 años:  {moment(fecha).add(7,"year").format("DD/MM/YYYY")}</li>
            <li>Fecha - 7 años:  {moment(fecha).subtract(7,"year").format("DD/MM/YYYY")}</li>
        </ul>
    </>
  )
}

export default Momentjs