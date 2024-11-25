import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import MainContent from "./MainContent";
import About from "./About";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default Main;
