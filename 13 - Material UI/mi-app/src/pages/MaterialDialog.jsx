import { Link } from "react-router-dom"
import React, { useState } from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MaterialDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAbrir = () => {
        alert("Agregado");
    };
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/material">Material</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Dialog</li>
            </ol>
        </nav>

        <h1>Dialog</h1>

        <Button variant="outlined" onClick={handleClickOpen}>
            Abrir Confirmar
        </Button>

        <Dialog open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Alguna Pregunta?"}</DialogTitle>
            <DialogContent id="alert-dialog-slide-description">
                Aqui puedes poner cualquier texto con contenido html
                <strong> negritas</strong>
                <hr />
                <img src="/images/logo.png" alt="" width={200}/>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={()=>{
                    handleAbrir()
                    handleClose()
                }}>
                    Agregar
                </Button>
            </DialogActions>

        </Dialog>
    </>
  )
}

export default MaterialDialog