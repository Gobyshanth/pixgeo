import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../public/assets/logo.webp";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "bg-white/15 h-[58px] rounded-lg" : "";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="m-0 p-0">
      {/* Mobile Menu */}
      <div className="relative mt-12 md:hidden flex items-center">
        <ul className="z-1999 fixed w-full p-5 bg-white/10 backdrop-blur-lg flex justify-between items-center">
          <li>
            <a href="/" className="flex items-center">
              <div className="rounded-full p-2 bg-white/10 backdrop-blur-[25px]">
                <img
                  src={logo}
                  alt="Logo"
                  className="rounded-full w-[40px] h-[40px]"
                />
              </div>
            </a>
          </li>

          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-[5px] bg-black-400 backdrop-blur-[20px]"
          >
            {isMenuOpen ? (
              <FiX size={20} className="text-white" />
            ) : (
              <FiMenu size={20} className="text-white" />
            )}
          </button>
        </ul>

        {isMenuOpen && (
          <ul
            ref={menuRef}
            className="z-1999 fixed top-[75px] text-left w-[200px] right-0 font-roboto bg-white/10 backdrop-blur-lg flex flex-col"
          >
            <a
              href="/"
              onClick={toggleMenu}
              className={`text-white hover:bg-[#141414] transform bg-cover p-5 ${isActive(
                "/"
              )}`}
            >
              <li>Home</li>
            </a>
            <a
              href="/About"
              onClick={toggleMenu}
              className={`text-white hover:bg-[#141414] bg-cover p-5 ${isActive(
                "/About"
              )}`}
            >
              <li>About Us</li>
            </a>
            <a
              href="/Services"
              onClick={toggleMenu}
              className={`text-white hover:bg-[#141414] bg-cover p-5 ${isActive(
                "/Services"
              )}`}
            >
              <li>Services</li>
            </a>
            <a
              href="/Contact"
              onClick={toggleMenu}
              className={`text-white hover:bg-[#141414] h-[58px] rounded-lg transform bg-cover p-5 ${isActive(
                "/Contact"
              )}`}
            >
              <li>Contact Us</li>
            </a>
          </ul>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center text-center font-roboto align-center">
        <ul className="z-1999 nav fixed text-white flex md:flex-row flex-col m-10 md:rounded-[25.6px] h-[62px] justify-around items-center bg-white/10 backdrop-blur-lg mt-[100px]">
          <a
            href="/"
            className={`hover:bg-black24 rounded-l-[25.6px] py-[16px] ${isActive(
              "/"
            )}`}
          >
            <li className="text-[20px] px-6">Home</li>
          </a>
          <a
            href="/About"
            className={`hover:bg-black24 py-[16px] ${isActive("/About")}`}
          >
            <li className="text-[20px] px-6">About Us</li>
          </a>
          <a href="/" className="mx-5">
            <img
              src={logo}
              alt="Logo"
              className="rounded-[50%] w-[100px] h-[100px]"
            />
          </a>
          <a
            href="/Services"
            className={`hover:bg-black24 py-[16px] ${isActive("/Services")}`}
          >
            <li className="text-[20px] px-6">Services</li>
          </a>
          <a
            href="/Contact"
            className={`hover:bg-black24 bg-cover rounded-r-[25.6px] py-[16px] ${isActive(
              "/Contact"
            )}`}
          >
            <li className="text-[20px] px-6">Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};