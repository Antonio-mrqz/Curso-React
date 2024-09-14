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
            <Link to="/hooks/use-state">UseState</Link>
        </li>
        <li>
            <Link to="/hooks/onchange">OnChange</Link>
        </li>
        <li>
            <Link to="/hooks/eventos-varios">Eventos Varios</Link>
        </li>
        <li>
            <Link to="/hooks/use-effect">UseEffect</Link>
        </li>
        <li>
            <Link to="/hooks/custom-hooks">Custom Hooks</Link>
        </li>
        <li>
            <Link to="/hooks/use-loader-data">UseLoaderData</Link>
        </li>
        <li>
            <Link to="/hooks/use-navigate">UseNavigate</Link>
        </li>
        <li>
            <Link to="/hooks/use-location">UseLocation</Link>
        </li>
        <li>
            <Link to="/hooks/use-ref">UseRef</Link>
        </li>
    </ul>
    </>
  )
}

export default Hooks