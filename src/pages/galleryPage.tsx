import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Lightbox from 'react-spring-lightbox';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const GalleryPage = () => {
  const { id } = useParams(); // Extract the gallery id from the URL
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const galleryData = {
    1: [
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Image 1" },
    ],
    2: [
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
      { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Image 2" },
    ],
    3: [
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
        { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Image 3" },
    ]
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const gallery = galleryData[id];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className={lightboxOpen ? "blurred-background" : ""}> {/* Conditionally apply blur */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
        <Header />
      </div>

      <div className="md:px-20 md:mt-48 mt-24 pb-20">
        <h1 className="text-5xl font-bold text-center font-old-standard text-black mb-8">Gallery {id}</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {gallery?.map((image, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img
                className="w-full h-auto cursor-pointer"
                src={image.src}
                alt={image.alt}
                onClick={() => openLightbox(index)} // Open the lightbox on click
              />
              <span className="text-2xl font-semibold font-old-standard text-black text-center">{image.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        currentIndex={currentImageIndex}
        images={gallery?.map((image) => ({
          src: image.src,
          caption: image.title,
          alt: image.alt,
        }))}
        renderHeader={() => (
          <div className="flex justify-between px-4 py-2 bg-black text-white">
            <button
              className="p-2 bg-gray-700 rounded"
              onClick={goToPreviousImage}
              disabled={gallery.length === 1}
            >
              Previous
            </button>
            <button
              className="p-2 bg-gray-700 rounded"
              onClick={goToNextImage}
              disabled={gallery.length === 1}
            >
              Next
            </button>
          </div>
        )}
        renderFooter={() => (
          <div className="text-center py-2 bg-black text-white">
            <p>
              Image {currentImageIndex + 1} of {gallery.length}
            </p>
          </div>
        )}
      />

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  ); 
};

export default GalleryPage;
