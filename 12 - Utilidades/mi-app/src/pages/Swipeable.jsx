import { Link } from "react-router-dom"
import { LeadingActions,
         SwipeableList,
         SwipeAction,
         SwipeableListItem,
         TrailingActions
} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"

//npm i react-swipeable-list 
const Swipeable = () => {
    const leadingActions = () => (
         <LeadingActions>
             <SwipeAction onClick={() => console.info("leadingActions")}>
                 <div className='alert alert-warning'>Editar</div>
             </SwipeAction>
         </LeadingActions>
     )
     const trailingActions = () => (
         <TrailingActions>
             <SwipeAction
                 onClick={() => console.info("trailingActions")}
                 destructive={true}
             >
                 <div className='alert alert-danger'>Eliminar</div>
             </SwipeAction>
         </TrailingActions>
     )
   return (
     <>
     <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           <li className="breadcrumb-item">
             <Link to="/utiles">Útiles</Link>
           </li>
           <li className="breadcrumb-item active" aria-current="page">
             react-swipeable-list
           </li>
         </ol>
       </nav>
       <hr />
       <h1>react-swipeable-list </h1>
       <hr/>
       <SwipeableList>
         <SwipeableListItem leadingActions={leadingActions()}
                   trailingActions={trailingActions()}>
             <div className="alert alert-success">
                 esta es una prueba de lo que podría ser este componente, puedes agregar formularios, botones con acciones, o lo que necesites dentro del contenido de  SwipeAction
             </div>
         </SwipeableListItem>
       </SwipeableList>
     </>
   )
 }
 
 export default Swipeable