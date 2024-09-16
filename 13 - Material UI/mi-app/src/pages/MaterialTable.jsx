import { Link } from "react-router-dom"
import { DataGrid } from "@mui/x-data-grid" //npm i @mui/x-data-grid

const MaterialTable = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'Nombre', width: 130 },
        { field: 'lastName', headerName: 'E-Mail', width: 130 },
        {
            field: 'age',
            headerName: 'Edad',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Nombre completo',
            description: 'Esta columna tiene un captador de valor y no se puede ordenar.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Márquez', firstName: 'Antonio', age: 19 },
        { id: 2, lastName: 'López', firstName: 'Raúl', age: 20 },
        { id: 3, lastName: 'Gómez', firstName: 'Lucia', age: 23 },
        { id: 4, lastName: 'Fernández', firstName: 'Juan', age: 16 },
        { id: 5, lastName: 'Barrios', firstName: 'Daniel', age: null },
        { id: 5, lastName: 'Barrios', firstName: 'Daniel', age: null },
    ];
    
    const paginationModel = { page: 0, pageSize: 5 };
  return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/material">Material</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Tabla o Data grid</li>
            </ol>
        </nav>

        <h1>Tabla o Data grid</h1>

        <div style={{height:400, width:"100%"}}>
            <DataGrid  rows={rows}
                       columns={columns}
                       initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[1, 10]}
                       checkboxSelection
            />
        </div>

    </>
  )
}

export default MaterialTable