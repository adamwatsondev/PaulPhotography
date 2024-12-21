import { Img } from "react-image"

export default function Header() {
  return (
    <>
      <div className="flex w-full justify-between px-16 h-40">
        <span className="text-3xl italic flex items-center font-bold leading-tight text-black">
          Paul Cahill Photography
        </span>
        <nav className="flex items-center space-x-8">
          <a href="/home" className="text-gray-900 hover:text-green-700">
            Home
          </a>
          <a href="/about" className="text-gray-900 hover:text-gray-700">
            About
          </a>
          <a href="/gallery" className="text-gray-900 hover:text-gray-700">
            Gallery
          </a>
          <a href="/contact" className="text-gray-900 hover:text-gray-700">
            Contact
          </a>
          <a href="/basket" className="size-icon">
          <Img src="../images/basket.jpg" alt="Basket" width={30} height={30} />
          </a>
        </nav>
      </div>
      </>
  )
}