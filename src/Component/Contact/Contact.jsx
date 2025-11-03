import React, { useState } from "react";
import styles from "./styles.module.css";
import LineBreaker from "../../assets/separatorBlack 1.png";
import Line from "../../assets/Line 10.png";
import Logo from "../../assets/bash logo.png";
import * as yup from "yup";
import { Fade, Slide } from "react-awesome-reveal";
const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [error, setErrors] = useState({});
  const [submittion, setSubmittion] = useState(false);
  const [clearModal, setClearModal] = useState("");

  function handleClearModal() {
    setClearModal("active");
  }

  function handleFormData(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }
  function resetForm() {
    setformData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  }

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    number: yup.string().required("Field must not be empty"),
    message: yup.string().required("Message is required"),
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      setSubmittion(true);
      resetForm();
      setErrors({});
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      setSubmittion(false);
    }
  }

  return (
    <>
      <section
        id="contact"
        className={`${styles.contactSection} max-w-full w-full mx-auto overflow-x-hidden`}
      >
        <Fade>
          <div>
            <h2 className="font-bold tracking-[0.5em]">CONTACT</h2>
          </div>
        </Fade>

        <Slide direction="left">
          <div className="w-[600px] flex flex-col items-center justify-center m-auto max-[630px]:w-[400px] max-[400px]:w-[250px]">
            <p>
              - Let's connect! Whether you have a question, a project idea, or
              just want to say hello, I'd love to hear from you.
            </p>
            <p>
              - Get in touch with me to discuss how we can work together to
              bring your vision to life.
            </p>
            <p>
              - Have a question or inquiry? Feel free to reach out to me
              directly.
            </p>
          </div>
        </Slide>

        <div>
          <img
            className={styles.contatcLineBreaker}
            src={LineBreaker}
            alt="Linebreaker"
          />
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <Fade>
            <div className="relative">
              <input
                className="w-[450px] max-[500px]:w-[300px]"
                onChange={handleFormData}
                value={formData.name}
                name="name"
                placeholder="ENTER YOUR NAME"
              />
              {error.name && (
                <p className="text-[red] absolute left-0 top-full mt-1 ">
                  {error.name}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                className="w-[450px] max-[500px]:w-[300px]"
                onChange={handleFormData}
                value={formData.email}
                name="email"
                placeholder="ENTER YOUR EMAIL"
              />
              {error.email && (
                <p className="text-[red] absolute left-0 top-full mt-1">
                  {error.email}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                className="w-[450px] max-[500px]:w-[300px]"
                onChange={handleFormData}
                value={formData.number}
                name="number"
                placeholder="PHONE NUMBER"
              />
              {error.number && (
                <p className="text-[red] absolute left-0 top-full mt-1">
                  {error.number}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                onChange={handleFormData}
                className={`${styles.contactInputMessage} w-[450px] max-[500px]:w-[300px] `}
                value={formData.message}
                name="message"
                placeholder="YOUR MESSAGE"
              />
              {error.message && (
                <p
                  className="text-[red] absolute
           left-0 top-full mt-1"
                >
                  {error.message}
                </p>
              )}
            </div>
          </Fade>

          <Fade>
            <div className={styles.contactFormSubmit}>
              <img src={Line} alt="line" />
              <button className="font-bold cursor-pointer">SUBMIT</button>
              <img src={Line} alt="line" />
            </div>
          </Fade>
        </form>

        {submittion && (
          <div
            onClick={handleClearModal}
            className={`${
              clearModal === "active" ? "hidden" : ""
            }bg-black/70 fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center`}
          >
            <div
              className={`${
                clearModal === "active" ? "hidden" : ""
              }bg-primary flex flex-col justify-center items-center w-[500px] p-5 max-[500px]:w-[300px]`}
            >
              <img
                className={`${
                  clearModal === "active" ? "hidden" : ""
                } w-[150px]`}
                src={Logo}
                alt="Logo"
              />
              <h2 className={clearModal === "active" ? "hidden" : ""}>
                Thank You For Contacting BTI Design
              </h2>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
