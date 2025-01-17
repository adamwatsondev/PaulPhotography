import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Lightbox from "react-spring-lightbox";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import galleryArray from "@/data/galleryArray";

const GalleryPage = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dalts7djg" } });

  // Filter images by the alt property matching the dynamic route parameter
  const { name } = useParams<{ name: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Filter images based on the name (e.g., Brighton, Pride)
  const filteredGalleryArray = galleryArray.filter(
    (image) => image.alt.toLowerCase() === name?.toLowerCase()
  );

  const imgs = filteredGalleryArray.map((image) =>
    cld
      .image(image.id)
      .format("auto")
      .quality("auto")
      .resize(auto().gravity(autoGravity()).width(1000).height(650))
  );

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
    if (filteredGalleryArray) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % filteredGalleryArray.length
      );
    }
  };

  const goToPreviousImage = () => {
    if (filteredGalleryArray) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredGalleryArray.length) %
          filteredGalleryArray.length
      );
    }
  };

  const imagesForLightbox = filteredGalleryArray.map((image) => ({
    src: cld.image(image.id).toURL(),
    caption: image.title || "",
    alt: image.alt,
  }));

  return (
    <div
      className={
        lightboxOpen
          ? "blurred-background flex flex-col gap-8 md:gap-20 pb-20"
          : "flex flex-col gap-8 md:gap-20 pb-20"
      }
    >
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md h-16">
        <Header />
      </div>

      <div className="flex flex-col px-4 md:px-10 lg:px-20 pb-20 mt-32">
        <span className="text-5xl capitalize font-bold text-center font-old-standard text-black mb-8">
          {name?.replace(/-/g, " ")}
        </span>

        {/* Images Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
          {filteredGalleryArray.length > 0 ? (
            filteredGalleryArray.map((image, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-center items-center"
              >
                <AdvancedImage
                  cldImg={imgs[index]}
                  alt={image.alt}
                  onClick={() => openLightbox(index)}
                  className="w-full h-full hover:cursor-pointer max-h-[650px] object-cover"
                  loader={
                    <Skeleton className="absolute inset-0 max-h-[650px] w-full h-full bg-gray-200" />
                  }
                  unloader={
                    <div className="w-full h-full max-h-[650px] bg-gray-300 flex items-center justify-center">
                      <span className="text-black text-sm">
                        Image failed to load
                      </span>
                    </div>
                  }
                />
                {/* Conditional rendering of Title */}
                {image.title ? (
                  <span className="text-3xl font-old-standard text-center font-bold leading-tight text-black">
                    {image.title}
                  </span>
                ) : (
                  <Skeleton className="h-6 w-3/4 bg-gray-200 rounded" />
                )}
              </div>
            ))
          ) : (
            <span className="text-center text-gray-600">
              No images found for this gallery.
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
        singleClickToZoom={true}
        renderPrevButton={({ canPrev }) =>
          canPrev && (
            <button
              onClick={goToPreviousImage}
              className="absolute bottom-6 left-16 z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )
        }
        renderNextButton={({ canNext }) =>
          canNext && (
            <button
              onClick={goToNextImage}
              className="absolute bottom-6 right-16 z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )
        }
        images={imagesForLightbox}
      />

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full h-20 bg-white shadow-md flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage;
