import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import MySkill from "../MySkill/MySkill";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Certificate from "../Certificate/Certificate";
import React from "react";
const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <MySkill />
      <Certificate />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
