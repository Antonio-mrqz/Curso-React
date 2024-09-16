import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import "./blog.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Frontend from "./components/Frontend.jsx";
import Home from "./pages/Home.jsx";
import SobreNosotros from "./pages/SobreNosotros.jsx";
import Rutas from "./pages/Rutas.jsx";
import RutasPath from "./pages/RutasPath.jsx";
import RutasQueryString from "./pages/RutasQueryString.jsx";
import ErrorPersonalizado from "./pages/ErrorPersonalizado.jsx";
import Error404 from "./pages/Error404.jsx";
import Hooks from "./pages/Hooks.jsx";
import EventoClick from "./pages/EventoClick.jsx";
import UseState from "./pages/UseState.jsx";
import OnChange from "./pages/OnChange.jsx";
import EventosVarios from "./pages/EventosVarios.jsx";
import UseEffect from "./pages/UseEffect.jsx";
import CustomHooks from "./pages/CustomHooks.jsx";
import UseLoaderData, { loader as paisesLoader} from "./pages/UseLoaderData.jsx";
import UseNavigate from "./pages/UseNavigate.jsx";
import UseLocation from "./pages/UseLocation.jsx";
import UseRef from "./pages/UseRef.jsx";
import Formularios from "./pages/Formularios.jsx";
import FormularioSimple from "./pages/FormularioSimple.jsx";
import FormularioUseActionData, {action as procesarFormularioActionData} from "./pages/FormularioUseActionData.jsx";
import FormulariosFormik from "./pages/FormulariosFormik.jsx";
import FormulariosReactHookForm from "./pages/FormulariosReactHookForm.jsx";
import Utiles from "./pages/Utiles.jsx";
import DayJS from "./pages/DayJS.jsx";
import Momentjs from "./pages/Momentjs.jsx";
import Spinner from "./pages/Spinner.jsx";
import Swipeable from "./pages/Swipeable.jsx";
import Webcam from "./pages/Webcam.jsx";
import Graficos from "./pages/Graficos.jsx";
import Mapas1 from "./pages/Mapas1.jsx";
import { Modal } from "bootstrap";
import UtilesModal from "./pages/UtilesModal.jsx";
import Carrusel from "./pages/Carrusel.jsx";
import Material from "./pages/Material.jsx";
import MaterialBotones from "./pages/MaterialBotones.jsx";
import MaterialList from "./pages/MaterialList.jsx";
import MaterialDrawer from "./pages/MaterialDrawer.jsx";
import MaterialTable from "./pages/MaterialTable.jsx";
import MaterialAccordion from "./pages/MaterialAccordion.jsx";
import MaterialStepper from "./pages/MaterialStepper.jsx";
import MaterialTabs from "./pages/MaterialTabs.jsx";
import MaterialDialog from "./pages/MaterialDialog.jsx";
import MaterialCard from "./pages/MaterialCard.jsx";
import MaterialAutocomplete from "./pages/MaterialAutocomplete.jsx";
import MaterialDatePicker from "./pages/MaterialDatePicker.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sobre-nosotros",
        element: <SobreNosotros />,
      },
      {
        path: "/rutas",
        element: <Rutas />,
      },
      {
        path: "/rutas/path/:id/:slug",
        element: <RutasPath />,
      },
      {
        path: "/rutas/query-string",
        element: <RutasQueryString />,
        errorElement: <ErrorPersonalizado />,
      },
      {
        path: "/hooks",
        element: <Hooks/>,
      },
      {
        path: "/hooks/evento-click",
        element: <EventoClick/>,
      },
      {
        path: "/hooks/use-state",
        element: <UseState/>,
      },
      {
        path: "/hooks/onchange",
        element: <OnChange/>,
      },
      {
        path: "/hooks/eventos-varios",
        element: <EventosVarios/>,
      },
      {
        path: "/hooks/use-effect",
        element: <UseEffect/>,
      },
      {
        path: "/hooks/custom-hooks",
        element: <CustomHooks />,
      },
      {
        path: "/hooks/use-loader-data",
        element: <UseLoaderData />,
        loader: paisesLoader,
      },
      {
        path: "/hooks/use-navigate",
        element: <UseNavigate />,
      },
      {
        path: "/hooks/use-location",
        element: <UseLocation />,
      },
      {
        path: "/hooks/use-ref",
        element: <UseRef />,
      },
      {
        path: "/formularios",
        element: <Formularios />,
      },
      {
        path: "/formularios/formulario-simple",
        element: <FormularioSimple />,
      },
      {
        path: "/formularios/formulario-use-action-data",
        element: <FormularioUseActionData />,
        action: procesarFormularioActionData
      },
      {
        path: "/formularios/formulario-formik",
        element: <FormulariosFormik />,
      },
      {
        path: "/formularios/formulario-reacthookform",
        element: <FormulariosReactHookForm />,
      },
      {
        path: "/utiles",
        element: <Utiles />,
      },
      {
        path: "/utiles/dayjs",
        element: <DayJS />,
      },
      {
        path: "/utiles/momentjs",
        element: <Momentjs />,
      },
      {
        path: "/utiles/spinner",
        element: <Spinner />,
      },
      {
        path: "/utiles/swipeable",
        element: <Swipeable />,
      },
      {
        path: "/utiles/webcam",
        element: <Webcam />,
      },
      {
        path: "/utiles/graficos",
        element: <Graficos />,
      },
      {
        path: "/utiles/mapas-clasicos",
        element: <Mapas1 />,
      },
      {
        path: "/utiles/modal",
        element: <UtilesModal />,
      },
      {
        path: "/utiles/carrusel",
        element: <Carrusel />,
      },
      {
        path: "/material",
        element: <Material />,
      },
      {
        path: "/material/botones",
        element: <MaterialBotones />,
      },
      {
        path: "/material/list",
        element: <MaterialList />,
      },
      {
        path: "/material/drawer",
        element: <MaterialDrawer />,
      },
      {
        path: "/material/table",
        element: <MaterialTable/>,
      },
      {
        path: "/material/accordion",
        element: <MaterialAccordion/>,
      },
      {
        path: "/material/stepper",
        element: <MaterialStepper/>,
      },
      {
        path: "/material/tabs",
        element: <MaterialTabs/>,
      },
      {
        path: "/material/dialog",
        element: <MaterialDialog/>,
      },
      {
        path: "/material/card",
        element: <MaterialCard/>,
      },
      {
        path: "/material/autocomplete",
        element: <MaterialAutocomplete/>,
      },
      {
        path: "/material/datepicker",
        element: <MaterialDatePicker/>,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
