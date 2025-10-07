"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);
  const [mobileSportsOpen, setMobileSportsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sports", href: "/sports" },
    { name: "Location", href: "/location" },
    { name: "Contact", href: "/contact" },
  ];

  const sportsLinks = [
    { name: "Football", href: "/sports/football" },
    { name: "Tennis", href: "/sports/tennis" },
    { name: "Formula 1", href: "/sports/f1" },
    { name: "Rugby", href: "/sports/rugby" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 top-6 w-[90%] max-w-7xl z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#9C0033]/95 shadow-lg"
          : "bg-white/20 backdrop-blur-md border border-white/30"
      } rounded-2xl`}
    >
      <div className="flex items-center justify-between px-6 h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/sportcationlogo.png"
            alt="Sportcation Logo"
            width={160}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 font-medium text-sm text-white relative">
          {navLinks.map((link) =>
            link.name === "Sports" ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setSportsOpen(true)}
                onMouseLeave={() => setSportsOpen(false)}
              >
                <button className="flex items-center gap-1 transition-colors duration-300 group-hover:text-[#F4C2C2]">
                  {link.name}
                  <ChevronDown size={16} />
                </button>
                {sportsOpen && (
                  <div className="absolute top-full mt-2 bg-[#9C0033] rounded-xl shadow-lg py-2 w-40 border border-[#F4C2C2]/30">
                    {sportsLinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 text-white hover:bg-[#7A0028] transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.name} href={link.href} className="relative group">
                <span className="transition-colors duration-300 group-hover:text-[#F4C2C2]">
                  {link.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F4C2C2] transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </div>

        {/* Book Now Button (desktop – rounded edges) */}
        <div className="hidden md:flex">
          <Link
            href="/book"
            className="relative overflow-hidden bg-[#F4C2C2] text-[#9C0033] font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 group"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-[#9C0033] translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
            <span className="absolute inset-0 text-[#F4C2C2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              Book Now
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#9C0033] rounded-b-2xl px-6 py-4 space-y-4 text-white">
          {navLinks.map((link) =>
            link.name === "Sports" ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileSportsOpen(!mobileSportsOpen)}
                  className="flex items-center justify-between w-full transition-colors hover:text-[#F4C2C2]"
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      mobileSportsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSportsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {sportsLinks.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        onClick={() => setIsOpen(false)}
                        className="block transition-colors hover:text-[#F4C2C2]"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block transition-colors duration-300 hover:text-[#F4C2C2]"
              >
                {link.name}
              </Link>
            )
          )}

          {/* Book Now (mobile – rounded edges) */}
          <div className="pt-4">
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#F4C2C2] text-[#9C0033] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#f7d2d2] transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
