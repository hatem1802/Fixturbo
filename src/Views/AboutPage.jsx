import React, { useState } from "react";
import ToTop from "../Components/ToTop";
import Header from "../Components/Header";
import SubPage_head from "../Components/SubPage_head";
import Footer from "../Components/Footer";
import CountUp from "react-countup";
import WorkProcess from "../Components/WorkProcess";
import Contact__Test from "../Components/Contact__Test";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Loader from "../Components/Loader";
import ScrollTrigger from "react-scroll-trigger";

const AboutPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="About Us" />

      <section style={{ margin: "7rem 0 0 0" }} className="know_about-2">
        <div className="container">
          <div className="d-flex flex-column flex-xl-row gap-4 gap-xl-0">
            <div className="col-12 col-xl-7">
              <div className="img_box-1 d-flex">
                <div className="animate_div-1 text-light">
                  <img
                    className="about_icon-1"
                    style={{ width: "40%" }}
                    src="./images/about_icon2-1.svg"
                    alt=""
                  />
                  <p
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: "900",
                      margin: "0",
                    }}
                  >
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
                          start={0}
                          end={5}
                          duration={2}
                          delay={0}
                          style={{ fontWeight: "900" }}
                        />
                      )}
                      K+
                    </ScrollTrigger>
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "1.1rem",
                      fontWeight: "900",
                    }}
                  >
                    Trusted Customer
                  </p>
                </div>
                <div
                  style={{ borderRadius: "5px" }}
                  className="img_box col-7 mb-3"
                >
                  <img
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%",
                    }}
                    src="./images/about_2-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="img_box-2 d-flex align-items-center col-12">
                <div style={{ borderRadius: "5px" }} className="img_box col-8">
                  <img
                    style={{ width: "100%" }}
                    src="./images/about_2-2.png"
                    alt=""
                  />
                </div>
                <div className="animate_div-2">
                  <div className="d-flex align-items-center justify-content-around">
                    <img
                      className="about_icon-2"
                      src="./images/about_icon2-2.png"
                      alt=""
                    />
                    <span
                      style={{
                        fontSize: "3.5rem",
                        fontWeight: "900",
                        margin: "0",
                      }}
                    >
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
                            start={0}
                            end={10}
                            duration={3}
                            delay={0}
                            style={{ fontWeight: "900" }}
                          />
                        )}+
                      </ScrollTrigger>
                    </span>
                  </div>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "1.3rem",
                      fontWeight: "900",
                    }}
                  >
                    Years Of Experiences
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-5">
              <div className="d-flex flex-column">
                <h4 className="sec_title-1">KNOW ABOUT US</h4>
                <h2 style={{ fontWeight: "900", fontSize: "3.1rem" }}>
                  Non Leo Libero Amet The Maecenas Gravida
                </h2>
                <p style={{ fontSize: "1.1rem" }}>
                  A car repair is a service provided to fix any issues or
                  damages with a your vehicle. It involves diagnosing the
                  problem, repairing or replacing the necessary parts, and
                  ensuring that the car
                </p>
                <br />
                <div className="item_box">
                  <div className="icon_box me-4">
                    <img src="./images/about_icon2-3.svg" alt="" />
                  </div>
                  <div className="details">
                    <h3 style={{ fontWeight: "900" }}>
                      Elite Automotive Service
                    </h3>
                    <p style={{ fontSize: "1.2rem" }}>
                      Et purus duis sollicitudin dignissim habitant. Egestas
                      nulla quis venenatis cras sed
                    </p>
                  </div>
                </div>
                <div className="item_box">
                  <div className="icon_box me-4">
                    <img src="./images/about_icon2-4.svg" alt="" />
                  </div>
                  <div className="details">
                    <h3 style={{ fontWeight: "900" }}>Pro Drive Garage</h3>
                    <p style={{ fontSize: "1.2rem" }}>
                      Et purus duis sollicitudin dignissim habitant. Egestas
                      nulla quis venenatis cras sed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkProcess />

      <Contact__Test />

      <Footer />
    </>
  );
};

export default AboutPage;
