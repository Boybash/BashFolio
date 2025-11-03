import React from "react";
import UpArrow from "../../assets/uprrow.png";
import LinkedinLogo from "../../assets/WHITE LINKEDIN.png";
import MessageLogo from "../../assets/MESSAGE LOGO.png";
import InstagramLogo from "../../assets/INSTAGRAM LOGO.png";
import FacebookLogo from "../../assets/FACEBOOK LOGO.png";
import styles from "./styles.module.css";
const Footer = () => {
  const scrollToTop = () => {
    const headerSection = document.getElementById("top");
    headerSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="mb-4 max-w-full w-full mx-auto">
        <div className={styles.footerBack}>
          <img
            className="cursor-pointer"
            onClick={scrollToTop}
            src={UpArrow}
            alt="UpArrow"
          />
          <h4 className="cursor-pointer" onClick={scrollToTop}>
            BACK TO TOP
          </h4>
        </div>
        <div className={styles.footerLogo}>
          <img src={FacebookLogo} alt="FacebookLogo" />
          <img src={LinkedinLogo} alt="LinkedinLogo" />
          <img src={InstagramLogo} alt="InstagramLogo" />
          <img src={MessageLogo} alt="MessageLogo" />
        </div>
        <div className="mt-5 flex justify-center items-center gap-5 text-white max-[400px]:flex max-[400px]:flex-col">
          <h5 className="max-[400px]:text-xl"> @2025 Bashir Toheeb</h5>
          <p className="max-[400px]:text-xl"> All Right Reserverd </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
