import React from "react";
import ToTop from "../Components/ToTop";
import Header from "../Components/Header";
import SubPage_head from "../Components/SubPage_head";
import Latest_port from "../Components/Latest_port";
import Footer from "../Components/Footer";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import Loader from "../Components/Loader";

const ProjectsPage = () => {
  return (
    <>
      <Loader />
      <ScrollToTopOnMount />
      <ToTop />
      <Header />
      <SubPage_head title="Project" />

      <Latest_port />

      <Footer />
    </>
  );
};

export default ProjectsPage;
