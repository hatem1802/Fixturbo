import React from "react";
import ToTop from "../Components/ToTop";
import Header from "../Components/Header";
import SubPage_head from "../Components/SubPage_head";
import Footer from "../Components/Footer";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Loader from "../Components/Loader";

const TeamPage = () => {
  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="Team" />

      <section style={{ margin: "7rem 0 0 0" }} className="team">
        <div className="container p-0">
          <div className="row justify-content-center col-12">
            {/* card_1 */}
            <div className="parent p-3 col-10 col-md-5 col-lg-6 col-xl-4">
              <div className="card col-12">
                <div
                  style={{ overflow: "hidden", borderRadius: "5px" }}
                  className="img_box"
                >
                  <img src="./images/team-1-1.png" alt="" />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="content text-center py-3"
                >
                  <a className="fs-3" href="#">
                    Darrell Steward
                  </a>
                  <p style={{ fontSize: "1.2rem", margin: "0" }}>
                    Software Developer
                  </p>
                  <div className="icons_box">
                    <i className="fa-brands fa-md fa-linkedin-in"></i>
                    <i className="fa-brands fa-md fa-instagram"></i>
                    <i className="fa-brands fa-md fa-facebook-f"></i>
                    <i className="fa-brands fa-md fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* card_2 */}
            <div className="parent p-3 col-10 col-md-5 col-lg-6 col-xl-4">
              <div className="card col-12">
                <div
                  style={{ overflow: "hidden", borderRadius: "5px" }}
                  className="img_box"
                >
                  <img src="./images/team-1-2.png" alt="" />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="content text-center py-3"
                >
                  <a className="fs-3" href="#">
                    Anda Fox
                  </a>
                  <p style={{ fontSize: "1.2rem", margin: "0" }}>
                    Project Manager
                  </p>
                  <div className="icons_box">
                    <i className="fa-brands fa-md fa-linkedin-in"></i>
                    <i className="fa-brands fa-md fa-instagram"></i>
                    <i className="fa-brands fa-md fa-facebook-f"></i>
                    <i className="fa-brands fa-md fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* card_3 */}
            <div className="parent p-3 col-10 col-md-5 col-lg-6 col-xl-4">
              <div className="card col-12">
                <div
                  style={{ overflow: "hidden", borderRadius: "5px" }}
                  className="img_box"
                >
                  <img src="./images/team-1-3.png" alt="" />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="content text-center py-3"
                >
                  <a className="fs-3" href="#">
                    Ralph Edwards
                  </a>
                  <p style={{ fontSize: "1.2rem", margin: "0" }}>
                    Software Developer
                  </p>
                  <div className="icons_box">
                    <i className="fa-brands fa-md fa-linkedin-in"></i>
                    <i className="fa-brands fa-md fa-instagram"></i>
                    <i className="fa-brands fa-md fa-facebook-f"></i>
                    <i className="fa-brands fa-md fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* card_4 */}
            <div className="parent p-3 col-10 col-md-5 col-lg-6 col-xl-4">
              <div className="card col-12">
                <div
                  style={{ overflow: "hidden", borderRadius: "5px" }}
                  className="img_box"
                >
                  <img src="./images/team-1-4.png" alt="" />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="content text-center py-3"
                >
                  <a className="fs-3" href="#">
                    wade warren
                  </a>
                  <p style={{ fontSize: "1.2rem", margin: "0" }}>
                    Software Developer
                  </p>
                  <div className="icons_box">
                    <i className="fa-brands fa-md fa-linkedin-in"></i>
                    <i className="fa-brands fa-md fa-instagram"></i>
                    <i className="fa-brands fa-md fa-facebook-f"></i>
                    <i className="fa-brands fa-md fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* card_5 */}
            <div className="parent p-3 col-10 col-md-5 col-lg-6 col-xl-4">
              <div className="card col-12">
                <div
                  style={{ overflow: "hidden", borderRadius: "5px" }}
                  className="img_box"
                >
                  <img src="./images/team-1-5.png" alt="" />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="content text-center py-3"
                >
                  <a className="fs-3" href="#">
                    Kristin Waston
                  </a>
                  <p style={{ fontSize: "1.2rem", margin: "0" }}>
                    Software Developer
                  </p>
                  <div className="icons_box">
                    <i className="fa-brands fa-md fa-linkedin-in"></i>
                    <i className="fa-brands fa-md fa-instagram"></i>
                    <i className="fa-brands fa-md fa-facebook-f"></i>
                    <i className="fa-brands fa-md fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* card_6 */}
            <div className="parent p-3 col-10 col-md-5 col-lg-6 col-xl-4">
              <div className="card col-12">
                <div
                  style={{ overflow: "hidden", borderRadius: "5px" }}
                  className="img_box"
                >
                  <img src="./images/team-1-6.png" alt="" />
                </div>
                <div
                  style={{ position: "relative" }}
                  className="content text-center py-3"
                >
                  <a className="fs-3" href="#">
                    Courtney Henry
                  </a>
                  <p style={{ fontSize: "1.2rem", margin: "0" }}>
                    Software Developer
                  </p>
                  <div className="icons_box">
                    <i className="fa-brands fa-md fa-linkedin-in"></i>
                    <i className="fa-brands fa-md fa-instagram"></i>
                    <i className="fa-brands fa-md fa-facebook-f"></i>
                    <i className="fa-brands fa-md fa-twitter"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TeamPage;
