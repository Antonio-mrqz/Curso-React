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
