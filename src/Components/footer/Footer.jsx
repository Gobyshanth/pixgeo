import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-first-line">
        <div className="email">
          <a href="company@gmail.com">Email Us: company@gmail.com</a>
        </div>
        <div className="call">
          <a href="tp:+94754788382">Call Us: +94754788382</a>
        </div>
        <div className="footer-navbar">
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/About">
              <li>About Us</li>
            </a>
            <a href="/Services">
              <li>Sevices</li>
            </a>
            <a href="/Contact">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="footer-second-line">
        <div className="social-media">
          <div className="facebook">
            <i></i>
          </div>
          <div className="insta">
            <i></i>
          </div>
          <div className="linkedin">
            <i></i>
          </div>
        </div>

        <div className="footer-items">
          <ul>
            <li>privacy policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-third-line">
        <div className="rights">
          <p>company name. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};
