import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/nav-button";
import { Img } from "react-image";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex pb-20">
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md overflow-hidden">
        <Header />
      </div>

      <div className="grid grid-cols-2 gap-12 2xl:gap-20 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-40">
        <div className="xl:col-span-1 col-span-2">
          <Img
            src="..\images\profile-photo.jpg"
            alt="Photographer"
            width={5417}
            height={3555}
          />
        </div>
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <span className="text-black font-old-standard md:text-5xl text-2xl font-bold leading-tight">
            Hi, I'm Paul Cahill
          </span>
          <span className="text-black font-old-standard md:text-2xl text-xl font-medium leading-tight">
            I’m originally from Dublin and currently live in Brighton. The
            majority of my images are taken locally, with an emphasis on
            seascapes and street photography. Some of my images have been
            published in national and local newspapers. I’ve also had some of my
            work highly commended and featured in the British Life Photography
            Awards book and exhibition, which toured the country.
          </span>
          <Link to="/contact">
            <Button className="text-white h-12 w-40 font-bold py-2 px-4 rounded-sm">
              <span className="font-old-standard text-xl font-semibold">
                Get in touch
              </span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
