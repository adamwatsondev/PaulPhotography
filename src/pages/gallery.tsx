import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {

return (
  <div>
    <Header />
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Gallery
        </h1>
      </div>
    </div>

    <div className="absolute bottom-0 w-full">
              <Footer />
              </div>
  </div>
)

}