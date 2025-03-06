'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Nav = () => {

    const [isClick, setisClick] = useState(false);
    
     function toggleNavbar(){
        setisClick(!isClick)
     }

    return ( 
        <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="Flex items-center ">
        <div className="Flex-shrink-0">
        <Link href="/" className="text-black ">
        <Image 
        src="/25-media-logo.png" 
        alt="Description of image" 
        width={150} 
        height={50} 
      />
        </Link>
        </div>
        </div>
        <div className="hidden md:block">
        <div className="ml-4 flex items-center space-x-4">
        <Link href="/" className="text-black hover:bg-white hover: text-black rounded-lg p-2">
            Home
        </Link>
        <Link href="/services" className="text-black hover:bg-white hover: text-black rounded-lg p-2">
            Services
        </Link>
        <Link href="/about" className="text-black hover:bg-white hover: text-black rounded-lg p-2">
            About Us
        </Link>
        <Link href="/contact" className="text-black hover:bg-white hover: text-black rounded-lg p-2">
            Contact Us 
        </Link>
        </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover: text-wh:
            focus: outline-none focus:ring-2 focus:ring-inset ■focus:ring-black"
            onClick={toggleNavbar}>
                {isClick ? (
                    <svg 
                    className="h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6L18 18" />
                  </svg>
                  
                ):(
                    <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                )}
            </button>
        </div>
        </div>
        </div>
        {isClick && (
         <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm: px-3">
          <Link href="/" className="text-black block hover:bg-white hover: text-black rounded-lg p-2">
            Home
        </Link>
        <Link href="/" className="text-black block hover:bg-white hover: text-black rounded-lg p-2">
            Services
        </Link>
        <Link href="/" className="text-black block hover:bg-white hover: text-black rounded-lg p-2">
            About Us
        </Link>
          </div>
          </div>
          )}
        </nav>
    );
}

export default Nav ;