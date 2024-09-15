import { Link } from "react-router-dom"
import "./../../public/css/spinner.css"

const Spinner = () => {
  return (
    <>
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to="/utiles">Útiles</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                Spinner
                </li>
            </ol>
        </nav>

        <h1>Spinner</h1>
        <hr />
        <div class="spinner">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </>
  )
}

export default Spinner