import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Singlepage from "./pages/Singlepage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Homepage />
          <Singlepage />
          <Aboutpage />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
