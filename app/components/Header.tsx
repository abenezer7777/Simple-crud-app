"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Footer from "./Footer";
const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    // {
    //   label: "Posts",
    //   href: "/posts",
    // },
    {
      label: "Crud With DB",
      href: "/crud",
    },
    {
      label: "Crud Without DB",
      href: "/crudwithoutdb",
    },
  ];

  useEffect(() => {
    // Close the slide bar when the pathname changes
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="fixed right-0 top-0">
      <button
        className="lg:hidden  bg-lime-500 text-white py-2 px-4 rounded"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </button>
      <div
        className={`fixed top-0 left-0 bg-sky-700 w-64 p-2 h-screen pt-28 overflow-hidden transition-transform text-center duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full h-screen"
        } lg:translate-x-0 lg:w-64 lg:h-screen lg:overflow-visible`}
      >
        <ul className="space-y-4  text-white   ">
          {navItems.map((link, index) => (
            <li
              className={`w-full py-2 hover:bg-lime-500 text-lg ${
                pathname === link.href ? "text-blue-500 font-bold" : ""
              }`}
              key={index}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-28 border-t border-gray-300">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Header;
