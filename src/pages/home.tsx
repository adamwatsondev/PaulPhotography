import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";
import imagesArray from "@/data/imagesArray";

export default function Home() {
  const cld = new Cloudinary({
    cloud: { cloudName: `${import.meta.env.VITE_CLOUDINARY_CLOUD_KEY}` },
  });

  const imgs = imagesArray.map((image) =>
    cld
      .image(image.id)
      .format("auto")
      .quality("auto")
      .resize(fill().width(1000).height(650))
  );

  return (
    <div className="flex flex-col gap-8 md:gap-20 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
        <Header />
      </div>

      <div className="grid grid-cols-3 gap-12 px-4 md:px-10 lg:px-20 pb-20 mt-32">
        {/* Carousel */}
        <div className="col-span-3 relative xl:h-[1000px] 2xl:h-[1300px] md:h-[800px] w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
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
                  className="xl:h-[1000px] 2xl:h-[1300px] md:h-[800px] w-full"
                >
                  <div className="p-1">
                    <AdvancedImage
                      cldImg={imgs[index]}
                      className="w-full h-full object-cover"
                      alt={image.alt}
                      loader={
                        <Skeleton className="bg-gray-200 w-full h-full" />
                      }
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
                <Link
                  to={`/galleries/${image.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="relative w-full max-h-[650px] aspect-[4/3]"
                >
                  <AdvancedImage
                    cldImg={imgs[index]}
                    className="w-full h-full object-cover"
                    alt={image.alt}
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
                {image.id ? (
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
      <div className="fixed bottom-0 left-0 w-full h-12 bg-white shadow-md flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
