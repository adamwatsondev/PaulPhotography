import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Home() {
    // const [selectedImage, setSelectedImage] = useState(null);
  // const openFullscreen = (imageUrl) => {
  //     setSelectedImage(imageUrl);
  //   };

  //   const closeFullscreen = () => {
  //     setSelectedImage(null);
  //   };

return (
  <div>
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
      <Header />
    </div>

    <div className="absolute bottom-0 w-full">
              <Footer />
              </div>
  </div>
)

}


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