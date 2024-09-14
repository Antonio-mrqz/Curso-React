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
        </ul>
    </>
  )
}

export default Utiles