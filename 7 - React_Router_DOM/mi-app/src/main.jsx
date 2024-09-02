import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Frontend from './components/Frontend.jsx'
import Home from "./pages/Home.jsx";
import SobreNosotros from "./pages/SobreNosotros.jsx"
import Rutas from './pages/Rutas.jsx'
import RutasPath from './pages/RutasPath.jsx'
import RutasQueryString from './pages/RutasQueryString.jsx'
import ErrorPersonalizado from './pages/ErrorPersonalizado.jsx'
import Error404 from './pages/Error404.jsx'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Frontend /> ,
      children:
      [
        {
          index: true,
          element: <Home />
        },
        {
          path:"/sobre-nosotros",
          element: <SobreNosotros />
        },
        {
          path:"/rutas",
          element: <Rutas />
        },
        {
          path:"/rutas/path/:id/:slug",
          element: <RutasPath />
        },
        {
          path:"/rutas/query-string",
          element: <RutasQueryString />,
          errorElement: <ErrorPersonalizado/>
        },
        {
          path:"*",
          element: <Error404 />
        }
      ]
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
