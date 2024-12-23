import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import GalleryPage from './pages/galleryPage'; // Import the GalleryPage component

function App() {

  return (
    <div className="w-full h-screen p-4">
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryPage />} /> {/* Add dynamic gallery route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
