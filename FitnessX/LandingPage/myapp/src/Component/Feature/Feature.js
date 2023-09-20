import React from "react";
import image1 from "../../assets/images/img/feature-1.jpg";
import image2 from "../../assets/images/img/feature-2.jpg";
import image3 from "../../assets/images/img/feature-3.jpg";
import image4 from "../../assets/images/img/feature-4.jpg";
import barbell from "./barbell.png";
import booking from "./booking.png";
import support from "./support.png";
import training from "./training.png";
import "./Feature.css";

function Feature() {
  return (
    <section id="Feacher">
      <div className="container feature pt-5">
        <div className="d-flex flex-column text-center mb-5">
          <h2 className="text-primary font-weight-bold">Why Choose Us?</h2>
          <h4 className="display-4 font-weight-bold">
            Benefits of Joining FitnessX
          </h4>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5 image-feature">
                <img
                  className="img-fluid mb-3 mb-sm-0"
                  src={image1}
                  alt="Videos Instruction"
                />
                <div className="icon-feature">
                  <img src={barbell} alt="Videos Instruction Icon" />
                </div>
              </div>
              <div className="col-sm-7">
                <h4 className="font-weight-bold">Videos Instruction</h4>
                <p>
                  Access a variety of instructional workout videos with expert
                  trainers guiding you through exercises for better results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5 image-feature">
                <img
                  className="img-fluid mb-3 mb-sm-0"
                  src={image2}
                  alt="Training Calendar"
                />
                <div className="icon-feature">
                  <img src={training} alt="Training Calendar Icon" />
                </div>
              </div>
              <div className="col-sm-7">
                <h4 className="font-weight-bold">Training Calendar</h4>
                <p>
                  Plan and schedule your workouts with our organized training
                  calendar for a balanced and effective fitness routine.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5 image-feature">
                <img
                  className="img-fluid mb-3 mb-sm-0"
                  src={image3}
                  alt="Free Apps"
                />
                <div className="icon-feature">
                  <img src={booking} alt="Free Apps Icon" />
                </div>
              </div>
              <div className="col-sm-7">
                <h4 className="font-weight-bold">Free App</h4>
                <p>
                  Get our feature-rich and user-friendly fitness app for free,
                  accessible on multiple platforms to track your progress and
                  stay motivated.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5 image-feature">
                <img
                  className="img-fluid mb-3 mb-sm-0"
                  src={image4}
                  alt="Community Support"
                />
                <div className="icon-feature">
                  <img src={support} alt="Community Support Icon" />
                </div>
              </div>
              <div className="col-sm-7">
                <h4 className="font-weight-bold">Community Support</h4>
                <p>
                  Join our active fitness community to engage with fellow
                  members, share progress, and receive encouragement and
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
