import React, { useRef, useState } from "react";
import Logo from "../../assets/bash logo.png";
import "tailwindcss";
import styles from "./styles.module.css";
import Hambuger from "../../assets/icons8-menu-50.png";
import Cancel from "../../assets/icons8-x-96.png";
const Navbar = () => {
  const [displayClass, setDisplayClas] = useState("");

  function toggleSidebar() {
    setDisplayClas(displayClass === "active" ? "" : "active");
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPortfolio = () => {
    const portFolioSection = document.getElementById("portfolio");
    portFolioSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className={`${styles.navSection} max-w-full w-full z-10  mx-auto`}
      >
        <header>
          <div className={styles.navLogo}>
            <img
              className="w-[100px] max-[750px]:w-[100px] max-w-full h-auto "
              src={Logo}
              alt="Logo"
            />
          </div>
          <div
            className={` ${
              displayClass === "active" ? "block" : "hidden"
            } min-[750px]:block max-[750px]:absolute max-[750px]:top-25 max-[750px]:left-0 max-[750px]:w-full max-[750px]:bg-secondary`}
          >
            <ul className=" flex justify-between items-center gap-[50px] max-[750px]:flex-col max-[750px]:gap-5 max-[750px]:mt-3 max-[750px]:mb-3 max-[750px]:">
              <li onClick={scrollToAbout}>About Me</li>
              <li onClick={scrollToSkills}>Skills</li>
              <li onClick={scrollToPortfolio}>PortFolio</li>
              <li onClick={scrollToContact} className={styles.list}>
                Contact Me
              </li>
            </ul>
          </div>
          <img
            onClick={toggleSidebar}
            className=" w-10 h-10 hidden max-[750px]:block"
            src={displayClass === "active" ? Cancel : Hambuger}
          />
        </header>
      </section>
    </>
  );
};

export default Navbar;
