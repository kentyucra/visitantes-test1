
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import AdForm from "./AdForm"
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="anuncio-nuevo" element={<AdForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;