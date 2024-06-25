import React from "react";

function to_top() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
  const button = document.querySelector("#to_top");
  let scrollY = window.scrollY;

  if (scrollY >= 300) {
    button.classList.add("_show");
  }

  if (scrollY <= 300) {
    button.classList.remove("_show");
  }

  const scrollProgress =(document.documentElement.scrollTop /(document.documentElement.scrollHeight - document.documentElement.clientHeight)) *100;
  const progressRingIndicator = document.querySelector(".progress-ring-indicator");
  const circumference = 2 * Math.PI * parseFloat(progressRingIndicator.getAttribute("r"));
  const offset = circumference - (scrollProgress / 100) * circumference;
  progressRingIndicator.style.strokeDasharray = `${circumference}`;
  progressRingIndicator.style.strokeDashoffset = `${offset}`;
});

const ToTop = () => {
  return (
    <>
      <div className="progress-container">
        <button id="to_top" onClick={to_top}>
          <i
            style={{
              position: "absolute",
              fontSize: "1.2rem",
              color: "#e8092e",
              zIndex: "1",
            }}
            className="fa-solid fa-arrow-up"
          ></i>
          <svg className="progress-ring" width="100" height="100">
            <circle
              className="progress-ring-border"
              stroke="red"
              strokeWidth="2"
              fill="white"
              r="25"
              cx="50%"
              cy="50%"
            />
            <circle
              className="progress-ring-circle"
              stroke="red"
              strokeWidth="20"
              fill="transparent"
              r="20"
              cx="50%"
              cy="50%"
            />
            <circle
              className="progress-ring-indicator"
              stroke="red"
              strokeWidth="5"
              fill="transparent"
              r="22"
              cx="50%"
              cy="50%"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ToTop;
