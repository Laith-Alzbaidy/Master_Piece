import React from "react";
import VideoAboutUs from "./Vedio";
import "./Aboutus.css";

function Aboutus() {
  return (
    <section className="about-section about-page spad" id="About">
      <div className="container-about-us">
        <div className="right-content">
          <h2>
            Welcome to Our Fitness<em>X</em>
          </h2>

          <p>
            We are excited to introduce FitnessX, our state-of-the-art fitness
            app that brings the GYM experience directly to your fingertips.
            FitnessX is designed to help you achieve your fitness goals and lead
            a healthy lifestyle, all from the comfort of your home.
          </p>
          <p>
            With FitnessX, you'll have access to a wide range of workouts,
            training programs, and personalized fitness plans. Whether you're a
            beginner or an experienced fitness enthusiast, FitnessX caters to
            all fitness levels and preferences, ensuring you have a fitness
            journey tailored just for you.
          </p>
        </div>
        <div className="left-continer">
          <div className="aspect-w-16 aspect-h-9">
            <VideoAboutUs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
