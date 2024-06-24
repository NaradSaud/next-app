"use client"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-400 p-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <ul className="flex flex-wrap justify-center space-x-4 mb-4">
          <li>
            <Link href="/" className="block hover:bg-teal-950 p-2 rounded-md">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block hover:bg-teal-950 p-2 rounded-md">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="block hover:bg-teal-950 p-2 rounded-md">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:bg-teal-950 p-2 rounded-md">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block hover:bg-teal-950 p-2 rounded-md">
              Blog
            </Link>
          </li>
        </ul>
        <p className="text-sm">&copy; 2024 Creative Home Remedies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
