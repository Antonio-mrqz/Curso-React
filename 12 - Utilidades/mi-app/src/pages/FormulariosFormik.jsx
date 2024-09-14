import { Link } from "react-router-dom"
import { useFormik } from "formik" //https://formik.org/docs/overview#npm
import Swal from "sweetalert2"

const FormulariosFormik = () => {

    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async function (values) {
            let mensaje="";
            if(!values.email){
                mensaje += "<li>El campo E-Mail es obligatorio</li>"
            }
            if(!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(values.email)){
                 mensaje += "<li>El E-Mail ingresado no es valido</li>"
            }
            if(!values.password){
                mensaje += "<li>El campo Contraseña es obligatorio</li>"
            }
            if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i.test(values.password)){
                mensaje += "<li>La Contraseña debe tener al menos 1 numero, una mayuscula, y un largo entre 8 y 16 caracteres</li>"
           }

            if(mensaje==""){
                Swal.fire({
                    icon: "success",
                    title: "OK",
                    text: `E-mail: ${values.email} | Contraseña: ${values.password}` 
                });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Ups...",
                    html: `<ul>${mensaje}</ul>` 
                });
            }
            
        }
    });
    
  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to="/formularios">Formularios</Link>
            </li>
            <li className='breadcrumb-item active' aria-current="page">
                Formulario Formik
            </li>
        </ol>
    </nav>
    <h1>Formulario Formik</h1>

    <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="email" name="email" className="form-control" onChange={handleChange} value={values.email}/>
        </div>
        <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input type="text" id="password" name="password" className="form-control" onChange={handleChange} value={values.password}/>
        </div>
        <hr />
        <button className="btn btn-warning" type="submit">Enviar</button>
    </form>
    </>
  )
}

export default FormulariosFormik