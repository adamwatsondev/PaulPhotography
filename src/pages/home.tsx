import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {

  
  // const [selectedImage, setSelectedImage] = useState(null);
  // const openFullscreen = (imageUrl) => {
  //     setSelectedImage(imageUrl);
  //   };

  //   const closeFullscreen = () => {
  //     setSelectedImage(null);
  //   };

return (
  <div className="flex flex-col gap-4">
  <div>
    <Header />
    </div>
              {/* Hero Section */}
              <div className="relative">
<span className="flex h-40 w-full items-center p-4 rounded-sm bg-gradient-to-r from-gray-500 to-white-500 opacity-80">
  <div className="flex flex-col">
  <span className="text-white text-3xl font-bold">
    Paul Cahill Photography
  </span>
  <span className="text-white text-md font-md">
    Brighton Based Photography Services
  </span>
  </div>
</span>
          </div>

          <div className="absolute bottom-0 w-full">
                    <Footer />
                    </div>

      {/* Fullscreen Modal */}
      {/* {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999',
          }}
          onClick={closeFullscreen}
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
        </div>
      )} */}
          </div>
)

}