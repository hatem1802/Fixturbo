import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';  
import { Link } from "react-router-dom";

const Contact__Test = () => {
  return (
    <>
      <section className="contact_us-s">
        <div className="bg-color">
          <img src="./images/cta-bg1-1.png" alt="" />
        </div>
        <div
          style={{ padding: "5rem 0", height: "100%", position: "relative" }}
          className="container"
        >
          <div className="d-flex align-items-center flex-column flex-lg-row text-center text-lg-start justify-content-between">
            <div className="head_box text-light">
              <h4 className="sec_title-1 text-light">CONTACT US</h4>
              <h2 style={{ fontWeight: "900"}}>
                Where Engines Roar and <br /> Problems Soar
              </h2>
            </div>
            <div className="btn_box">
              <Link to="/contact" className="btn">
                VIEW MORE <i className="fa-solid fa-arrow-right fa-lg"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="clients_test">
        <div className="container">
          <div className="d-flex">
            <div style={{position:'relative'}} className="image_box col-0 col-lg-6 pe-3">
              <img className="col-11" src="./images/testimonial-1-1.png" alt="" />
            </div>
            <div className="details col-12 col-lg-6 pe-5">
              <h4 className="sec_title-1">CLIENTS TESTIMONIAL</h4>
              <h2
                style={{ color: "white", fontWeight: "900", margin:'0 0 3rem 0' }}
              >
                Car Repair the Best Services
              </h2>
              <Swiper
                spaceBetween={20}
                pagination={{
                  clickable: true
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                style={{width:'100%'}}
              >
                <SwiperSlide>
                    <h3 style={{color:'white'}}>Nafiz Bhuiyan</h3>
                    <h6 className="fs-6" style={{color:'#c1c1c1'}}>Customer</h6><br />
                    <p style={{fontSize:'1.5rem', color:'#c1c1c1'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at cupiditate quo consequatur iste accusantium tempore dolorum accusamus debitis temporibus.</p>
                    <br />
                    <div className="stars d-flex gap-2">
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3 style={{color:'white'}}>Nafiz Bhuiyan</h3>
                    <h6 className="fs-6" style={{color:'#c1c1c1'}}>Customer</h6><br />
                    <p style={{fontSize:'1.5rem', color:'#c1c1c1'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at cupiditate quo consequatur iste accusantium tempore dolorum accusamus debitis temporibus.</p>
                    <br />
                    <div className="stars d-flex gap-2">
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3 style={{color:'white'}}>Nafiz Bhuiyan</h3>
                    <h6 className="fs-6" style={{color:'#c1c1c1'}}>Customer</h6><br />
                    <p style={{fontSize:'1.5rem', color:'#c1c1c1'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at cupiditate quo consequatur iste accusantium tempore dolorum accusamus debitis temporibus.</p>
                    <br />
                    <div className="stars d-flex gap-2">
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                        <i style={{color:'#F8B427'}} className="fa-solid fa-star"></i>
                    </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact__Test;
