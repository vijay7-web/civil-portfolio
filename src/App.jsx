import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Home from "./pages/Home"; // Import Home, which contains all sections
import Footer from "./components/Footer"; // Optional Footer component

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar component with smooth scrolling links */}
      <Home /> {/* Home component containing all sections */}
      <Footer /> {/* Optional footer */}
    </Router>
  );
}

export default App;
