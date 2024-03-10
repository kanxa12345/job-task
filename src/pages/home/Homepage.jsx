import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import About from "./About";
import Statistics from "./Statistics";
import News from "./News";
import Testimonial from "./Testimonial";

const Homepage = () => {
  return (
    <>
      <Banner />
      <About />
      <Statistics />
      <News />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Homepage;
