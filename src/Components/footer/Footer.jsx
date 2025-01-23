import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareFacebook, faSquareInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex bg-black flex-col font-Courier p-10">
    <div className="flex flex-col justify-around text-white gap-5 md:gap-12 md:flex-row">
      <div className="email md:w-1/4">
        <a href="company@gmail.com">Email Us: company@gmail.com</a>
      </div>
      <div className="text-white md:w-1/6">
        <a href="tp:+94754788382">Call Us: +94754788382</a>
      </div>
      <div className="text-white md:w-1/4">
        <ul className="flex flex-col text-white sm:flex-row">
          <a className="flex" href="/">
            <li>Home</li> <span className="px-2 hidden sm:block">|</span>
          </a>
          <a className="flex" href="/About">
            <li>About Us</li> <span className="px-2 hidden sm:block">|</span>
          </a>
          <a className="flex" href="/Services">
            <li>Sevices</li> <span className="px-2 hidden sm:block">|</span>
          </a>
          <a href="/Contact">
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:items-center md:pl-20">
      <div className="flex gap-5 py-5 md:py-8 text-white text-3xl md:w-1/3">
        <a className="facebook" href='#'>
          <li className="list-none flex gap-4 "><FontAwesomeIcon icon={faSquareFacebook} /></li>
        </a>
        <a className="insta" href='#'>
          <li className="list-none flex gap-4 "><FontAwesomeIcon icon={faSquareInstagram} /></li>
        </a>
        <a className="linkedin" href='#'>
          <li className="list-none flex gap-4 "><FontAwesomeIcon icon={faLinkedin} /></li>
        </a>
      </div>

      <div className="py-2 md:py-8 md:w-1/4">
        <ul>
          <li className="text-yellow-300 md:text-center">privacy policy</li>
        </ul>
      </div>
    </div>

    <div className="footer-third-line">
      <div className="text-white md:text-center font-Courier">
        <p>&copy; {currentYear} company name. All Right Reserved</p>
      </div>
    </div>
  </div>
  );
};
