import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../assets/fonts/dmsans.css";
import navData from "../../data/NavData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-black shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:p-4">
        <NavLink to="/" className="text-xl font-bold">
          <img
            src="https://res.cloudinary.com/dzpkbej9y/image/upload/v1739981304/Dhruva_iulxia.png"
            alt="Dhruva Logo"
            className="w-20 md:w-[100px]"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-grow justify-center space-x-12">
          {navData.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.route}
                className={({ isActive }) =>
                  `dm-sans text-white md:text-sm lg:text-lg hover:border-orange-400 border-b-2 transition-all duration-300 ${
                    isActive ? "border-orange-400" : "border-transparent"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            <Menu className="w-10 h-10 text-white" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 flex flex-col overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center ps-4 py-4">
          <h2 className="text-white text-xl font-semibold dm-sans">Menu</h2>
          <Button variant="ghost" onClick={toggleMenu}>
            <X className="w-7 h-7 ms-5 flex text-white" />
          </Button>
        </div>

        <ul className="flex flex-col items-start space-y-4 mt-5 px-4">
          {navData.map((item, index) => (
            <li key={index} className="w-full dm-sans">
              <NavLink
                to={item.route}
                className="text-white text-lg hover:text-orange-400 block"
                onClick={toggleMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
