import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Lightbox from "react-spring-lightbox";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Img } from "react-image";
import { Skeleton } from "@/components/ui/skeleton";

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
      src: `../images/${folder}/${i + 1}.jpg`,
      alt: `Image ${i + 1}`,
      title: `${i + 1}`,
    }));

  // Use keys with hyphens to match URL patterns
  const galleryData: GalleryData = {
    brighton: galleryGeneration("Brighton", 20),
    protest: galleryGeneration("Protest", 20),
    "black-&-white": galleryGeneration("BlackAndWhite", 20),
    "low-tide-brighton-beach": galleryGeneration("LowTideBrightonBeach", 15),
    pride: galleryGeneration("Pride", 17),
    starlings: galleryGeneration("Starlings", 16),
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

  // return (
  //   <div
  //     className={
  //       lightboxOpen
  //         ? "blurred-background"
  //         : "flex flex-col gap-8 md:gap-20 pb-20"
  //     }
  //   >
  //     {/* Header */}
  //     <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md h-16">
  //       <Header />
  //     </div>

  //     <div className="flex flex-col px-4 md:px-10 lg:px-20 pb-20 mt-32">
  //       <span className="text-5xl capitalize font-bold text-center font-old-standard text-black mb-8">
  //         {name?.replace(/-/g, " ")}{" "}
  //       </span>

  //       {/* Images Grid */}
  //       <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
  //         {gallery?.map((image: GalleryImage, index: number) => (
  //           <div
  //             key={index}
  //             className="flex flex-col gap-4 justify-center items-center"
  //           >
  //             <Img
  //               src={image.src}
  //               alt={image.alt}
  //               onClick={() => openLightbox(index)}
  //               className="w-full h-full hover:cursor-pointer max-h-[650px] object-cover"
  //               loader={
  //                 <Skeleton className="absolute inset-0 max-h-[650px] w-full h-full bg-gray-200" />
  //               }
  //               unloader={
  //                 <div className="w-full h-full max-h-[650px] bg-gray-300 flex items-center justify-center">
  //                   <span className="text-black text-sm">
  //                     Image failed to load
  //                   </span>
  //                 </div>
  //               }
  //             />

  //             {/* Conditional rendering of Title */}
  //             {image.src ? (
  //               <span className="text-3xl font-old-standard text-center font-bold leading-tight text-black">
  //                 {image.title}
  //               </span>
  //             ) : (
  //               <Skeleton className="h-6 w-3/4 bg-gray-200 rounded" />
  //             )}
  //           </div>
  //         )) || (
  //           <span className="text-center text-gray-600">
  //             Gallery not found.
  //           </span>
  //         )}
  //       </div>
  //     </div>

  //     <Lightbox
  //       isOpen={lightboxOpen}
  //       onClose={closeLightbox}
  //       currentIndex={currentImageIndex}
  //       onNext={goToNextImage}
  //       onPrev={goToPreviousImage}
  //       singleClickToZoom={true}
  //       renderPrevButton={({ canPrev }) =>
  //         canPrev && (
  //           <button
  //             onClick={goToPreviousImage}
  //             className="absolute bottom-6 left-16 z-50"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-12 w-12 text-white"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M15 19l-7-7 7-7"
  //               />
  //             </svg>
  //           </button>
  //         )
  //       }
  //       renderNextButton={({ canNext }) =>
  //         canNext && (
  //           <button
  //             onClick={goToNextImage}
  //             className="absolute bottom-6 right-16 z-50"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-12 w-12 text-white"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M9 5l7 7-7 7"
  //               />
  //             </svg>
  //           </button>
  //         )
  //       }
  //       images={
  //         gallery?.map((image) => ({
  //           src: image.src,
  //           caption: image.title,
  //           alt: image.alt,
  //         })) || []
  //       }
  //     />

  //     {/* Footer */}
  //     <div className="fixed bottom-0 left-0 w-full h-20 bg-white shadow-md flex items-center justify-center">
  //       <Footer />
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col gap-8 md:gap-20 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md h-16">
        <Header />
      </div>
      <div className="flex flex-col px-4 md:px-10 lg:px-20 pb-20 mt-32">
        <span className="text-5xl font-bold text-center font-old-standard text-black mb-8">
          Under Maintenance
        </span>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-12 bg-white shadow-md flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage;
