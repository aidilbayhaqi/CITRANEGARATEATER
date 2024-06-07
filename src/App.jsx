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
   
  
      <NavBar></NavBar>
      <Routes>
        <Route path="/CITTERV2/" element={<Home></Home>}></Route>
        <Route path="/CITTERV2/Galeri/" element={<Galeri></Galeri>}></Route>
        <Route path="/CITTERV2/Karya/" element={<Karya></Karya>}></Route>
        <Route path="/CITTERV2/Struktural/" element={<Struktural></Struktural>}></Route>
        <Route path="/CITTERV2/Register/" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>


  );
}

export default App;
