import React from "react";
import ToTop from "../Components/ToTop";
import Header from "../Components/Header";
import SubPage_head from "../Components/SubPage_head";
import Footer from "../Components/Footer";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Loader from "../Components/Loader";

const ServiceDetailsPage = () => {
  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="Service Details" />
      
      <section style={{ margin: "7rem 0 0 0" }} className="all_services-det">
        <div className="container">
          <div className="d-flex flex-column-reverse flex-xl-row">
            <div className="col-12 col-xl-4 pe-3">
              <div className="left">
                <div
                  className="all_ser"
                  style={{ background: "#f4f4f4", padding: "2rem" }}
                >
                  <h4 className="sec_title-3 my-3">All Services</h4>
                  <ul>
                    <li>
                      <i
                        style={{ color: "#e8092e" }}
                        className="fas fa-angle-double-right fa-sm me-2"
                      ></i>
                      <a href="#">Fast and Reliable Car Repair Design</a>
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e" }}
                        className="fas fa-angle-double-right fa-sm me-2"
                      ></i>
                      <a href="#">Trusted Car Repair Professionals</a>
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e" }}
                        className="fas fa-angle-double-right fa-sm me-2"
                      ></i>
                      <a href="#">Get Your Car Fixed Right Away</a>
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e" }}
                        className="fas fa-angle-double-right fa-sm me-2"
                      ></i>
                      <a href="#">Quality Car Repair Services</a>
                    </li>
                    <li>
                      <i
                        style={{ color: "#e8092e" }}
                        className="fas fa-angle-double-right fa-sm me-2"
                      ></i>
                      <a href="#">Affordable Car Repair Solutions</a>
                    </li>
                  </ul>
                </div>
                <br />
                <br />
                <div
                  className="contact_us"
                  style={{ background: "#f4f4f4", padding: "2.5rem" }}
                >
                  <div
                    className="content text-center"
                    style={{ background: "white", padding: "2rem" }}
                  >
                    <h4 style={{ fontWeight: "900", fontSize: "1.7rem" }}>
                      Contact Us
                    </h4>
                    <p className="fs-5">
                      It is a long established fact that a reader will be
                      distracted by the and readable content repair
                    </p>
                    <i className="fas fa-phone-alt"></i>
                    <p className="fs-5">Need help ?</p>
                    <a href="tel:+" className="Contact_number fs-4">
                      (808) 555-0111
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8 ps-0 ps-xl-3">
              <div className="right">
                <div style={{ borderRadius: "10px"}} className="img_box">
                  <img
                    style={{ width: "100%" }}
                    src="./images/service-details1-1.png"
                    alt="."
                  />
                </div>
                <br />
                <br />
                <h3 style={{ fontSize: "3rem", fontWeight: "900" }}>
                  Affordable Car Repair Solutions
                </h3>
                <br />
                <p style={{ fontSize: "1.2rem" }}>
                  Web designing in a powerful way of just not an only
                  professions, however, in a passion for our Company. We have to
                  a tendency to believe the idea that smart looking of any
                  websitet in on visitors.Web designing in a powerful way of
                  just not an only profession Web designing in a powerful way of
                  just not an only
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  Web designing in a powerful way of just not an only
                  professions, however, in a passion for our Company. We have to
                  a tendency to believe the idea that smart looking of any
                  websitet in on visitors
                </p>
                <h3 style={{ fontSize: "2.5rem", fontWeight: "900" }}>
                  Trusted Car Repair Professionals
                </h3>
                <p style={{ fontSize: "1.2rem" }}>
                  Web designing in a powerful way of just not an only
                  professions, however, in a passion for our Company. We have to
                  a tendency to believe the idea that smart looking of any
                  websitet in on visitors.Web designing in a powerful way of
                  just not an only profession Web designing in a powerful way of
                  just not an only
                </p>
                <div className="imgs_box d-flex flex-column flex-md-row gap-3">
                  <div style={{ borderRadius: "5px" }} className="img_box col-12 col-md-6">
                    <img
                      className="col-12"
                      src="./images/service-details1-2.png"
                      alt="."
                    />
                  </div>
                  <div style={{ borderRadius: "5px" }} className="img_box col-12 col-md-6">
                    <img
                      className="col-12"
                      src="./images/service-details1-3.png"
                      alt="."
                    />
                  </div>
                </div>
                <br />
                <br />
                <ul style={{ listStyle: "none", fontSize: "1.1rem" }}>
                  <li>
                    <i
                      style={{ color: "#e8092e" }}
                      className="fas fa-angle-double-right fa-sm me-2"
                    ></i>
                    <span>
                      A car repair is a service provided to fix any issues or
                      damages with your vehicle
                    </span>
                  </li>
                  <li>
                    <i
                      style={{ color: "#e8092e" }}
                      className="fas fa-angle-double-right fa-sm me-2"
                    ></i>
                    <span>
                      It involves diagnosing the problem, repairing or replacing
                    </span>
                  </li>
                  <li>
                    <i
                      style={{ color: "#e8092e" }}
                      className="fas fa-angle-double-right fa-sm me-2"
                    ></i>
                    <span>
                      Trusted Car Repair Professionals et Your Car Fixed Right
                      Away
                    </span>
                  </li>
                  <li>
                    <i
                      style={{ color: "#e8092e" }}
                      className="fas fa-angle-double-right fa-sm me-2"
                    ></i>
                    <span>
                      Quality Car Repair Services Affordable Car Repair
                      Solutions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
