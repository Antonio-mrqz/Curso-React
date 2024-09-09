import { useParams } from "react-router-dom"

const RutasPath = () => {
    const {id, slug} = useParams();
  return (
    <>
    <h2>Ejemplo parametros path</h2>
    <p>Id: {id}</p>
    <p>Slug: {slug}</p>
    </>
  )
}

export default RutasPath