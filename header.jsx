'use client'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-custom-gradient shadow-md">
      <div className="flex items-center">
        <img src="/Logo4.png" alt="Logo" className="w-16 sm:w-20 md:w-24 h-auto mx-3 rounded-xl" />
      </div>

      <div className="relative w-52 sm:w-64 md:w-72 flex-grow max-w-md mx-4">
        <input
          className="h-10 sm:h-12 w-full pl-10 pr-4 placeholder:text-sm sm:placeholder:text-lg placeholder-slate-600 border text-black bg-gradient-to-r from-[#cfeba8] to-[#F9E165] rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Search your fav dabbawala"
        />
        <img src="/search.png" alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 sm:w-6 h-auto opacity-80" />
      </div>

      <nav className="hidden md:flex items-center ml-5 gap-6 lg:gap-9">
        <Link href="/login" className="mx-2 flex items-center text-[#72A32F] hover:text-green-900">
          <img src="/Login.png" alt="Login" className="w-8 sm:w-10 h-auto" />
          <span className="text-base sm:text-lg ml-2">Login</span>
        </Link>

        <Link href="/order-tracking" className="mx-2 flex items-center text-[#72A32F] hover:text-green-900">
          <img src="/fast-delivery.png" alt="Track Order" className="w-10 sm:w-12 h-auto" />
          <span className="text-base sm:text-lg ml-2 min-w-20">Track my order</span>
        </Link>

        <button className="flex items-center text-[#72A32F] px-3 sm:px-2 py-2 rounded-full hover:text-green-900">
          <img src="/Dabba Icon.png" alt="Dabbawala" className="w-6 sm:w-8 h-auto" />
          <span className="text-left text-base sm:text-lg ml-2">Become a <br /> Dabbawalla</span>
        </button>
      </nav>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
        <img src="icons8-menu.svg" alt="Menu" className="w-8 h-auto mr-4" />
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full rounded-3xl  bg-lime-100 shadow-lg flex flex-col items-center py-4 z-50">
          <Link href="/login" className="flex items-center text-[#72A32F] hover:text-green-900 py-2">
            <img src="/Login.png" alt="Login" className="w-8 h-auto" />
            <span className="text-lg ml-2">Login</span>
          </Link>

          <Link href="/order-tracking" className="flex items-center text-[#72A32F] hover:text-green-900 py-2">
            <img src="/fast-delivery.png" alt="Track Order" className="w-10 h-auto" />
            <span className="text-lg ml-2">Track my order</span>
          </Link>

          <button className="flex items-center text-[#72A32F] py-2 hover:text-green-900">
            <img src="/Dabba Icon.png" alt="Dabbawala" className="w-8 h-auto" />
            <span className="text-lg ml-2">Become a Dabbawalla</span>
          </button>
        </div>
      )}
    </header>
  );
}
