import React from "react";
import styles from "./style.module.css";
import ReactLogo from "../../assets/REACT LOGO.png";
import CssLogo from "../../assets/CSS LOGO.png";
import SassLogo from "../../assets/SASS LOGO.png";
import HtmlLogo from "../../assets/HTML LOGO.png";
import JavascriptLogo from "../../assets/JAVASCRIPT LOGO.png";
import FigmaLogo from "../../assets/FIGMA LOGO.png";
import GitLogo from "../../assets/GIT LOGO.png";
import TypescriptLogo from "../../assets/TYPESCRIPT LOGO.png";
import NodejsLogo from "../../assets/NODEJS LOGO.png";
import TailwindLogo from "../../assets/icons8-tailwind-css-96.png";
import MongodbLogo from "../../assets/MONGODB LOGO.png";
const MySkill = () => {
  return (
    <>
      <section id="skills" className={`${styles.skillsSection} w-full`}>
        <div>
          <h2 className="font-bold tracking-[0.5em]">SKILLS</h2>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto my-10">
          <div>
            <h3 className="font-bold">USING NOW : </h3>

            <div className="flex justify-center items-center gap-[50px] mt-[20px] max-[500px]:gap-3">
              <div className="flex flex-col items-center">
                <img className="w-[50px] h-[50px] " src={HtmlLogo} />
                <span className="text-center mt-2"> HTML5 </span>
              </div>

              <div className="flex flex-col items-center">
                <img className="w-[50px] h-[50px]" src={CssLogo} />
                <span className="text-center mt-2"> CSS3 </span>
              </div>

              <div className="flex flex-col items-center">
                <img className="w-[50px] h-[50px]" src={JavascriptLogo} />
                <span className="text-center mt-2"> JAVASCRIPT </span>
              </div>

              <div className="flex flex-col items-center">
                <img className="w-[50px] h-[50px]" src={ReactLogo} />
                <span className="text-center mt-2"> REACT </span>
              </div>
            </div>

            <div className="flex  gap-[60px] mt-[50px] max-[500px]:gap-5">
              <div className="flex flex-col items-center">
                <img
                  className="w-[50px] h-[50px]"
                  src={TailwindLogo}
                  alt="TailwindLogo"
                />
                <span className="text-center mt-2">TAILWIND</span>
              </div>

              <div className="flex flex-col items-center">
                <img className="w-[50px] h-[50px]" src={SassLogo} />
                <span className="text-center mt-2"> SASS </span>
              </div>

              <div className="flex flex-col items-center">
                <img className="w-[50px] h-[50px]" src={FigmaLogo} />
                <span className="text-center mt-2"> FIGMA </span>
              </div>

              <div className="flex flex-col items-center">
                <img className="w-[50px] h-[50px]" src={GitLogo} />
                <span className="text-center mt-2"> GIT </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-3 mx-auto my-0">
          <div>
            <h3 className="font-bold mt-5 mb-5">LEARNING :</h3>

            <div className="flex items-center justify-center gap-[30px] mt-[30px] mb-[30px] max-[500px]:gap-2">
              <div className="flex flex-col items-center">
                <img
                  className="w-[50px] h-[50px]"
                  src={TypescriptLogo}
                  alt="TypescriptLogo"
                />
                <span className="text-center mt-2">TYPESCRIPT</span>
              </div>

              <div className="flex flex-col items-center">
                <img
                  className="w-[50px] h-[50px]"
                  src={NodejsLogo}
                  alt="Nodejslogo"
                />
                <span className="text-center mt-2">NODEJS</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-[50px] h-[50px]"
                  src={MongodbLogo}
                  alt="MongodbLogo"
                />
                <span className="text-center mt-2">MONGODB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkill;
