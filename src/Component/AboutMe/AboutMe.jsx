import React from "react";
import Line from "../../assets/Line 10.png";
import LineBreaker from "../../assets/separatorBlack 1.png";
import styles from "./styles.module.css";

const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="bg-primary w-full mx-auto p-5 font-montserat"
      >
        <div className={styles.aboutmeIntro}>
          <h2 className="font-bold tracking-[0.5em]">ABOUT ME</h2>
          <p className="w-[600px] max-[630px]:w-[400px] max-[400px]:w-[250px]">
            Fuelled by curiosity and driven by creativity, I craft digital
            experiences that are both functional and beautiful. Let's build
            something amazing together!
          </p>
        </div>
        <div className={styles.aboutmeExplore}>
          <img src={Line} alt="line" />
          <h2 className="font-bold text-xl">Explore</h2>
          <img src={Line} alt="line" />
        </div>

        <img
          className={styles.aboutmeLineBreaker}
          src={LineBreaker}
          alt="Linebreaker"
        />

        <div className={`${styles.aboutmeInfo} max-[700px]:flex-col`}>
          <div className="w-[500px] max-[630px]:flex max-[630px]:flex-col max-[630px]:justify-center max-[630px]:items-center">
            <h2 className="font-bold text-xl text-left max-[630px]:mb-2">
              Design
            </h2>
            <p className="max-[630px]:w-[400px] max-[400px]:w-[250px]">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="w-[500px] max-[630px]:flex max-[630px]:flex-col max-[630px]:justify-center max-[630px]:items-center">
            <h2 className="font-bold text-xl max-[630px]:mb-2">Development</h2>
            <p className="max-[630px]:w-[400px] max-[400px]:w-[250px]">
              I offer custom website development services, working either from
              your specifications or starting from scratch with regular
              consultations to ensure your vision is realized.
            </p>
          </div>
        </div>

        <div className={styles.aboutmeInfos}>
          <div className="w-[500px] max-[630px]:flex max-[630px]:flex-col max-[630px]:justify-center max-[630px]:items-center">
            <h2 className="font-bold text-xl max-[630px]:mb-2">
              Maintenance & Updates
            </h2>
            <p className="max-[630px]:w-[400px] max-[400px]:w-[250px]">
              I can maintain and update your existing site to ensure it remains
              secure, efficient, and aligned with your evolving needs. I can
              also implement new features and functionalities as required.
            </p>
          </div>
        </div>

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

// service cloud.firestore {
//   match /databases/{database}/documents {

//     // This rule allows anyone with your Firestore database reference to view, edit,
//     // and delete all data in your Firestore database. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Firestore database will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // all client requests to your Firestore database will be denied until you Update
//     // your rules
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2025, 10, 15);
//     }
//   }
// }
