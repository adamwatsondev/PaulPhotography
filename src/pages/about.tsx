import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Img } from "react-image"
import { Link } from "react-router-dom";


export default function Home() {

return (
    <div className="flex flex-col gap-20">
    <Header />
    
    <div className="flex px-96 gap-20">
        <Img 
        className="rounded-none h-96 w-96 object-cover"
          src="..\images\person.jpeg"
          alt="Photographer" 
          width={100} height={100}
        />
      <span className="text-gray-900 text-xl font-bold leading-tight">
      Photography is my way of expressing creativity. Being able to capture a moment in time and having that same moment last a lifetime is what drives me. Photography has allowed me to travel and capture the beautiful landscapes the world has to offer. Even though photography is a passion of mine, I spent my college years studying and eventually graduating from University of Houston with a degree in Computer Information Systems. The world of IT has taught me that you never stop learning, no matter how experienced you are. Every shoot is an opportunity to learn something new.
      I primarily shoot digitally with a Sony A7iii. My portfolio showcases my favorite images from the past few years. I mainly shoot landscape, cityscape, portraiture, and nature subjects. However, I am open to shooting anything and everything I can possible! I am available for private sessions and events in the Houston area. Feel free to contact me if you have questions or want to book a session.
      </span>
    </div>
    
    <div className="flex justify-center">
        <Link to="/contact">
        <Button>
            Get in touch
        </Button>
        </Link>
    </div>

    <div className="absolute bottom-0 w-full">
              <Footer />
              </div>
    </div>
)

}