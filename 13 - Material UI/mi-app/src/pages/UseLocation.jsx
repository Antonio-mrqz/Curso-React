import { Link, useLocation } from "react-router-dom"

const UseLocation = () => {
    const location = useLocation();
  return (
    <>
        <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <Link to="/hooks">Hooks</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                    useLocation
                </li>
            </ol>
        </nav>

        <h1>UseLocation</h1>
        <p>{location.pathname}</p>
      </>
  )
}

export default UseLocation