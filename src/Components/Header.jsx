import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Header = () => {
  const {totalItems} = useCart()
  const [Projects, setProjects] = useState(false);
  const [Services, setServices] = useState(false);
  const [Pages, setPages] = useState(false);

  const toggleProjects = () => {
    setProjects(!Projects);
  };
  const toggleServices = () => {
    setServices(!Services);
  };
  const togglePages = () => {
    setPages(!Pages);
  };
  // fixed navbar when scrolling
  window.onscroll = () => {
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    let scrollY = window.scrollY;

    if (scrollY >= 300) {
      nav.classList.add("fixed_nav");
      body.style = "padding: 6rem 0 0 0";
    }

    if (scrollY <= 300) {
      nav.classList.remove("fixed_nav");
      body.style = "padding: 0 0 0 0";
    }
  };
  // open navbar of mobile with animation
  function openNavMobile() {
    const mobileNav = document.querySelector(".mobile_nav");
    mobileNav.classList.add("show");
    mobileNav.classList.remove("hide");
  }
  // close navbar of mobile with animation
  function closeNavMobile() {
    const mobileNav = document.querySelector(".mobile_nav");
    mobileNav.classList.add("hide");
  }

  return (
    <>
      <div className="contact_info">
        <div className="contact_address d-none d-xl-flex gap-5 ">
          <a href="mailto:" className="email_contact">
            <i
              style={{ color: "#e8092e" }}
              className="fa-solid fa-envelope me-2"
            ></i>
            info@example.com
          </a>
          <div className="location_contact" style={{ color: "white" }}>
            <i
              style={{ color: "#e8092e" }}
              className="fa-solid fa-location-dot me-2"
            ></i>
            6391 Elgin St. Celina, 10299
          </div>
          <div className="clock_contact" style={{ color: "white" }}>
            <i
              style={{ color: "#e8092e" }}
              className="fa-solid fa-clock me-2"
            ></i>
            Sunday - Friday
          </div>
        </div>
        <div className="icon_contact_box me-xl-5 mx-auto">
          <a rel="noreferrer" target="_blank" href="http://www.facebook.com">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="http://www.instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="http://www.twitter.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a rel="noreferrer" target="_blank" href="http://www.linkedin.com">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      {/* =========desktop navbar=========== */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 pe-4">
        <div className="navbar-back ms-lg-0"></div>
        <Link
          style={{ maxWidth: "90%" }}
          className="navbar-brand me-lg-0"
          to="/"
        >
          <img src="./images/logo-white.svg" alt="" />
        </Link>
        <button onClick={openNavMobile} className="navbar-toggler me-2 me-sm-5">
          <span>
            <i
              style={{ color: "white", width: "14px" }}
              className="fas fa-bars"
            ></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3 ms-3 p-0">
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/service">
                    Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services_details">
                    Service Details
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Projects
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/projects_details">
                    Projects Details
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/team">
                    Team Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/shop">
                    Shop Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/check_out">
                    Check Out
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cart">
                    Cart <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i> ({totalItems})
              </Link>
            </li>
          </ul>
          <div className="chat d-none d-xl-flex justify-content-center gap-3 m-auto align-items-center">
            <div className="$icon">
              <img src="./images/chat (1).svg" alt="" />
            </div>
            <div className="$contact">
              <h5 className="m-0">Need help?</h5>
              <a href="tel:+" className="contact_number fs-5">
                (307) 555-0133
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* =========mobile navbar=========== */}
      <nav className="mobile_nav">
        <div className="nav_content">
          <div className="nav_head d-flex">
            <div className="logo">
              <Link to="/">
                <img src="./images/logo-black.svg" alt="" />
              </Link>
            </div>
            <button
              onClick={closeNavMobile}
              className="close_btn d-flex justify-content-center align-items-center"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="nav_list">
            <ul style={{ fontWeight: "500", fontSize: "1.1rem" }}>
              {/* list item 1 */}
              <li>
                <Link to="/">Home</Link>
              </li>

              <hr />
              {/* list item 2 */}
              <li>
                <Link to="/about">About</Link>
              </li>
              <hr />
              {/* list item 3 */}
              <li>
                <button
                  style={{ color: `${Projects ? "#e8092e" : "black"}` }}
                  onClick={toggleProjects}
                  aria-controls="example-collapse-text"
                  aria-expanded={Projects ? "true" : "false"}
                >
                  Projects
                  <i className={`fa-solid fa-angle-down fa-xs`}></i>
                </button>
                <hr />
                <div
                  className={`collapse ${Projects ? "show" : ""}`}
                  id="example-collapse-text"
                >
                  <div>
                    <ul>
                      <li style={{ padding: "0 1.4rem" }}>
                        <Link to="/projects">Project</Link>
                      </li>
                      <hr />
                      <li style={{ padding: "0 1.4rem" }}>
                        <Link to="/projects_details">Project Details</Link>
                      </li>
                      <hr />
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <button
                  style={{ color: `${Services ? "#e8092e" : "black"}` }}
                  onClick={toggleServices}
                  aria-controls="example-collapse-text"
                  aria-expanded={Services ? "true" : "false"}
                >
                  Services
                  <i className="fa-solid fa-angle-down fa-xs"></i>
                </button>
                <hr />
                <div
                  className={`collapse ${Services ? "show" : ""}`}
                  id="example-collapse-text"
                >
                  <div>
                    <ul>
                      <li style={{ padding: "0 1.4rem" }}>
                        <Link to="/service">Service</Link>
                      </li>
                      <hr />
                      <li style={{ padding: "0 1.4rem" }}>
                        <Link to="/services_details">Service Details</Link>
                      </li>
                      <hr />
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <button
                  style={{ color: `${Pages ? "#e8092e" : "black"}` }}
                  onClick={togglePages}
                  aria-controls="example-collapse-text"
                  aria-expanded={Pages ? "true" : "false"}
                >
                  Pages
                  <i className={`fa-solid fa-angle-down fa-xs`}></i>
                </button>
                <hr />
                <div
                  className={`collapse ${Pages ? "show" : ""}`}
                  id="example-collapse-text"
                >
                  <div>
                    <ul>
                      <li style={{ padding: "0 1.4rem" }}>
                        <Link to="/team">Team Page</Link>
                      </li>
                      <hr />
                      <li style={{ padding: "0 1.4rem" }}>
                        <Link to="/shop">Shop Page</Link>
                      </li>
                      <hr />
                      <li style={{ padding: "0 1.4rem" }}>
                        <Link to="/check_out">Check Out</Link>
                      </li>
                      <hr />
                      <li style={{ padding: "0 1.4rem" }}>
                        <Link to="/cart">
                          Cart <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                      </li>
                      <hr />
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <hr />
              <li>
                <Link to="/cart">
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
