import React from 'react'
import { Link } from 'react-router-dom'

const SubPage_head = (props) => {
  return (
    <section className="sub_page_head">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-between">
            <div className="title_box-c text-center my-5">
              <h2 className="fw-bold fs-1">{props.title}</h2>
              <p style={{fontSize:'1.2rem'}}>
                <Link to="/">Home</Link>
                <i style={{ fontSize: "0.8rem", margin:'0 10px' }} className="fa-solid fa-chevron-right" ></i>
                {props.title}
              </p>
            </div>
            <div className="img_box-c d-none d-lg-block">
              <img
                style={{ maxWidth: "100%" }}
                src="./images/breadcrumb-thumb.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default SubPage_head
