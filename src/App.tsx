import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PolytechPagination from "./pages/PolytechPagination";
import Header from "./components/header";
import Footer from "./components/footer";
import Artem from "./pages/Artem";
import { ARTEM_ROUTE, POLYTECH_ROUTE, VLAD_ROUTE } from "./app/routing/config";
import Vlad from "./pages/Vlad";
import MainRouter from "./pages/Routing";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
