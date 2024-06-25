import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ToTop from "../Components/ToTop";
import Anim_ltr from "../Components/Anim_ltr";
import Contact__Test from "../Components/Contact__Test";
import WorkProcess from "../Components/WorkProcess";
import Latest_port from "../Components/Latest_port";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";

const HomePage1 = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <section className="head">
        <div className="container">
          <div className="d-flex flex-column-reverse flex-xl-row gap-4">
            <div className="image_box col-12 col-xl-6 text-center">
              <img
                style={{ maxWidth: "100%" }}
                src="./images/hero_thumb_1_1.png"
                alt="#"
              />
            </div>
            <div className="col-12 col-xl-6 text-center text-xl-start">
              <h4 className="sec_title-1">GROWTH ACCELERATOR</h4>
              <h1>
                Gear Up <img src="./images/hero_shape_1.png" alt="" />
                <span>For Great</span> Quality Service
              </h1>
              <p>
                Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus
              </p>
              <div className="btn-div d-flex flex-wrap justify-content-center justify-content-xl-start gap-4 my-5">
                <Link to="/about" className="btn btn-1">
                  LEARN ABOUT US
                </Link>
                <Link to="/service" className="btn btn-2">
                  OUR SERVICES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of head */}

      {/* know about us */}

      <section className="info_section">
        <div className="container">
          <div className="d-flex">
            <div className="info_box d-flex col-12 flex-wrap">
              <div className="items_box col-12 col-lg-6">
                <div className="items_box_1 d-flex flex-column flex-sm-row">
                  <div className="item_1 col-9 col-sm-6 mx-auto ">
                    <div className="counter_box col-8">
                      <h2>
                        <ScrollTrigger
                          onEnter={() => {
                            setCounterOn(true);
                          }}
                          onExit={() => {
                            setCounterOn(false);
                          }}
                        >
                          {counterOn && (
                            <CountUp
                              className="h2"
                              start={0}
                              end={2}
                              duration={3}
                              delay={0}
                              style={{ fontWeight: "900" }}
                            />
                          )}
                          K+
                        </ScrollTrigger>
                      </h2>
                      <span>Winning Award</span>
                    </div>
                    <div className="icon_box col-4">
                      <img src="./images/counter-icon_1-1.svg" alt="" />
                    </div>
                  </div>
                  <div className="item_2 col-9 col-sm-6 mx-auto">
                    <div className="counter_box col-8">
                      <h2>
                        <ScrollTrigger
                          onEnter={() => {
                            setCounterOn(true);
                          }}
                          onExit={() => {
                            setCounterOn(false);
                          }}
                        >
                          {counterOn && (
                            <CountUp
                              className="h2"
                              start={0}
                              end={8}
                              duration={3}
                              delay={0}
                              style={{ fontWeight: "900" }}
                            />
                          )}
                          k+
                        </ScrollTrigger>
                      </h2>
                      <span>Happy Clients</span>
                    </div>
                    <div className="icon_box col-4">
                      <img src="./images/counter-icon_1-2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="items_box_2 d-flex flex-column flex-sm-row">
                  <div className="item_3 col-9 col-sm-6 mx-auto">
                    <div className="counter_box col-8">
                      <h2>
                        <ScrollTrigger
                          onEnter={() => {
                            setCounterOn(true);
                          }}
                          onExit={() => {
                            setCounterOn(false);
                          }}
                        >
                          {counterOn && (
                            <CountUp
                              className="h2"
                              start={0}
                              end={200}
                              duration={3}
                              delay={0}
                              style={{ fontWeight: "900" }}
                            />
                          )}
                          +
                        </ScrollTrigger>
                      </h2>
                      <span>Team Member</span>
                    </div>
                    <div className="icon_box col-4">
                      <img src="./images/counter-icon_1-3.svg" alt="" />
                    </div>
                  </div>
                  <div className="item_4 col-9 col-sm-6 mx-auto">
                    <div className="counter_box col-8">
                      <h2>
                        <ScrollTrigger
                          onEnter={() => {
                            setCounterOn(true);
                          }}
                          onExit={() => {
                            setCounterOn(false);
                          }}
                        >
                          {counterOn && (
                            <CountUp
                              className="h2"
                              start={0}
                              end={9}
                              duration={3}
                              delay={0}
                              style={{ fontWeight: "900" }}
                            />
                          )}
                          K+
                        </ScrollTrigger>
                      </h2>
                      <span>Project Done</span>
                    </div>
                    <div className="icon_box col-4">
                      <img src="./images/counter-icon_1-4.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="car_box col-12 col-lg-6">
                <div className="bg-car">
                  <div className="content">
                    <ul
                      style={{
                        listStyle: "none",
                        color: "white",
                        fontWeight: "500",
                      }}
                      className="mb-5 ps-0 d-flex gap-3 flex-column"
                    >
                      <li>
                        <i className="fa-solid fa-check me-3"></i>
                        <span>We're Your Repair Superstore</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check me-3"></i>
                        <span>Fueled by Expertise</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-check me-3"></i>
                        <span>Car Repair the best Services</span>
                      </li>
                    </ul>
                    <div className="chat_box d-flex flex-row align-items-center gap-4">
                      <div className="chat_icon_box">
                        <img src="./images/phone-1.svg" alt="" />
                      </div>
                      <div className="contact_chat_box">
                        <p className="fs-5 m-0">Requesting A Call:</p>
                        <a href="tel:+" className="contact_number fs-3">
                          (307) 555-0133
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== about_us =========== */}

      <section className="about_us">
        <div className="container py-5">
          <div className="d-flex justify-content-between flex-column gap-4 flex-xl-row">
            <div className="images_box col-12 col-md-10 col-xl-6">
              <Anim_ltr />
              <img
                className="about_img_1"
                src="./images/about_1-1.png"
                alt="."
              />
              <img
                className="about_img_2"
                src="./images/about_1-2.png"
                alt=""
              />
            </div>
            <div className="content col-12 col-xl-6 py-5 py-xl-0 my-5 my-xl-0">
              <div className="head_box">
                <h4 className="sec_title-1">KNOW ABOUT US</h4>
                <h2 style={{ fontWeight: "900"}}>
                  Where Expertise Meets Every Engine
                </h2>
                <p className="fs-5 py-3">
                  Et purus duis sollicitudin dignissim habitant. Egestas nulla
                  quis venenatis cras sed eu massa eu faucibus. Urna fusce
                </p>
              </div>
              <div className="details_box">
                <div className="d-flex flex-column flex-md-row flex-xl-column flex-xxl-row justify-content-between">
                  <ul
                    className="d-flex flex-column gap-3 ps-0"
                    style={{ listStyle: "none" }}
                  >
                    <li>
                      <i className="fas fa-xl fa-check-circle me-3"></i>
                      <span style={{ fontSize: "1.2rem" }}>
                        Professional Car Repair Services
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-xl fa-check-circle me-3"></i>
                      <span style={{ fontSize: "1.2rem" }}>
                        A car repair is a service provided to fix
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-xl fa-check-circle me-3"></i>
                      <span style={{ fontSize: "1.2rem" }}>
                        Get Your Car Fixed Right Away Car Repair
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-xl fa-check-circle me-3"></i>
                      <span style={{ fontSize: "1.2rem" }}>
                        Quick and Efficient Car Repairs
                      </span>
                    </li>
                  </ul>
                  <div className="counter_box">
                    <div className="hexagon text-light">
                      <img src="./images/about_icon1-1.svg" alt="" />
                      <h2 style={{ fontWeight: "900", fontSize: "2rem" }}>
                        25+
                      </h2>
                      <p>Years of experience</p>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="button_box">
                  <Link to="/about" className="btn">
                    READ MORE <i className="fa-solid fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

      {/* latest_ser */}

      <section className="latest_ser">
        <div className="container">
          <div className="head_box text-center">
            <h4 className="sec_title-2">LATEST SERVICE</h4>
            <h2
              style={{ fontWeight: "900", padding: "1rem" }}
            >
              Professional Car Repair The <br /> Best Services
            </h2>
          </div>
          <div className="cards_box d-flex gap-3 flex-wrap justify-content-center">
            {/* card-1 */}
            <div className="card  border-0">
              <div className="card-body p-0">
                <div style={{ padding: "2.5rem" }} className="card_content">
                  <div className="icon_card_box">
                    <img src="./images/service-icon_1-1.svg" alt="" />
                  </div>
                  <br />
                  <h3
                    style={{ fontWeight: "800", margin: "0" }}
                    className="card-title"
                  >
                    Auto Fixers
                  </h3>
                  <br />
                  <p className="card-text fs-5">
                    A car repair is a service provided to fix any issues or
                    damages with your
                  </p>
                  <br />
                  <Link className="decorate_link" to="/service">
                    READ MORE{" "}
                    <i
                      style={{ translate: "0 2px" }}
                      className="fa-solid fa-arrow-right fa-sm"
                    ></i>
                  </Link>
                </div>
                <div className="card_img_box">
                  <img
                    src="./images/service-1-1.png"
                    className="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="card  border-0">
              <div className="card-body p-0">
                <div style={{ padding: "2.5rem" }} className="card_content">
                  <div className="icon_card_box">
                    <img src="./images/service-icon_1-2.svg" alt="" />
                  </div>
                  <br />
                  <h3
                    style={{ fontWeight: "800", margin: "0" }}
                    className="card-title"
                  >
                    Mechanic Masters
                  </h3>
                  <br />
                  <p className="card-text fs-5">
                    A car repair is a service provided to fix any issues or
                    damages with your
                  </p>
                  <br />
                  <Link className="decorate_link" to="/service">
                    READ MORE{" "}
                    <i
                      style={{ translate: "0 2px" }}
                      className="fa-solid fa-arrow-right fa-sm"
                    ></i>
                  </Link>
                </div>
                <div className="card_img_box">
                  <img
                    src="./images/service-1-2.png"
                    className="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className="card  border-0">
              <div className="card-body p-0">
                <div style={{ padding: "2.5rem" }} className="card_content">
                  <div className="icon_card_box">
                    <img src="./images/service-icon_1-3.svg" alt="" />
                  </div>
                  <br />
                  <h3
                    style={{ fontWeight: "800", margin: "0" }}
                    className="card-title"
                  >
                    Drive-in Garage
                  </h3>
                  <br />
                  <p className="card-text fs-5">
                    A car repair is a service provided to fix any issues or
                    damages with your
                  </p>
                  <br />
                  <Link className="decorate_link" to="/service">
                    READ MORE{" "}
                    <i
                      style={{ translate: "0 2px" }}
                      className="fa-solid fa-arrow-right fa-sm"
                    ></i>
                  </Link>
                </div>
                <div className="card_img_box">
                  <img
                    src="./images/service-1-3.png"
                    className="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="moveSec" className="anim_section">
            <img src="./images/marquee-icon-1-1.svg" alt="" />
            <div className="anim_1 col-5">Express Car Fix</div>
            <img src="./images/marquee-icon-1-2.svg" alt="" />
            <div className="anim_2 col-5">Car Care Clinic</div>
            <img src="./images/marquee-icon-1-1.svg" alt="" />
            <div className="anim_1 col-5">Express Car Fix</div>
            <img src="./images/marquee-icon-1-2.svg" alt="" />
            <div className="anim_2 col-5">Car Care Clinic</div>
            <img src="./images/marquee-icon-1-1.svg" alt="" />
            <div className="anim_1 col-5">Express Car Fix</div>
            <img src="./images/marquee-icon-1-2.svg" alt="" />
            <div className="anim_2 col-5">Car Care Clinic</div>
            <img src="./images/marquee-icon-1-1.svg" alt="" />
            <div className="anim_1 col-5">Express Car Fix</div>
            <img src="./images/marquee-icon-1-2.svg" alt="" />
            <div className="anim_2 col-5">Car Care Clinic</div>
            <img src="./images/marquee-icon-1-1.svg" alt="" />
            <div className="anim_1 col-5">Express Car Fix</div>
            <img src="./images/marquee-icon-1-2.svg" alt="" />
            <div className="anim_2 col-5">Car Care Clinic</div>
            <img src="./images/marquee-icon-1-1.svg" alt="" />
          </div>
        </div>
      </section>

      {/* latest_port */}

      <Latest_port />

      {/* client info */}

      <section className="client_info">
        <div className="container">
          <div className="swiper_box">
            <Swiper
              loop={true}
              slidesPerView={5}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper text-light text-center"
            >
              <SwiperSlide>
                <img src="./images/swiper1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper5.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./images/swiper5.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" img_box col-12" style={{ zIndex: "1" }}>
            <img
              style={{ position: "absolute", right: "0" }}
              src="./images/appointment-thumb-1-1.png"
              alt=""
            />
          </div>
          <div className="form-h col-12 col-lg-7 mt-0 mt-md-5">
            <h4>SEND A REQUEST</h4>
            <h2 style={{ fontWeight: "800" }}>
              Our One-Stop Car Repair Shop
            </h2>
            <br />
            <form>
              <div className="d-flex gap-4 p-0 pe-md-4 flex-column flex-md-row">
                <input
                  className="col-12 col-md-6"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="col-12 col-md-6"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="d-flex gap-4 p-0 pe-md-4 flex-column flex-md-row">
                <input
                  className="col-12 col-md-6"
                  type="text"
                  placeholder="Phone Number"
                />
                <select className="col-12 col-md-6">
                  <option value disabled hidden>
                    Choose a Option
                  </option>
                  <option style={{ color: "black" }}>Auto Repair</option>
                  <option style={{ color: "black" }}>Car Repair</option>
                  <option style={{ color: "black" }}>Automative</option>
                </select>
              </div>
              <textarea
                placeholder="Message here.."
                cols="60"
                rows="5"
              ></textarea>
              <div className="btn-box">
                <button className="btn">
                  APPOINTMENT NOW{" "}
                  <i className="fa-solid fa-arrow-right ms-1"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* pricing */}

      <section className="our_pricing">
        <div className="container p-0">
          <Anim_ltr />
          <div className="head_box text-center">
            <h3 className="sec_title-2">OUR PRICING</h3>
            <h2 style={{ fontWeight: "900"}}>
              It Dependable Car Repair <br /> Best Solutions
            </h2>
          </div>
          <div className="items_box mx-auto row flex-lg-row flex-column col-12">
            {/* item_1 */}
            <div style={{ padding: "0.8rem" }} className="col-12 col-lg-6">
              <div className="item p-5 flex-column flex-sm-row">
                <div className="left">
                  <h3 style={{ fontSize: "3.5rem", fontWeight: "900" }}>$29</h3>
                  /month
                  <div
                    style={{ background: "#e8092e", width: "86px" }}
                    className="icon_box my-4"
                  >
                    <img src="./images/picing-icon_1-1.svg" alt="" />
                  </div>
                </div>
                <div className="right d-flex flex-column gap-3">
                  <h4>Car Care Clinic</h4>
                  <ul
                    className="d-flex gap-2 flex-column"
                    style={{
                      listStyle: "none",
                      padding: "0",
                      fontSize: "1.1rem",
                    }}
                  >
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Expert Car Repair Specialists
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Profession Car Repair Service
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Quick and Efficient Car Repair
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Trusted Car Repair
                    </li>
                  </ul>
                  <div className="btn_box">
                    <Link to="/about" className="btn">
                      START NOW <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* item_2 */}
            <div style={{ padding: "0.8rem" }} className="col-12 col-lg-6">
              <div className="item p-5 flex-column flex-sm-row">
                <div className="left">
                  <h3 style={{ fontSize: "3.5rem", fontWeight: "900" }}>$25</h3>
                  /month
                  <div
                    style={{ background: "#e8092e", width: "86px" }}
                    className="icon_box my-4"
                  >
                    <img src="./images/picing-icon_1-2.svg" alt="" />
                  </div>
                </div>
                <div className="right d-flex flex-column gap-3">
                  <h4>Repair Services</h4>
                  <ul
                    className="d-flex gap-2 flex-column"
                    style={{
                      listStyle: "none",
                      padding: "0",
                      fontSize: "1.1rem",
                    }}
                  >
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Expert Car Repair Specialists
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Profession Car Repair Service
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Quick and Efficient Car Repair
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Trusted Car Repair
                    </li>
                  </ul>
                  <div className="btn_box">
                    <Link to="/about" className="btn">
                      START NOW <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* item_3 */}
            <div style={{ padding: "0.8rem" }} className="col-12 col-lg-6">
              <div className="item p-5 flex-column flex-sm-row">
                <div className="left">
                  <h3 style={{ fontSize: "3.5rem", fontWeight: "900" }}>$30</h3>
                  /month
                  <div
                    style={{ background: "#e8092e", width: "86px" }}
                    className="icon_box my-4"
                  >
                    <img src="./images/picing-icon_1-3.svg" alt="" />
                  </div>
                </div>
                <div className="right d-flex flex-column gap-3">
                  <h4>Auto Fixer</h4>
                  <ul
                    className="d-flex gap-2 flex-column"
                    style={{
                      listStyle: "none",
                      padding: "0",
                      fontSize: "1.1rem",
                    }}
                  >
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Expert Car Repair Specialists
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Profession Car Repair Service
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Quick and Efficient Car Repair
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Trusted Car Repair
                    </li>
                  </ul>
                  <div className="btn_box">
                    <Link to="/about" className="btn">
                      START NOW <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* item_4 */}
            <div style={{ padding: "0.8rem" }} className="col-12 col-lg-6">
              <div className="item p-5 flex-column flex-sm-row">
                <div className="left">
                  <h3 style={{ fontSize: "3.5rem", fontWeight: "900" }}>$39</h3>
                  /month
                  <div
                    style={{ background: "#e8092e", width: "86px" }}
                    className="icon_box my-4"
                  >
                    <img src="./images/picing-icon_1-4.svg" alt="" />
                  </div>
                </div>
                <div className="right d-flex flex-column gap-3">
                  <h4>Pro Auto Fixer</h4>
                  <ul
                    className="d-flex gap-2 flex-column"
                    style={{
                      listStyle: "none",
                      padding: "0",
                      fontSize: "1.1rem",
                    }}
                  >
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Expert Car Repair Specialists
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Profession Car Repair Service
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Quick and Efficient Car Repair
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e", margin: "0 10px 0 0  " }}
                        className="fa-solid fa-angle-right fa-xs"
                      ></i>
                      Trusted Car Repair
                    </li>
                  </ul>
                  <div className="btn_box">
                    <Link to="/about" className="btn">
                      START NOW <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact__Test />

      <WorkProcess />

      <Footer />
    </>
  );
};

export default HomePage1;
