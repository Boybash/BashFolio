import React from "react";
import Line from "../../assets/Line 10.png";
import LineBreaker from "../../assets/separatorBlack 1.png";
import styles from "./styles.module.css";
import { Slide, Fade, Rotate } from "react-awesome-reveal";
const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="bg-primary max-w-full mx-auto p-5 font-montserat w-full overflow-x-hidden"
      >
        <Slide direction="left">
          <div className={styles.aboutmeIntro}>
            <h2 className="font-bold tracking-[0.5em]">ABOUT ME</h2>
            <p className="w-[600px] max-[630px]:w-[400px] max-[400px]:w-[250px]">
              Fuelled by curiosity and driven by creativity, I craft digital
              experiences that are both functional and beautiful. Let's build
              something amazing together!
            </p>
          </div>
        </Slide>

        <Fade>
          <div className={styles.aboutmeExplore}>
            <img src={Line} alt="line" />
            <h2 className="font-bold text-xl">Explore</h2>
            <img src={Line} alt="line" />
          </div>
        </Fade>

        <img
          className={styles.aboutmeLineBreaker}
          src={LineBreaker}
          alt="Linebreaker"
        />

        <Slide direction="right">
          <div className={`${styles.aboutmeInfo} max-[1100px]:flex-col`}>
            <div className="w-[500px] max-[630px]:flex max-[630px]:flex-col max-[630px]:justify-center max-[630px]:items-center">
              <h2 className="font-bold text-xl text-left max-[630px]:mb-2">
                Design
              </h2>
              <p className="max-[630px]:w-[400px] ml-4 max-[400px]:w-[250px]">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>

            <div className="w-[500px] max-[630px]:flex max-[630px]:flex-col max-[630px]:justify-center max-[630px]:items-center">
              <h2 className="font-bold text-xl max-[630px]:mb-2">
                Development
              </h2>
              <p className="max-[630px]:w-[400px] ml-4  max-[400px]:w-[250px]">
                I offer custom website development services, working either from
                your specifications or starting from scratch with regular
                consultations to ensure your vision is realized.
              </p>
            </div>
          </div>
        </Slide>

        <Slide direction="right">
          <div className={styles.aboutmeInfos}>
            <div className="w-[500px] max-[630px]:flex max-[630px]:flex-col max-[630px]:justify-center max-[630px]:items-center">
              <h2 className="font-bold text-xl max-[630px]:mb-2">
                Maintenance & Updates
              </h2>
              <p className="max-[630px]:w-[400px] ml-4  max-[400px]:w-[250px]">
                I can maintain and update your existing site to ensure it
                remains secure, efficient, and aligned with your evolving needs.
                I can also implement new features and functionalities as
                required.
              </p>
            </div>
          </div>
        </Slide>

        <img
          className={styles.aboutmeLineBreaker}
          src={LineBreaker}
          alt="Linebreaker"
        />
      </section>
    </>
  );
};

export default AboutMe;
