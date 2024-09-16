import { Link } from "react-router-dom"
import { useState } from "react"

import  Accordion  from "@mui/material/Accordion"
import  AccordionDetails  from "@mui/material/AccordionDetails"
import  AccordionSummary  from "@mui/material/AccordionSummary"
import  Typography  from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const MaterialAccordion = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isEspanded) => {
        setExpanded(isEspanded ? panel : false)
    }
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/material">Material</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Accordion</li>
            </ol>
        </nav>

        <h1>Accordion</h1>

        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
              >
                <Typography variant="h4" sx={{width:"33%", flexShrink: 0}}>
                    JavaScript
                </Typography>
                <Typography  sx={{color: "text.secondary"}}>
                    console.log("Hola Mundo!")
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <img src="/images/JS.jpg" width="250" />
                <hr />
                <Typography>
                JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel2bh-content"
                              id="panel2bh-header"
              >
                <Typography variant="h4" sx={{width:"33%", flexShrink: 0}}>
                    React
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <img src="/images/React.png" width="250" />
                <hr />
                <Typography>
                React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel3bh-content"
                              id="panel3bh-header"
              >
                <Typography variant="h4" sx={{width:"33%", flexShrink: 0}}>
                    Angular
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <img src="/images/Angular.png" width="250" />
                <hr />
                <Typography>
                Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </>
  )
}

export default MaterialAccordion