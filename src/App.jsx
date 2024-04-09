import { Routes, Route } from "react-router-dom";
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
        <Route path="/" Component={Home}></Route>
        <Route path="/galeri" Component={Galeri}></Route>
        <Route path="/karya" Component={Karya}></Route>
        <Route path="/struktural" Component={Struktural}></Route>
        <Route path="/register" Component={Register}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
