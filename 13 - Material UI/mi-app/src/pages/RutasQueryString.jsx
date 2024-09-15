import { useLocation } from "react-router-dom"

const RutasQueryString = () => {
    const search = useLocation().search;
    let id = new URLSearchParams(search).get("id");
    let slug = new URLSearchParams(search).get("slug");
  return (
    <>
    <h2>Ejemplo parametros Query String</h2>
    <p>Id: {id}</p>
    <p>Slug: {slug}</p>
    </>
  )
}

export default RutasQueryString