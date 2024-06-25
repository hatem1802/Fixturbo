import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="contact_box gap-3 gap-lg-0 d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap">
            <div className="logo">
              <Link to="/">
                <img src="./images/logo-white.svg" alt="." />
              </Link>
            </div>
            <div className="chat_box d-flex flex-row align-items-center gap-4">
              <div style={{ background: "#ef536d" }} className="chat_icon_box">
                <img src="./images/phone-1.svg" alt="" />
              </div>
              <div className="contact_chat_box">
                <p className="fs-5 m-0">Requesting A Call:</p>
                <a href="tel:+" className="contact_number fs-3">
                  (307) 555-0133
                </a>
              </div>
            </div>
            <div className="icons_box">
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/home?lang=ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="content d-flex justify-content-between flex-row flex-wrap">
            <div className="company">
              <h3>Company</h3>
              <Link to="/">About</Link>
              <br />
              <Link to="/team">Team</Link>
              <br />
              <Link to="/contact">Faq</Link>
              <br />
              <Link to="/about">Privacy Policy</Link>
            </div>
            <div className="Services">
              <h3>Services</h3>
              <Link to="/service">Mechanic Masters</Link>
              <br />
              <Link to="/service">Speedy Auto Repair</Link>
              <br />
              <Link to="/service">Mobile Car Repair</Link>
              <br />
              <Link to="/service">Pro Auto Fix</Link>
              <br />
              <Link to="/service">Precision Auto Works</Link>
            </div>
            <div className="Contact">
              <h3>Contact</h3>
              <a href="tel:+">(+888) 123 456 765</a>
              <br />
              <a href="mailto:">infoname@mail.com</a>
              <br />
              <p>
                Old city Street, USA <br /> 1212 New york-3500
              </p>
            </div>
            <div className="get_in_touch d-flex flex-column gap-4 p-3 p-sm-5">
              <h3 className="p-0">Get In Touch</h3>
              <p style={{ fontSize: "1.2rem", fontWeight: "900" }}>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Temporibus,
              </p>
              <form className="d-flex">
                <input
                  style={{ flexGrow: "1" }}
                  type="email"
                  placeholder="Your Email Address"
                />
                <button className="btn">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
