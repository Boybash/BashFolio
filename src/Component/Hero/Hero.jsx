import React from "react";
import Picture from "../../assets/bash profile.jpg";
import styles from "./styles.module.css";
import GithubLogo from "../../assets/github.png";
import LinkedinLogo from "../../assets/linkedin_2931621.png";
import MailLogo from "../../assets/sign_5111979.png";
import WhatsappLogo from "../../assets/whatsapp_3992558.png";
import { Navigate, useNavigate } from "react-router-dom";
import LineBreaker from "../../assets/separatorWhite 2.png";
import { Fade, Slide } from "react-awesome-reveal";
const Hero = () => {
  function handleGit() {
    window.open(`https://github.com/Boybash`, `_blank`);
  }
  function handleWhatsapp() {
    window.open(`https://wa.me/+2348132743229`, `_blank`);
  }
  function handleLinkedin() {
    window.open(
      `https://www.linkedin.com/in/bashir-toheeb-b28976263`,
      `_blank`
    );
  }
  function handleEmail() {
    window.open(`mailto:Toheebibidapo@gmail.com`, `_blank`);
  }

  return (
    <>
      <section
        id="top"
        className={`${styles.heroSection} p-[30px_20px] bg-[linear-gradient(100deg,#d7d7d7_50%,#000000_50%)] w-full max-[700px]:bg-primary max-[700px]:p-[50px] max-[700px]:bg-[url("https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332")] max-[700px]:cover max-[700px]:bg-no-repeat`}
      >
        <div>
          <div className={styles.heroDetails}>
            <h2 className="font-bold max-[700px]:hidden">Hi, I am</h2>
            <h1 className="font-bold max-[700px]:hidden">Bashir Toheeb</h1>
            <h3 className=" text-xl font-bold mt-3 max-[700px]:hidden">
              Front-End Developer
            </h3>
          </div>
          <div className="max-[700px]:flex flex-col justify-center items-center gap-2 p-">
            <h1 className="hidden max-[700px]:block font-bold font-montserat text-2xl text-primary max-[385px]:text-xl">
              My name is Toheeb
            </h1>
            <h3 className="hidden max-[700px]:block font-bold text-4xl text-primary max-[450px]:text-3xl max-[385px]:text-2xl">
              I’M A DEVELOPER
            </h3>
            <img
              className="hidden max-[700px]:block mb-3 mt-3"
              src={LineBreaker}
              alt="Linebreaker"
            />
          </div>
          <div className="flex gap-3.5 mt-[100px] max-[700px]:mt-5 max-[700px]:items-center max-[700px]:justify-center">
            <img
              className="animate-bounce w-[50px] cursor-pointer bg-primary p-[10px] rounded-3xl shadow-[0_0_0_2px_#808080] "
              onClick={handleGit}
              src={GithubLogo}
              alt="Git"
            />
            <img
              className="animate-bounce  w-[50px] cursor-pointer bg-primary p-[10px] rounded-3xl shadow-[0_0_0_2px_#808080]"
              onClick={handleLinkedin}
              src={LinkedinLogo}
              alt="linkedin"
            />
            <img
              className="animate-bounce  w-[50px] cursor-pointer bg-primary p-[10px] rounded-3xl shadow-[0_0_0_2px_#808080]"
              onClick={handleWhatsapp}
              src={WhatsappLogo}
              alt="whatsapp"
            />
            <img
              className="animate-bounce  w-[50px] cursor-pointer bg-primary p-[10px] rounded-3xl shadow-[0_0_0_2px_#808080]"
              onClick={handleEmail}
              src={MailLogo}
              alt="mail"
            />
          </div>
        </div>
        <div className={`${styles.heroProfile} max-[700px]:hidden`}>
          <img
            className="w-[300px] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] rounded-bl-0"
            src={Picture}
            alt="Profile Picture"
          />
        </div>
      </section>
      <section className={`${styles.heroIntro} w-full`}>
        <Fade>
          <div className="p-5">
            <h1 className="mb-3">Introduction</h1>
            <p>
              Hi, I'm BASHIR TOHEEB, a frontend developer with a passion for
              building responsive, user-friendly interfaces. I have a solid
              foundation in HTML, CSS, and JavaScript, and I'm experienced in
              using React to create dynamic, reusable components. I'm always
              looking to improve my skills and stay up-to-date with the latest
              trends and technologies in the field. I'm excited to collaborate
              with others and contribute to innovative projects that make a
              difference.
            </p>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Hero;
