import React from "react";
import Banner from "../Banner/Banner";
import ExperienceSupportServiceSection from "../ExperienceSupportServiceSection/ExperienceSupportServiceSection";
import Service from "../Service/Service";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Navbar from "../Shared/Navbar/Navbar";
import MyProjects from "../My-projects/MyProjects";

const Home = () => {
  return (
    <div>
      <Banner />
      <ExperienceSupportServiceSection />
      <Service />
      <Experience />
      <Portfolio />
      <MyProjects />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
