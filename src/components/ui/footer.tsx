import { Img } from "react-image"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <>
      <div className="flex w-full justify-between px-4 sm:px-16 h-12 items-center bg-white shadow-md">
       <div className="flex items-center gap-4 justify-center">

        <Link to="https://www.instagram.com/cahill_paul/?hl=en" className="text-black bg-white focus:outline-none"> 
          <Img className="h-4 w-4" src="../images/instagram-icon.png" alt="Instagram" />
        </Link>
        <span className="text-black text-sm items-center font-old-standard">
          Copyright Paul Cahill
          </span>
        </div>
      </div>

      </>
  )
}

