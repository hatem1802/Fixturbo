import React from 'react'
import Anim_rtl from './Anim_rtl'

const WorkProcess = () => {
  return (
    <>
      
      <section className="work_process">
        <div className="container">
          <Anim_rtl />
          <div className="head_box text-center">
            <h4 className="sec_title-2">WORK PROCESS</h4>
            <h2 style={{ fontWeight: "900"}}>
              It Dependable Car Repair Best <br /> Solutions
            </h2>
          </div>
          <div className="items_box row">
            {/* item-1 */}
            <div className="item_box d-flex flex-column col-12 col-lg-4 align-items-center p-3 text-center">
              <img
                className="icon"
                src="./images/process-icon-1-1.svg"
                alt=""
              />
              <h3 style={{ fontWeight: "900" }}>Mobile Car Repair</h3>
              <p style={{ fontSize: "1.2rem" }}>
                It is long established fact that a reader will be distrol acted
                bioiiy. It is long established fact that a reader will be
                distrol acted bioiiy
              </p>
            </div>
            {/* item-2 */}
            <div className="item_box d-flex flex-column col-12 col-lg-4 align-items-center p-3 text-center mt-5">
              <img
                className="icon"
                src="./images/process-icon-1-2.svg"
                alt=""
              />
              <h3 style={{ fontWeight: "900" }}>Pro Auto Fix</h3>
              <p style={{ fontSize: "1.2rem" }}>
                It is long established fact that a reader will be distrol acted
                bioiiy. It is long established fact that a reader will be
                distrol acted bioiiy
              </p>
            </div>
            {/* item-3 */}
            <div className="item_box d-flex flex-column col-12 col-lg-4 align-items-center p-3 text-center">
              <img
                className="icon"
                src="./images/process-icon-1-3.svg"
                alt=""
              />
              <h3 style={{ fontWeight: "900" }}>Precision Auto Works</h3>
              <p style={{ fontSize: "1.2rem" }}>
                It is long established fact that a reader will be distrol acted
                bioiiy. It is long established fact that a reader will be
                distrol acted bioiiy
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkProcess
