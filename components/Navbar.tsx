import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" height={35} width={40} />
          <span className="font-bold ml-2 text-primary">Tech Blog</span>
        </div>
      </Link>

      <ul className="hidden items-center space-x-6 sm:flex">
        <li className="font-medium text-gray-600">
          <Link href="#">Products</Link>
        </li>
        <li className="font-medium text-gray-600">
          <Link href="#">Pricing</Link>
        </li>
        <li className="font-medium text-gray-600">
          <Link href="#">Docs</Link>
        </li>
        <li className="font-medium text-gray-600">
          <Link href="#">Company</Link>
        </li>
      </ul>

      <ul className="flex items-center space-x-6">
        <li className="font-medium text-gray-600">
          <Link href="#" className="hover:text-gray-400">
            Log in
          </Link>
        </li>
        <li className="font-medium text-gray-600">
          <Link
            href="#"
            className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
