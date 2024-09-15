import { Link } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const MaterialBotones = () => {
  return (
    <>
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to="/material">Material</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                Botones, Icons, Stack
                </li>
            </ol>
        </nav>

        <h1>Botones, Icons, Stack</h1>

        <hr />

        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>

        <hr />

        <Stack spacing={2} direction="row">
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
        </Stack>

        <hr />

        <Stack spacing={2} direction="row">
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" href="#text-buttons">Link</Button>
        </Stack>

        <hr />

        <Stack spacing={2} direction="row">
            <Button variant="contained" disableElevation>Disable elevation</Button>
        </Stack>

        <hr />

        <Stack spacing={2} direction="row">
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" disabled>Disable</Button>
            <Button variant="outlined" href="#outlined-buttons">Link</Button>
        </Stack>

        <hr />

        <Stack spacing={2} direction="row">
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="outlined" color="error">Error</Button>
        </Stack>  

        <hr />
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <SendIcon />
                <input hidden accept="image/*" type="file"/>
            </IconButton>
        </Stack>

        <hr />

        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon/>}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon/>}>
                Send
            </Button>
        </Stack>

        <hr />

        <Stack direction="row" spacing={1}>
         <IconButton aria-label="delete">
            <DeleteIcon />
         </IconButton>
         <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
         </IconButton>
         <IconButton aria-label="add an alarm" color="secondary">
            <AlarmIcon />
         </IconButton>
         <IconButton aria-label="add to shopping cart" color="primary">
            <AddShoppingCartIcon />
         </IconButton>
        </Stack>
    </>
  )
}

export default MaterialBotones