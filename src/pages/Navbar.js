import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <img src="img/black.png" alt="" />
        <div className="social">
          <a href="https://www.instagram.com/redcupbeerbaku/?__coig_restricted=1" className="icons"  rel="noreferrer" target="_blank">
            <AiFillInstagram />
          </a>
          <a href="https://www.tiktok.com/@redcupbeer"  className="icons" rel="noreferrer" target="_blank">
            <FaTiktok />
          </a>
          <a href="https://wa.link/tvhv7l" rel="noreferrer" className="contact" target="_blank">
            Contact
          </a>
        </div>
        </div>
       
    </nav>
  );
}
