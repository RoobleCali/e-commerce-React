import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* routing items */}
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
