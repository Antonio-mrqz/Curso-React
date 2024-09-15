import { Link } from "react-router-dom"
import {useForm} from "react-hook-form" //https://react-hook-form.com/get-started/
import Swal from "sweetalert2"

const FormulariosReactHookForm = () => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    function onSubmit(values){
        Swal.fire({
            icon: "success",
            title: "OK",
            text: `E-Mail: ${values.email} | Contraseña: ${values.password}`
        });
    }
  
    return (
    <>
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to="/formularios">Formularios</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                    Formulario ReactHookForm
                </li>
            </ol>
        </nav>
        <h1>Formulario ReactHookForm</h1>
        {(errors.email || errors.password) && (
            <div className="alert alert-danger">
                <ul>
                    {errors.email && <li>{errors.email?.message}</li>}
                    {errors.password && <li>{errors.password?.message}</li>}
                </ul>
            </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label htmlFor="email">E-Mail</label>
                <input type="text" id="email" name="email" className="form-control" {...register("email", {
                    required: "El campo E-Mail es obligatorio",
                    pattern: {
                                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                message: "El E-Mail ingresado no es valido"

                             }
                })}/>
            </div>

            <div className="form-control">
                <label htmlFor="password">Contraseña</label>
                <input type="text" id="password" name="password" className="form-control" {...register("password", {
                    required: "El campo Password es obligatorio",
                    pattern: {
                                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                                message: "La Contraseña debe tener al menos 1 numero, una mayuscula, y un largo entre 8 y 16 caracteres"

                             }
                })}/>
            </div>

            <hr />

            <button className="btn btn-warning" type="submit">Enviar</button>
        </form>
    </>
  )
}

export default FormulariosReactHookForm