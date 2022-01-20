import "./index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage/HomePage";
import Contact from "./Contact/Contact";
import Resumes from "./Resume/Resumes";
import Projects from "./Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
