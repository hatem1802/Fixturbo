import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ToTop from "../Components/ToTop";
import SubPage_head from "../Components/SubPage_head";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Loader from "../Components/Loader";

const ContactPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      {/* head section */}
      <SubPage_head title="Contact" />
      {/* contact section */}
      <section className="contacts-c" style={{ padding: "7rem 0" }}>
        <div className="container d-flex justify-content-center flex-wrap">
          <div className="contact_item">
            <i className="fa-solid fa-location-dot"></i>
            <h2 style={{ fontWeight: "800" }} className="fs-3 my-3">
              Address
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              6391 Elgin St. Celina, Delaware
            </p>
            <p style={{ fontSize: "1.2rem" }} className="m-0">
              Mirpur Dhaka,Bangladesh
            </p>
          </div>
          <div className="contact_item">
            <i className="fa-solid fa-phone"></i>
            <h2 style={{ fontWeight: "800" }} className="fs-3 my-3">
              Phone Number
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              6391 Elgin St. Celina, Delaware
            </p>
            <p style={{ fontSize: "1.2rem" }} className="m-0 ">
              Mirpur Dhaka,Bangladesh
            </p>
          </div>
          <div className="contact_item">
            <i className="fa-solid fa-clock"></i>
            <h2 style={{ fontWeight: "800" }} className="fs-3 my-3">
              Opening
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              6391 Elgin St. Celina, Delaware
            </p>
            <p style={{ fontSize: "1.2rem" }} className="m-0 ">
              Mirpur Dhaka,Bangladesh
            </p>
          </div>
          <div className="contact_item">
            <i className="fa-solid fa-envelope"></i>
            <h2 style={{ fontWeight: "800" }} className="fs-3 my-3">
              E-mail
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              6391 Elgin St. Celina, Delaware
            </p>
            <p style={{ fontSize: "1.2rem" }} className="m-0 ">
              Mirpur Dhaka,Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* form section */}

      <section className="form-c">
        <div className="container">
          <div className="d-flex flex-column-reverse flex-lg-row gap-5">
            <div className="form-box col-12 col-lg-6">
              <h3>CONTACT FORM</h3>
              <h2 style={{ fontSize: "3.3rem", fontWeight: "800" }}>
                Car Repair The Best Services
              </h2>
              <br />
              <form>
                <div className="d-flex gap-4">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="d-flex gap-4">
                  <input type="text" placeholder="Phone Number" />
                  <select>
                    <option value disabled defaultValue hidden>
                      Choose a Option
                    </option>
                    <option>Auto Repair</option>
                    <option>Car Repair</option>
                    <option>Automative</option>
                  </select>
                </div>
                <textarea
                  placeholder="Message here.."
                  cols="60"
                  rows="6"
                ></textarea>
                <div className="btn-box">
                  <button className="btn">APPOINTMENT NOW </button>
                </div>
              </form>
            </div>
            <div
              className="parent col-10 col-lg-5"
              style={{ position: "relative" }}
            >
              <div className="img_box col-12">
                <img
                  style={{
                    borderRadius: "10px 0px 10px 0",
                    width: "100%",
                    height: "100%",
                  }}
                  src="./images/faq-thumb-2-1.png"
                  alt=""
                />
              </div>
              <div className="counter_box">
                <div className="icon_box">
                  <img src="./images/faq2-counter-icon-1.svg" alt="" />
                </div>
                <div className="details_box" style={{ direction: "rtl" }}>
                  <h2 className="m-0">
                    <ScrollTrigger
                      onEnter={() => {
                        setCounterOn(true);
                      }}
                      onExit={() => setCounterOn(false)}
                    >
                      +
                      {counterOn && (
                        <CountUp
                          style={{ fontWeight: "900", fontSize: "3rem" }}
                          start={0}
                          end={250}
                          delay={0}
                          duration={2}
                        />
                      )}
                    </ScrollTrigger>
                  </h2>
                  <p className="fs-5 m-0">Services We Provide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default ContactPage;
