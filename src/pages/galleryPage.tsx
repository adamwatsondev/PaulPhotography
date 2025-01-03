import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Lightbox from "react-spring-lightbox";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

type GalleryData = Record<string, GalleryImage[]>;

const GalleryPage = () => {
  const { name } = useParams<{ name: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const galleryGeneration = (folder: string, count: number): GalleryImage[] =>
    Array.from({ length: count }, (_, i) => ({
      src: `/images/${folder}/${i + 1}.jpg`,
      alt: `Image ${i + 1}`,
      title: `Image ${i + 1}`,
    }));

  // Use keys with hyphens to match URL patterns
  const galleryData: GalleryData = {
    brighton: galleryGeneration("brighton", 20),
    protest: galleryGeneration("protest", 20),
    grayscale: galleryGeneration("grayscale", 20),
    "brighton-beach": galleryGeneration("brighton beach", 15),
    pride: galleryGeneration("pride", 17),
    birds: galleryGeneration("birds", 16),
  };

  // The key matches the URL parameter directly
  const gallery = name ? galleryData[name.toLowerCase()] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNextImage = () => {
    if (gallery) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }
  };

  const goToPreviousImage = () => {
    if (gallery) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length
      );
    }
  };

  return (
    <div className={lightboxOpen ? "blurred-background" : "flex pb-20"}>
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
        <Header />
      </div>

      <div className="flex flex-col px-4 md:px-10 lg:px-20 pb-20 mt-32">
        <span className="text-5xl capitalize font-bold text-center font-old-standard text-black mb-8">
          {name?.replace(/-/g, " ")}{" "}
          {/* Replace hyphens with spaces for display */}
        </span>

        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
          {gallery?.map((image: GalleryImage, index: number) => (
            <div key={index} className="flex justify-center items-center">
              <img
                className="lg:h-[500px] h-auto w-full cursor-pointer"
                src={image.src}
                alt={image.alt}
                onClick={() => openLightbox(index)}
              />
            </div>
          )) || (
            <span className="text-center text-gray-600">
              Gallery not found.
            </span>
          )}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        currentIndex={currentImageIndex}
        onNext={goToNextImage}
        onPrev={goToPreviousImage}
        images={
          gallery?.map((image) => ({
            src: image.src,
            caption: image.title,
            alt: image.alt,
          })) || []
        }
      />

      {/* Footer */}
      <div className="fixed bottom-0 w-full overflow-hidden">
        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage;
