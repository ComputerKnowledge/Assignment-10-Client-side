import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/navber/Navber";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
export default App;
