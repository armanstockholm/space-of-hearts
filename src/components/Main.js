import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <Router>
      <div >
        <Header />

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default Main;
