import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Img } from "react-image";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import imagesArray from "@/data/imagesArray";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 md:gap-20 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
        <Header />
      </div>

      <div className="grid grid-cols-3 gap-20 px-4 md:px-10 lg:px-20 pb-20 mt-32">
        {/* Carousel */}
        <div className="col-span-3 relative xl:h-[1000px] 2xl:h-[1300px] md:h-[800px] w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {imagesArray.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="xl:h-[1000px] 2xl:h-[1300px] md:h-[800px} w-full"
                >
                  <div className="p-1">
                    <Img
                      className="xl:h-[1000px] 2xl:h-[1300px] md:h-[800px] h-auto w-full"
                      src={image.src}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-10 md:inset-60 xl:inset-96 text-center flex flex-col text-white">
            <span className="text-xl sm:text-7xl xl:text-8xl 2xl:text-9xl font-old-standard text-shadow">
              Paul Cahill
            </span>
            <span className="text-sm sm:text-2xl xl:text-2xl 2xl:text-3xl font-old-standard text-shadow">
              Brighton Based Photographer
            </span>
          </div>
        </div>

        {/* Featured Galleries */}
        <div className="col-span-3 items-center md:items-stretch flex flex-col gap-8">
          <span className="md:text-6xl text-2xl px-20 font-old-standard text-center font-bold leading-tight text-black">
            Featured Galleries
          </span>

          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
            {imagesArray.map((image, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 justify-center items-center"
              >
                {/* Skeleton and Image */}
                <Link
                  to={`/galleries/${image.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="relative w-full max-h-[650px] aspect-[4/3]"
                >
                  <Img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 max-h-[650px] w-full h-full object-cover"
                    loader={
                      <Skeleton className="absolute inset-0 w-full h-full bg-gray-200" />
                    }
                    unloader={
                      <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-black text-sm">
                          Image failed to load
                        </span>
                      </div>
                    }
                  />
                </Link>

                {/* Conditional rendering of Title */}
                {image.src ? (
                  <span className="text-3xl font-old-standard text-center font-bold leading-tight text-black">
                    {image.title}
                  </span>
                ) : (
                  <Skeleton className="h-6 w-3/4 bg-gray-200 rounded" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full overflow-hidden">
        <Footer />
      </div>
    </div>
  );
}
