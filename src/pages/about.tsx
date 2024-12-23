import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/nav-button";
import { Img } from "react-image"
import { Link } from "react-router-dom";


export default function Home() {

return (
    <div className="flex flex-col gap-8 md:gap-20 pb-20">
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
      <Header />
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center px-4 space-y-6 mt-40 md:mt-80">
    <div className="col-start-1 col-span-3 md:col-span-2 lg:col-start-2 lg:col-span-1 flex flex-col items-center">
        <Img
        className="rounded-none h-96 w-96 md:h-[600px] md:w-[600px] object-cover"
          src="..\images\person.jpeg"
          alt="Photographer" 
          width={100} height={100}
        />
        </div>
        <div className="col-start-3 lg:col-span-1 md:col-span-2 flex flex-col gap-4 items-start">
        <span className="text-gray-900 text-3xl font-bold leading-tight">
      Hi, I'm Paul Cahill
       </span>
      <span className="text-gray-900 text-xl font-medium leading-tight">
      From Dublin living in Brighton, the majority of my images are made locally, with emphasis on seascapes and street photography. I’ve had images published in National and local newspapers. I’ve also had some of my work highly commended,and featured in the British Life Photography Awards book, and exhibition which toured the country.
       </span>
    </div>
    </div>

    
    <div className="flex justify-center">
        <Link to="/contact">
        <Button className="text-white h-12 w-40 font-bold py-2 px-4 rounded-sm">
            <span className="text-white text-lg font-md">
            Get in touch
            </span>
        </Button>
        </Link>
    </div>

    <div className="fixed bottom-0 w-full">
              <Footer />
              </div>
    </div>
)

}