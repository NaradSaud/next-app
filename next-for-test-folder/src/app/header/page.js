"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = "https://www.shutterstock.com/shutterstock/photos/2359248611/display_1500/stock-vector-creative-home-remedies-logo-design-2359248611.jpg";

  return (
    <nav className="bg-blue-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <img src={imageUrl} alt="Logo" className="h-16 w-16 object-contain cursor-pointer rounded-full" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
          <ul className="text-white lg:flex lg:space-x-4 lg:ml-auto">
            <li>
              <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:bg-teal-950 p-2 rounded-md">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:bg-teal-950 p-2 rounded-md">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 hover:bg-teal-950 p-2 rounded-md">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 hover:bg-teal-950 p-2 rounded-md">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="block mt-4 lg:inline-block lg:mt-0 hover:bg-teal-950 p-2 rounded-md">
                Login/SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;