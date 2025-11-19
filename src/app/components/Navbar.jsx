'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image';
import Logo from '../../../public/images/logo.png'

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] text-white">
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        <Link href="/">
          <Image className="m-2" src={Logo} alt="logo" width={50} height={50} />
        </Link>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="relative w-10 h-10 flex flex-col justify-center items-center group"
            aria-label='Toggle menu'
          >
            {/* Top bar */}
            <span
              className={`block w-8 h-0.5 bg-white rounded-sm transform transition duration-300 ease-in-out 
                ${navbarOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}
              `}
            />
            {/* Middle bar */}
            <span
              className={`block w-8 h-0.5 bg-white rounded-sm my-0.5 transition-all duration-300 ease-in-out 
                ${navbarOpen ? "opacity-0" : "opacity-100"}
              `}
            />
            {/* Bottom bar */}
            <span
              className={`block w-8 h-0.5 bg-white rounded-sm transform transition duration-300 ease-in-out 
                ${navbarOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}
              `}
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="md:hidden">
          <MenuOverlay links={navLinks} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
