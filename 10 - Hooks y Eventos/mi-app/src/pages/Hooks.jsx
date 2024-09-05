import {Link} from "react-router-dom"

const Hooks = () => {
  return (
    <>
    <h1>Hooks</h1>
    <ul>
        <li>
            <Link to="/hooks/evento-click">Evento Click</Link>
        </li>
        <li>
            <Link to="/hooks/usestate">UseState</Link>
        </li>
    </ul>
    </>
  )
}

export default Hooks