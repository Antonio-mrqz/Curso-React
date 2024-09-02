import { Outlet } from "react-router-dom"

const Frontend = () => {
  return (
    <>
        <h1>Título para todas las Páginas</h1>
        <hr />
        <Outlet />
    
    </>
  )
}

export default Frontend