import "./App.css";
// import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
// import { Home, Nosotros, Proyectos, Contacto } from "./pages";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
