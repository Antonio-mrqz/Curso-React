import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Error404 from "./pages/Error404";
const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros/>} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas