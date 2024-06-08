import {Routes, Route } from "react-router-dom";
import { Home } from './pages/HomePage';
import { Galeri } from "./pages/Galeri";
import { Karya } from "./pages/Karya";
import { Struktural } from "./pages/Struktural";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import "./dist/App.css";
import "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  return (
   
  <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/CITRANEGARATEATER/" element={<Home></Home>}></Route>
        <Route path="/CITRANEGARATEATER/Galeri/" element={<Galeri></Galeri>}></Route>
        <Route path="/CITRANEGARATEATER/Karya/" element={<Karya></Karya>}></Route>
        <Route path="/CITRANEGARATEATER/Struktural/" element={<Struktural></Struktural>}></Route>
        <Route path="/CITRANEGARATEATER/Register/" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
</div>

  );
}

export default App;
