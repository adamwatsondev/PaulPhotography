import { Img } from "react-image"

export default function Footer() {
  return (
    <>
      <div className="flex w-full justify-center px-16 h-40">
       <div className="flex items-center gap-4">

        <a href="https://www.instagram.com/cahill_paul/?hl=en" className="text-gray-900 hover:text-green-700">
          <Img className="h-8 w-8" src="../images/instagram-icon.png" alt="Instagram" />
        </a>
        </div>
        {/* <span className="text-xs flex items-center font-bold leading-tight text-black">
          Developed by Adam Watson
        </span> */}
      </div>
      </>
  )
}