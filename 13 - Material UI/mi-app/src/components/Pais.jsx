
const Pais = ({pais}) => {
  return (
    <>
        <tr key={pais.id}>
            <td>{pais.id}</td>
            <td>{pais.dominio}</td>
            <td>{pais.nombre}</td>
        </tr>
    </>
  )
}

export default Pais