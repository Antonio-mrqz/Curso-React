
const Estudiante = ({estudiante}) => {
  return (
    <>
        <tr key={estudiante.id}>
            <td>{estudiante.id}</td>
            <td>{estudiante.nombre}</td>
            <td>{estudiante.apellido}</td>
        </tr>
    </>
  )
}

export default Estudiante