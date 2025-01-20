import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Button } from "@/components/ui/nav-button";
import { Link } from "react-router-dom";

export default function Basket() {
  return (
    <div className="flex pb-20">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md h-16">
        <Header />
      </div>

      <div className="grid grid-cols-2 gap-12 2xl:gap-20 items-center justify-center mx-4 xl:mx-40 sm:mx-20 mt-40 xl:mt-60">
        <div className="xl:col-span-1 col-span-2 flex flex-col gap-8">
          <span className="text-black font-old-standard md:text-5xl text-2xl font-bold leading-tight">
            Your basket is empty
          </span>
          <span className="text-black font-old-standard md:text-2xl text-xl font-medium leading-tight">
            You can purchase images from the galleries below.
          </span>
          <Link to="/galleries">
            <Button className="text-white h-12 w-40 font-bold py-2 px-4 rounded-sm">
              <span className="font-old-standard text-xl font-semibold">
                Galleries
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full h-12 bg-white shadow-md flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
