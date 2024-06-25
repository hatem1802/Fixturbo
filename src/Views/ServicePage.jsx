import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ToTop from "../Components/ToTop";
import SubPage_head from "../Components/SubPage_head";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Loader from "../Components/Loader";

const ServicePage = () => {
  return (
    <div style={{ background: "#f4f4f4" }}>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="Service"/>

      <section className="latest_ser">
        <div className="container">
          <div className="cards_box d-flex gap-4 flex-wrap justify-content-center">
            {/* card-1 */}
            <div className="card border-0">
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
                  <Link className="decorate_link" to="/services_details">
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
            <div className="card border-0">
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
                  <Link className="decorate_link" to="/services_details">
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
            <div className="card border-0">
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
                    Derive-IN Garage
                  </h3>
                  <br />
                  <p className="card-text fs-5">
                    A car repair is a service provided to fix any issues or
                    damages with your
                  </p>
                  <br />
                  <Link className="decorate_link" to="/services_details">
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
            {/* card-4 */}
            <div className="card border-0">
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
                    Car Care Clinic
                  </h3>
                  <br />
                  <p className="card-text fs-5">
                    A car repair is a service provided to fix any issues or
                    damages with your
                  </p>
                  <br />
                  <Link className="decorate_link" to="/services_details">
                    READ MORE{" "}
                    <i
                      style={{ translate: "0 2px" }}
                      className="fa-solid fa-arrow-right fa-sm"
                    ></i>
                  </Link>
                </div>
                <div className="card_img_box">
                  <img
                    src="./images/service-1-4.png"
                    className="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            {/* card-5 */}
            <div className="card border-0">
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
                    Car Repair Services
                  </h3>
                  <br />
                  <p className="card-text fs-5">
                    A car repair is a service provided to fix any issues or
                    damages with your
                  </p>
                  <br />
                  <Link className="decorate_link" to="/services_details">
                    READ MORE{" "}
                    <i
                      style={{ translate: "0 2px" }}
                      className="fa-solid fa-arrow-right fa-sm"
                    ></i>
                  </Link>
                </div>
                <div className="card_img_box">
                  <img
                    src="./images/service-1-5.png"
                    className="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            {/* card-6 */}
            <div className="card border-0">
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
                    Repair Solutions
                  </h3>
                  <br />
                  <p className="card-text fs-5">
                    A car repair is a service provided to fix any issues or
                    damages with your
                  </p>
                  <br />
                  <Link className="decorate_link" to="/services_details">
                    READ MORE{" "}
                    <i
                      style={{ translate: "0 2px" }}
                      className="fa-solid fa-arrow-right fa-sm"
                    ></i>
                  </Link>
                </div>
                <div className="card_img_box">
                  <img
                    src="./images/service-1-6.png"
                    className="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePage;