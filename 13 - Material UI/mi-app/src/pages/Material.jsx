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
            <li>
                <Link to="/material/table">Tabla o Data grid</Link>
            </li>
            <li>
                <Link to="/material/accordion">Accordion</Link>
            </li>
            <li>
                <Link to="/material/stepper">Stepper</Link>
            </li>
            <li>
                <Link to="/material/tabs">Tabs</Link>
            </li>
            <li>
                <Link to="/material/dialog">Dialog</Link>
            </li>
            <li>
                <Link to="/material/card">Card</Link>
            </li>
            <li>
                <Link to="/material/autocomplete">Autocomplete</Link>
            </li>
            <li>
                <Link to="/material/datepicker">DatePicker</Link>
            </li>
        </ul>

    </>
  )
}

export default Material