import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Animation from "./pages/Animation";
import Contact from "./pages/Contact";
import Exterior from "./pages/Exterior";
import Home from "./pages/Home";
import Interior from "./pages/Interior";
import Landscape from "./pages/Landscape";



function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/landscape" element={<Landscape />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
