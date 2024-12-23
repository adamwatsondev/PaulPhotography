import { Link } from 'react-router-dom';
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";


export default function Gallery() {

  const imagesArray = [
    { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bQBtxkFLMZFDTGQ?embed=1&width=3000&height=2256", alt: "Brighton Pier", title: "Gallery 1" },
    { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0biW2lQw8rKSqEz0?embed=1&width=4271&height=2834", alt: "Brighton Beach", title: "Gallery 2" },
    { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0bw3_MuebDvRG42g?embed=1&width=2000&height=1334", alt: "Brighton Marina", title: "Gallery 3" },
    { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0gUqpfWesVFGyGGPS?embed=1&width=1320&height=880", alt: "Brighton Pier", title: "Gallery 4" },
    { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0gUvklDnfC_DgEutR?embed=1&width=768&height=512", alt: "Brighton Beach", title: "Gallery 5" },
    { src: "https://1drv.ms/i/s!Aq0_P5Zt_OP0gUx9AsXyczqjXudC?embed=1&width=700&height=1244", alt: "Brighton Marina", title: "Gallery 6" }
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
        <Header />
      </div>

      <div className="flex flex-col items-center justify-center px-20 pb-20 gap-20 space-y-6 mt-48">
        <div className="grid grid-cols-3 gap-8 w-full">
          {imagesArray.map((image, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Wrap the image in a Link component to route to the gallery item */}
              <Link to={`/gallery/${index + 1}`}>
                <img className="w-full h-[600px]" src={image.src} alt={image.alt} />
              </Link>
              <span className="text-3xl font-old-standard text-center font-bold leading-tight text-black">
                {image.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
