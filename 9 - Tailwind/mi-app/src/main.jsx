import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import '../public/css/output.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Frontend from './components/Frontend';
import Index from './pages/Index';
const router = createBrowserRouter
(
  [
    {
      path: "/",
      element: <Frontend />,
      children:
      [
        {
          index: true,
          element: <Index />
        }
      ]
    }
  ]
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
