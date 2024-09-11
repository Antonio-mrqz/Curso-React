import { Link, Form, useActionData } from "react-router-dom"
import Swal from "sweetalert2"
import { atributos, categorias_productos } from "../datos/datos";
import { useState } from "react";
import Validaciones from "../components/Validaciones";

export async function action({request}) {
    //siempre los action deben devolver algo
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    //console.log(formData);

    //Validaciones
    let errores = [];

    if(formData.get("categoria")==0){
        errores.push("Debe seleccionar al menos una categoría")
    }

    if(Object.values(datos).includes("")){
        errores.push("Todos los campos son obligatorios")
    }

    if(Object.keys(errores).length){
        return errores;
    }

    //recibir checkbox dinámicos
    let atributosCheckBox = [];
    let mensajeAtributos = "";
    atributos.map((atributo, i)=>{
        if(formData.get("atributo_"+atributo.id)!=null){
            atributosCheckBox[i] = atributo.id;
            mensajeAtributos += atributo.nombre+", "
        }
    });

    return Swal.fire({
        icon: "success",
        title: "Articulo Añadido",
        text: "Categoria: " + datos.categoria + " | " +
              "Nombre: " + datos.nombre + " | " +
              "Precio: " + datos.precio + " | " +
              "Destacado: " + datos.destacado + " | " +
              "Descripcion: " + datos.descripcion + " | " +
              "Peligroso: " + (datos.peligroso ? "SI" : "NO") + " | " +
              "Atributos: " + mensajeAtributos
    });
}

const FormularioUseActionData = () => {
    const [peligroso, setPeligroso] = useState(false);
    const handlePeligroso = ()=>{
        setPeligroso(!peligroso);
    }
    const errores = useActionData();
  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to="/formularios">Formularios</Link>
            </li>
            <li className='breadcrumb-item active' aria-current="page">
                Formulario UseActionData
            </li>
        </ol>
    </nav>

    <h1>Formulario UseActionData</h1>

    <hr />
    {errores?.length && <Validaciones errores={errores} />}
    <Form method="POST" noValidate>
        <div className="form-group">
            <label htmlFor="categoria">Categoría</label>
            <select name="categoria" id="categoria" className="form-control" >
                <option value="0">Seleccione....</option>
                {categorias_productos.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                        {categoria.nombre}
                    </option>
                ))}
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" className="form-control" id="nombre" placeholder="Nombre" />
        </div>

        <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input type="number" min="0" id="precio" name="precio" className="form-control" placeholder="Precio" />
        </div>

        <hr />
        
         {/*Radio Buttons mismo nombre distinto id*/}
        <div className="form-control">
            <label htmlFor="precio"><b>Destacado</b></label>
            <div className="form-check">
                <input type="radio" name="destacado" id="destacado1" className="form-check-input" value="si" />
                <label htmlFor="destacado1">SI</label>
            </div>
            <div className="form-check">
                <input type="radio" name="destacado" id="destacado2" className="form-check-input" value="no" />
                <label htmlFor="destacado2">NO</label>
            </div>
        </div>

        <hr />

        <div className="form.group">
            <label htmlFor="descripcion">Descripcion</label>
            <textarea id="descripcion" name="descripcion" className="form-control" placeholder="Descripcion" ></textarea>
        </div>

        <hr />

        <div className="form-group">
            <label htmlFor="peligroso">Peligroso</label>
            <div className="form-check">
                <input type="checkbox" name="peligroso" id="peligroso" className="form-check-input" value={peligroso} onChange={handlePeligroso}/>
                <label htmlFor="peligroso">Peligroso</label>
            </div>
        </div>

        <hr />

        <div className="form-group">
            <label htmlFor="atributos">Atributos</label>
            
                {atributos.map((atributo)=>(
                    <div className="form-check" key={atributo.id}>
                        <input type="checkbox" className="form-check-input" name={`atributo_${atributo.id}`} id={`atributo_${atributo.id}`} value={atributo.id}/>
                        <label htmlFor={atributo.nombre}>{atributo.nombre}</label>
                    </div>
                ))}
            
        </div>
        
        <hr />

      <button className="btn btn-danger">Enviar</button>
    </Form>
    </>
  )
}

export default FormularioUseActionData