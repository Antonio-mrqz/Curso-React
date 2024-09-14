import { Link } from "react-router-dom"
import dayjs from "dayjs"
import "dayjs/locale/es"
dayjs.locale("es")

//npm i dayjs
const DayJS = () => {
    let fecha = new Date();
  return (
    <>
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to="/utiles">Útiles</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                    Dayjs
                </li>
            </ol>
        </nav>

        <h1>Dayjs</h1>
        
        <h3>Formatear fecha</h3>
        <ul>
            <li>Fecha: {fecha.toString()}</li>
            <li>Fecha: {dayjs(fecha).format("dddd")} {dayjs(fecha).format("DD")} {dayjs(fecha).format("dddd")} de {dayjs(fecha).format("MMMM")} de {dayjs(fecha).format("YYYY")} a las {dayjs(fecha).format("HH:mm:ss")}</li>
            <li>Fecha corta:  {dayjs(fecha).format("DD/MM/YYYY")}</li>
            <li>Fecha timestamp:  {fecha.valueOf()}</li>
        </ul>

        <hr />

        <h3>Calculos con fecha</h3>
        <ul> 
            <li>Fecha + 7 dias:  {dayjs(fecha).add(7,"days").format("DD/MM/YYYY")}</li>
            <li>Fecha - 7 dias:  {dayjs(fecha).subtract(7,"days").format("DD/MM/YYYY")}</li>
            <li>Fecha + 7 meses:  {dayjs(fecha).add(7,"month").format("DD/MM/YYYY")}</li>
            <li>Fecha - 7 meses:  {dayjs(fecha).subtract(7,"month").format("DD/MM/YYYY")}</li>
            <li>Fecha + 7 años:  {dayjs(fecha).add(7,"year").format("DD/MM/YYYY")}</li>
            <li>Fecha - 7 años:  {dayjs(fecha).subtract(7,"year").format("DD/MM/YYYY")}</li>
        </ul>
    </>
  )
}

export default DayJS