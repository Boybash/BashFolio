import React, { useState } from "react";
import BgImage from "../../assets/image 12.png";
import Line from "../../assets/Line 10.png";
import styles from "./styles.module.css";
import projectOne from "../../assets/wallspeak2.png";
import projectTwo from "../../assets/rsp.png";
import projectThree from "../../assets/feelathome.png";
import Forward from "../../assets/icons8-next-page-100 (1).png";
import Backward from "../../assets/icons8-back-to-100 (1).png";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
  const [currentpage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const projectsPerPage = 2;
  const projects = [
    {
      Image: projectThree,
      Title: "Feelathome",
      Description:
        "Real Estate Platform (Rent & Sale) A full-featured, user-centric real estate web application connecting Landlords, Agents, and Tenants. This platform allows property owners/agents to effortlessly list and manage properties for rent or sale, and provides tenants with a streamlined experience for finding, inspecting, and securing their next home.Key Features This project is designed to handle the entire property lifecycle, from listing to payment.For Landlords & Agents 🔑 Property Listing: Easily post properties for either rent or sale.Dynamic Editing: Full control over listings, allowing for updates (price, description, photos, etc.) at any time.Intuitive Dashboard: A personalized space to manage all active and archived properties.For Tenants & Buyers 🔎 Property Search: Browse and filter available properties based on location, price, type, and status (rent/sale).Inspection Booking: Conveniently schedule and book property viewings directly through the platform.Secure Payment: Integrated functionality to pay for rentals or deposits after booking/agreement.Core Platform Features 🛠️ User Authentication: Secure user login/registration powered by Firebase.User Roles: Distinct experiences and permissions for Landlords/Agents versus Tenants.Tech Stack This project leverages modern, scalable technologies to ensure a robust and fast user experience. Category,Technology,Purpose Frontend,[React],Building the user interface. Backend/Runtime,[Node.js],Server-side logic and APIs. Database/Auth,Firebase,User authentication, database (Firestore/Realtime DB), and potentially storage.Styling,[Tailwind CSS],Responsive and modern design.",
      handleClick: handleFeelathome,
    },
    {
      Image: projectOne,
      Title: "Wallspeaks News",
      Description:
        "This Blog Platform is a fully functional web application built with React, allowing users to read, create, update, and delete blog posts. The platform features a clean and responsive UI, with separate views for authenticated and unauthenticated users. Authenticated users can create new posts, edit and delete their own posts, and comment on others' posts. Unauthenticated users can view posts, search by keyword, and filter by category. The platform also includes user profiles, where users can update their info and profile picture. The project demonstrates mastery of React fundamentals, including components, props, state, and events. It also showcases ability to handle forms and validation, use React Router for navigation, and implement CRUD operations and state management. The platform is built with a robust tech stack, including React, React Router, and a styling library of choice. This project is ideal for anyone looking for a professional and functional blog platform, and demonstrates the developer's ability to build complex and scalable applications. With its clean design and robust features, this platform is perfect for bloggers, writers, and businesses looking to share their ideas and connect with their audience.",
      handleClick: handlewallSpeaks,
    },
    {
      Image: projectTwo,
      Title: "Rock Paper Scissors",
      Description:
        "This interactive game is built with HTML, CSS, and JavaScript, providing a fun and engaging experience for users. The game allow users to play against the computer, with a user-friendly interface that makes it easy to make selections and view results. Score tracking is also included, keeping track of wins, losses, and ties. The game is built with HTML, CSS, and JavaScript for a seamless user experience, utilizing JavaScript logic to determine the winner of each game. This project demonstrates an understanding of JavaScript fundamentals, including variables, functions, and conditional statements. It also showcases the ability to create interactive web pages with HTML, CSS, and JavaScript, highlighting problem-solving skills and attention to detail. Overall, this Rock Paper Scissors game is a great example of a fun and functional web application.",
      handleClick: handlerockPaperScissors,
    },
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentpage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  function handleNextpage() {
    if (currentpage < totalPages) {
      setCurrentPage(currentpage + 1);
    }
  }
  function handlePreviousPage() {
    if (currentpage > 1) {
      setCurrentPage(currentpage - 1);
    }
  }

  function handlewallSpeaks() {
    window.open(`https://wallspeaks-news.vercel.app/`, `_blank`);
  }
  function handlerockPaperScissors() {
    window.open(`https://rpsgame-ivory-kappa.vercel.app/`, `_blank`);
  }
  function handleFeelathome() {
    window.open(`https://feelathomes.vercel.app/`, `_blank`);
  }

  const handleSeeMore = (index) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  return (
    <>
      <section
        id="portfolio"
        className={`${styles.portfolioSection} max-w-ful w-full mx-auto overflow-x-hidden`}
      >
        <Fade>
          <div className="mt-10">
            <h2 className="font-bold tracking-[0.5em]">PORTFOLIO</h2>
          </div>
          <div className={styles.portfolioList}>
            <ul className="hidden">
              <li>ALL</li>
              <img src={Line} alt="line" />
              <li>CODED</li>
              <img src={Line} alt="line" />
              <li>DESIGNED</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 mt-10 gap-5 ">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-[#1A1A1A] rounded-lg p-[30px]">
                <img src={project.Image} alt={project.Title} />
                <h3 className="mt-4 font-bold text-white text-xl ">
                  {project.Title}
                </h3>
                <p className="text-white mt-3">
                  {expanded[index]
                    ? project.Description
                    : project.Description.split(" ").slice(0, 30).join(" ") +
                      (project.Description.split(" ").length > 50 ? "..." : "")}
                  {project.Description.split(" ").length > 50 && (
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => handleSeeMore(index)}
                    >
                      {expanded[index] ? " See Less" : " See More"}
                    </span>
                  )}
                </p>
                <button
                  onClick={project.handleClick}
                  className="bg-white rounded-md p-4 mt-4 cursor-pointer font-bold"
                >
                  Check It Out
                </button>
              </div>
            ))}
            <img
              className={`${styles.forwardBtn} ${
                currentpage === totalPages ? styles.notActive : ""
              } z-2`}
              src={Forward}
              alt="Forward"
              onClick={handleNextpage}
            />
            <img
              className={`${styles.backwardBtn} ${
                currentpage === 1 ? styles.notActive : ""
              } z-2`}
              src={Backward}
              alt="Backward"
              onClick={handlePreviousPage}
            />
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Portfolio;
