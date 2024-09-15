import { Link } from "react-router-dom"
//npm install @mui/material
//npm i @mui/icons-material para iconos
const Material = () => {
  return (
    <>
        <h1>Material</h1>
        <ul>
            <li>
                <Link to="/material/botones">Botones, Icons, Stack</Link>
            </li>
            <li>
                <Link to="/material/list">List, ListSubheader, ListItemButton, ListItemIcon</Link>
            </li>
            <li>
                <Link to="/material/drawer">Drawer</Link>
            </li>
        </ul>

    </>
  )
}

export default Material