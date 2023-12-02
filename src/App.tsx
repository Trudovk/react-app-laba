import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PolytechPagination from "./PolytechPagination";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/polytechpagination" element={<PolytechPagination />} />
        <Route
          path="/"
          element={<> {/* Your main page component here */} </>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
