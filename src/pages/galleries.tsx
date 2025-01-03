import { Link } from "react-router-dom";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Galleries() {
  const imagesArray = [
    {
      src: "..\\images\\brighton\\1.jpg",
      title: "Brighton",
      alt: "Brighton",
    },
    {
      src: "..\\images\\Protest\\1.jpg",
      title: "Protest",
      alt: "Protest",
    },
    {
      src: "..\\images\\Grayscale\\1.jpg",
      title: "Grayscale",
      alt: "Grayscale",
    },
    {
      src: "..\\images\\Brighton Beach\\1.jpg",
      title: "Brighton Beach",
      alt: "Brighton Beach",
    },
    {
      src: "..\\images\\Pride\\1.jpg",
      title: "Pride",
      alt: "Pride",
    },
    {
      src: "..\\images\\Birds\\1.jpg",
      title: "Birds",
      alt: "Birds",
    },
  ];

  return (
    <div className="flex pb-20">
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center px-10 lg:px-20 pb-20 mt-32">
        <span className="text-5xl font-bold text-center font-old-standard text-black mb-8">
          Galleries
        </span>

        <div className="grid lg:grid-cols-3 gap-8">
          {imagesArray.map((image, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Wrap the image in a Link component to route to the gallery item */}
              <Link
                to={`/galleries/${image.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                <img
                  className="w-full h-[200px] md:h-[500px]"
                  src={image.src}
                  alt={image.alt}
                />
              </Link>
              <span className="text-3xl font-old-standard text-center font-bold leading-tight text-black">
                {image.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full overflow-hidden">
        <Footer />
      </div>
    </div>
  );
}
