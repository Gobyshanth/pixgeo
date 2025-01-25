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
      <div className="relative mt-12 md:hidden flex items-center">
        <ul className="z-1999 fixed w-full p-5 bg-black24 backdrop-blur-lg flex justify-between items-center">
          <li>
            <a href="/" className="flex items-center">
              <div className="rounded-full p-2 bg-black24 backdrop-blur-[25px]">
                <img
                  src={logo}
                  alt="Logo"
                  className="rounded-full w-[50px] h-[50px]"
                />
              </div>
            </a>
          </li>

          <li className="text-black p-5">
            <button onClick={toggleMenu} className="focus:outline-none p-2 rounded-[5px]">
              {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </li>
        </ul>

        {isMenuOpen && (
          <ul className="z-1999 fixed top-[75px] text-left w-[200px] right-0 font-roboto bg-black24 backdrop-blur-lg p-5 flex flex-col space-y-4">
            <a href="/" onClick={toggleMenu} className="text-white">
              <li>Home</li>
            </a>
            <a href="/About" onClick={toggleMenu} className="text-white">
              <li>About Us</li>
            </a>
            <a href="/Services" onClick={toggleMenu} className="text-white">
              <li>Services</li>
            </a>
            <a href="/Contact" onClick={toggleMenu} className="text-white">
              <li>Contact Us</li>
            </a>
          </ul>
        )}
      </div>

      <div className="hidden md:flex justify-center text-center font-roboto md:align-center justify-end">
        <ul className="z-1999 nav fixed text-white flex md:flex-row flex-col m-10 md:rounded-[25.6px] h-[62px] justify-around items-center bg-black24 bg-transparent backdrop-blur-lg mt-[100px]">
          <a href="/" className="mb-3 md:mb-0">
            <li className="text-[20px] md:px-6">Home</li>
          </a>
          <a href="/About"  className="mb-3 md:mb-0">
            <li className="text-[20px] md:px-6">About Us</li>
          </a>
          <a href="/">
            <i className="hidden md:block rounded-[50%] md:left-[0] p-5 flex md:items-center md:w-[110px] md:h-[110px] bg-black24 backdrop-blur-[25px]">
              <img
                src={logo}
                alt="Logo"
                className=" rounded-[50%] md:w-[70px] md:h-[70px] w-[50px] h-[50px]"
              />
            </i>
          </a>
          <a href="/Services" className="mb-3 md:mb-0">
            <li className="text-[20px] md:px-6">Services</li>
          </a>
          <a href="/Contact" className="mb-3 md:mb-0">
            <li className="text-[20px] md:px-6">Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
