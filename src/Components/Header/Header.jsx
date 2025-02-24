import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.webp";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

          <li className="text-white">
            <button onClick={toggleMenu} className="focus:outline-none p-2 rounded-[5px] bg-black24 backdrop-blur-[25px]">
              {isMenuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
            </button>
          </li>
        </ul>

        {isMenuOpen && (
          <ul className="z-1999 fixed top-[75px] text-left w-[200px] right-0 font-roboto bg-white/10 backdrop-blur-lg flex flex-col ">
            <a href="/" onClick={toggleMenu} className="text-white hover:bg-black24 transfom bg-cover p-5">
              <li>Home</li>
            </a>
            <a href="/About" onClick={toggleMenu} className="text-white hover:bg-black24 bg-cover p-5">
              <li>About Us</li>
            </a>
            <a href="/Services" onClick={toggleMenu} className="text-white hover:bg-black24 bg-cover p-5">
              <li>Services</li>
            </a>
            <a href="/Contact" onClick={toggleMenu} className="text-white hover:bg-black24 bg-cover p-5">
              <li>Contact Us</li>
            </a>
          </ul>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center text-center font-roboto align-center">
      <ul className="z-1999 nav fixed text-white flex md:flex-row flex-col m-10 md:rounded-[25.6px] h-[62px] justify-around items-center bg-white/10 backdrop-blur-lg mt-[100px]">

          <a href="/" className="hover:bg-black24 rounded-l-[25.6px] py-[16px]">
            <li className="text-[20px] px-6">Home</li>
          </a>
          <a href="/About" className="hover:bg-black24 py-[16px]">
            <li className="text-[20px] px-6">About Us</li>
          </a>
          <a href="/" className="mx-5">
            <i className="rounded-[50%] md:left-[0] p-5 flex md:items-center w-[110px] h-[110px] bg-white/80 backdrop-blur-[25px]">
              <img
                src={logo}
                alt="Logo"
                className="rounded-[50%] w-[70px] h-[70px]"
              />
            </i>
          </a>
          <a href="/Services" className="hover:bg-black24 hover:backdrop-blur-[25px] py-[16px]">
            <li className="text-[20px] px-6">Services</li>
          </a>
          <a href="/Contact" className="hover:bg-black24 bg-cover rounded-r-[25.6px] py-[16px]">
            <li className="text-[20px] px-6">Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};