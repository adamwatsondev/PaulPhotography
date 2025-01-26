import { Link } from "react-router-dom";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import imagesArray from "@/data/imagesArray";
import { Skeleton } from "@/components/ui/skeleton";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from "@cloudinary/react";

export default function Galleries() {
  const cld = new Cloudinary({
    cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_KEY },
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
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md h-16">
        <Header />
      </div>

      <div className="flex flex-col px-4 md:px-10 lg:px-20 pb-20 mt-32">
        <span className="text-5xl font-bold text-center font-old-standard text-black mb-8">
          Galleries
        </span>

        {/* Galleries Grid */}
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
                <AdvancedImage
                  cldImg={imgs[index]}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full max-h-[650px] object-cover"
                  loader={
                    <Skeleton className="absolute inset-0 w-full max-h-[650px] h-full bg-gray-200" />
                  }
                  unloader={
                    <div className="absolute inset-0 w-full h-full bg-gray-300 max-h-[650px] flex items-center justify-center">
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

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full h-12 bg-white shadow-md flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
