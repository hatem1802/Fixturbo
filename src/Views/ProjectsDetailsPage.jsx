import React from "react";
import ToTop from "../Components/ToTop";
import Header from "../Components/Header";
import SubPage_head from "../Components/SubPage_head";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Loader from "../Components/Loader";

const ProjectsDetailsPage = () => {
  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="Projects Details" />

      <section className="portfolio_details">
        <div className="container">
          <div style={{ borderRadius: "5px" }} className="img_box col-12">
            <img
              style={{ width: "100%" }}
              src="./images/portfolio_details.png"
              alt=""
            />
          </div>
          <div className="content d-flex flex-column-reverse flex-lg-row gap-4">
            <div className="left col-12 col-lg-5 col-xl-4">
              <div className="project_info">
                <h4 className="sec_title-3 mb-3">Project Info</h4>
                <ul>
                  <li>
                    <span>Name:</span>
                    Fixturbo
                  </li>
                  <hr />
                  <li>
                    <span>Author:</span>
                    Rajin Saleh
                  </li>
                  <hr />
                  <li>
                    <span>Date:</span>
                    23 December,2023
                  </li>
                  <hr />
                  <li>
                    <span>Tags:</span>
                    Repair
                  </li>
                  <hr />
                  <li style={{ color: "#e8092e" }}>
                    <span style={{ color: "black" }}>Value:</span>$ 240
                  </li>
                  <hr />
                  <li className="d-flex gap-1">
                    <i
                      style={{ color: "#F8B427" }}
                      className="fa-solid fa-sm fa-star"
                    ></i>
                    <i
                      style={{ color: "#F8B427" }}
                      className="fa-solid fa-sm fa-star"
                    ></i>
                    <i
                      style={{ color: "#F8B427" }}
                      className="fa-solid fa-sm fa-star"
                    ></i>
                    <i
                      style={{ color: "#F8B427" }}
                      className="fa-solid fa-sm fa-star"
                    ></i>
                    <i
                      style={{ color: "#F8B427" }}
                      className="fa-solid fa-sm fa-star"
                    ></i>
                  </li>
                </ul>
              </div>
              <div
                className="contact_box"
                style={{
                  padding: "2.5rem",
                  background: "#f4f4f4",
                  margin: "3rem 0 0 0",
                }}
              >
                <div
                  className="content text-center"
                  style={{ background: "white", padding: "2rem" }}
                >
                  <h6 style={{ color: "#e8092e", margin: "0 0 1rem 0" }}>
                    CAR REPAIR
                  </h6>
                  <h3 style={{ fontWeight: "900", margin: "0 0 1rem 0" }}>
                    Precision Auto Works
                  </h3>
                  <p className="mb-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content
                  </p>
                  <Link to="/contact" className="btn">
                    LETS TALK
                    <i className="fa-solid fa-arrow-right fa-lg ms-3"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right col-12 col-lg-7 col-xl-8 pt-4">
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "2.3rem",
                  margin: "0 0 1rem 0",
                }}
              >
                Professional Car Repair Services
              </h2>
              <p>
                Aliquam eros justo, posuere loborti vive rra laoreet matti
                ullamc orper posu ere viverra .Aliquam ero, posuee lobortis non,
                laoreet augue mattis fermentum ullamcorper viverra Aliquam eros
                justo, posuere loborti vive rra laoreet matti ullamc orper posu
                ere viverra .Aliqu eros justo, pos rra laoreet matti ullamc
                orper
              </p>
              <p>
                Aliquam eros justo, posuere loborti vive rra laoreet matti
                ullamc orper posu ere viverra .Aliquam ero, posuee lobortis non,
                laoreet augue mattis fermentum ullamcorper viverra Aliquam eros
                justo, posuere loborti
              </p>
              <ul>
                <li className="d-flex align-items-center gap-4 mb-2">
                  <i
                    style={{ color: "red" }}
                    className="fas fa-md fa-check-circle"
                  ></i>
                  Professional Car Repair Services Dependable Car
                </li>
                <li className="d-flex align-items-center gap-4 mb-2">
                  <i
                    style={{ color: "red" }}
                    className="fas fa-md fa-check-circle"
                  ></i>
                  Dependable Car Repair Solutions
                </li>
                <li className="d-flex align-items-center gap-4">
                  <i
                    style={{ color: "red" }}
                    className="fas fa-md fa-check-circle"
                  ></i>
                  Your One-Stop Car Repair Shop
                </li>
              </ul>
              <h2
                style={{
                  fontWeight: "900",
                  fontSize: "2.3rem",
                  margin: "0 0 1rem 0",
                }}
              >
                Your One-Stop Car Repair Shop
              </h2>
              <p>
                Aliquam eros justo, posuere loborti vive rra laoreet matti
                ullamc orper posu ere viverra .Aliquam ero, posuee lobortis non,
                laoreet augue mattis fermentum ullamcorper viverra Aliquam eros
                justo, posuere loborti
              </p>
              <div className="imgs_box d-flex flex-column flex-md-row gap-3 col-12">
                <div className="img_box col-10 col-md-6" style={{ borderRadius: "5px" }}>
                  <img className="col-12" src="./images/portfolio_details1-2.png" alt="" />
                </div>
                <div className="img_box col-10 col-md-6" style={{ borderRadius: "5px" }}>
                  <img className="col-12"  src="./images/portfolio_details1-3.png" alt="" />
                </div>
              </div>
              <br />
              <p>
                Aliquam eros justo, posuere loborti vive rra laoreet matti
                ullamc orper posu ere viverra .Aliquam ero, posuee lobortis non,
                laoreet augue mattis fermentum ullamcorper vi Aliquam eros
                justo, posuere loborti Aliquam eros justo, posuere loborti vive
                rra laoreet matti ullamc orper posu ere viverra .Aliquam ero,
                posuee lobortis non, laoreet augue mattis fermentum ullamcorper
                viverra Aliquam eros justo, posuere loborti
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProjectsDetailsPage;
