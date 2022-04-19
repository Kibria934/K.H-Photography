import React from "react";
import kibria from "../../../images/banner/kiibria.png";
import "./About.css";
const About = () => {
  return (
    <div className="container p-container">
      <div className="d-flex align-items-center mt-4">
        <div>
          <img className="me-photo" src={kibria} alt="" />
        </div>
        <div className="ms-4">
          <h1 className="name">Md Kibria Hossain</h1>
          <small>student of PHero</small>
          <p className="aim">
            I am very simple guy. I love coding.From my childhood I just wanted
            to be a software engineer.But I could not study in computer
            science.Recently I am student of PHero. Now My Aim in life is to
            become a programmer. I want to make it my carer. I am very
            interested to programming that's why I think I can do this. I have a
            strong wiling power to achieve my success if Allah bless me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
