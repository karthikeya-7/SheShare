import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import { UserNav } from "./UserNav";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
         <h1 className="text-3xl text-black berkshire-swash-regular md:text-4xl">
          She<span className="text-rose-600">Share</span> Vacation <span className="text-rose-600">Rentals</span>
         </h1>
        </Link>


        <UserNav />
      </div>
    </nav>
  );
}