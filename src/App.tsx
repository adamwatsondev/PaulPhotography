import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Galleries from "./pages/galleries";
import Contact from "./pages/contact";
import GalleryPage from "./pages/galleryPage"; // Import the GalleryPage component
import Basket from "./pages/basket";

function App() {
  return (
    <div className="w-full h-screen p-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/galleries/:name" element={<GalleryPage />} />{" "}
          {/* Use :name for dynamic gallery name */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
