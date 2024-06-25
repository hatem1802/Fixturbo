import React from "react";
import Header from "../Components/Header";
import Loader from "../Components/Loader";

const ErrorPage = () => {
  return (
    <>
      <Loader />
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 style={{color:'red' ,fontSize:'5rem', textAlign:'center'}}>404 <br /> The Page Not Found</h1><br />
        <button onClick={() =>{window.history.back()}} style={{padding:'1rem 2rem'}}>Go Back</button>
      </div>
    </>
  );
};

export default ErrorPage;
