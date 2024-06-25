import React, { useEffect, useState } from "react";
import Anim_rtl from "./Anim_rtl";
import { Link } from "react-router-dom";

const Latest_port = () => {
  const [auto, setAuto] = useState(false);
  const [care, setCare] = useState(false);
  const [fix, setFix] = useState(false);

  const allProjects = () => {
    setAuto(true);
    setCare(true);
    setFix(true);
  };
  const autoFixers = () => {
    setAuto(true);
    setCare(false);
    setFix(false);
  };

  const careClinic = () => {
    setCare(true);
    setAuto(false);
    setFix(false);
  };

  const carFix = () => {
    setFix(true);
    setAuto(false);
    setCare(false);
  };

  useEffect(() => {
    allProjects();
  }, []);
  return (
    <>
      <section className="latest_port">
        <div className="container">
          <Anim_rtl />
          <div className="head_box text-center">
            <h4 className="sec_title-2">LATEST PORTFOLIO</h4>
            <h2 style={{ fontWeight: "900", padding: "1rem" }}>
              Where Expertise Meets <br /> Every Engine
            </h2>
          </div>
          <div className="buttons_box d-flex justify-content-center my-5 gap-4 flex-wrap">
            <button onClick={allProjects} id="btn_1" className="btn">
              ALL PROJECTS
            </button>
            <button onClick={autoFixers} id="btn_2" className="btn">
              AUTO FIXERS
            </button>
            <button onClick={careClinic} id="btn_3" className="btn">
              CAR CARE CLINIC
            </button>
            <button onClick={carFix} id="btn_4" className="btn">
              CAR FIX
            </button>
          </div>
          <div className="images_box row gap-3 justify-content-center">
            <div className="left d-flex flex-column col-12 col-lg-6">
              <div className={`left_top mb-4 ${care ? "block" : "none"}`}>
                <div className="col-12" id="box_1">
                  <img
                    style={{ width: "100%" }}
                    src="./images/1-1.png"
                    alt="."
                  />
                  <div className="desc">
                    <div className="left">
                      <h5 style={{ fontWeight: "400" }}>Our Projects</h5>
                      <h3 style={{ fontWeight: "900" }}>Women Entrepreneurs</h3>
                    </div>
                    <div className="right">
                      <Link to="/projects_details">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`left_bottom ${auto ? "block" : "none"}`}>
                <div className="col-12" id="box_5">
                  <img
                    style={{ width: "100%" }}
                    src="./images/1-5.png"
                    alt="."
                  />
                  <div className="desc">
                    <div className="left">
                      <h5 style={{ fontWeight: "400" }}>Our Projects</h5>
                      <h3 style={{ fontWeight: "900" }}>Women Entrepreneurs</h3>
                    </div>
                    <div className="right">
                      <Link to="/projects_details">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right row gap-4 col-12 col-lg-6">
              <div className={`right_top p-0 ${auto ? "block" : "none"}`}>
                <div className="col-12" id="box_2">
                  <img
                    style={{ width: "100%" }}
                    src="./images/1-2.png"
                    alt="."
                  />
                  <div className="desc">
                    <div className="left">
                      <h5 style={{ fontWeight: "400" }}>Our Projects</h5>
                      <h3 style={{ fontWeight: "900" }}>Women Entrepreneurs</h3>
                    </div>
                    <div className="right">
                      <Link to="/projects_details">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`right_middle p-0 flex-column flex-lg-row gap-4 ${
                  fix ? "block" : "none"
                }`}
              >
                <div id="box_3">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="./images/1-3.png"
                    alt="."
                  />
                  <div className="desc">
                    <div className="left">
                      <h5 style={{ fontWeight: "400" }}>Our Projects</h5>
                      <h3 style={{ fontWeight: "900" }}>Women Entrepreneurs</h3>
                    </div>
                    <div className="right">
                      <Link to="/projects_details">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="box_4">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="./images/1-4.png"
                    alt="."
                  />
                  <div className="desc">
                    <div className="left">
                      <h5 style={{ fontWeight: "400" }}>Our Projects</h5>
                      <h3 style={{ fontWeight: "900" }}>Women Entrepreneurs</h3>
                    </div>
                    <div className="right">
                      <Link to="/projects_details">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`right_bottom p-0 ${fix || care ? "block" : "none"}`}>
                <div className="col-12" id="box_6">
                  <img
                    style={{ width: "100%" }}
                    src="./images/1-6.png"
                    alt="."
                  />
                  <div className="desc">
                    <div className="left">
                      <h5 style={{ fontWeight: "400" }}>Our Projects</h5>
                      <h3 style={{ fontWeight: "900" }}>Women Entrepreneurs</h3>
                    </div>
                    <div className="right">
                      <Link to="/projects_details">
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest_port;
