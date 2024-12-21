import React from "react";
import FAQ from "../../Components/FAQ/FAQ.jsx";
import StepCard from "../../Components/Card/StepCard";
import Header from "../../Components/Header/Header";
import { step } from "./steps";
import { FaAward } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";
import { ImTrophy } from "react-icons/im";
import { CiMedal } from "react-icons/ci";
import Blog from "../../Components/Blogs/Blog.jsx";
import "./AboutUs.css"; // Import the CSS file

const Aboutus = () => {
  const Steps = step.map((step, index) => {
    return <StepCard key={index} step={step} />;
  });

  return (
    <>
      <Header title={"About-Us"} />
      {/* landing section  */}
      <section className="aboutus-container section-content">
        <div className="flex-display three-quarters-width large-gap">
          <div className="half-width">
            <img
              src="/public/about-us/blogging-jobs-scaled.avif"
              alt="About Us"
              className="rounded-corners shadow-effect"
            />
          </div>
          <div className="half-width flex-display column-direction center-justify">
            <h2 className="semi-bold-text text-40 margin-bottom-small">
              What is Jobify ?
            </h2>
            <p className="text-18 relaxed-line-height">
              Jobify is a modern job-matching platform designed to streamline
              the hiring process for both job seekers and employers. Our goal is
              to create a user-friendly experience that connects individuals
              with opportunities tailored to their skills and aspirations. From
              entry-level positions to specialized roles, Jobify ensures
              efficient and reliable connections to help everyone achieve their
              professional goals.
            </p>
          </div>
        </div>
      </section>
      {/* steps section  */}
      <section className="light-green-bg aboutus-container section-content">
        <div className="flex-display center-items center-justify margin-bottom-large">
          <div className="center-text">
            <h1 className="bold-text text-50 black-text">How it Works</h1>
            <p className="normal-text text-16">
              Jobify simplifies your job search by connecting you with tailored
              opportunities. Browse, apply, and land your dream job all in one
              place.
            </p>
          </div>
        </div>
        <div className="flex-display justify-between full-width large-gap padding-large">
          {Steps}
        </div>
      </section>
      {/* FAQ section  */}
      <section className="aboutus-container section-content">
        <div className="full-width center-text padding-large default-cursor">
          <h2 className="bold-text text-50 margin-bottom-small">
            Frequently Asked Questions
          </h2>
          <p className="text-14 normal-text padding-large">
            Find answers to common queries and get more information about using
            our platform effectively.
          </p>
        </div>
        <FAQ />
      </section>
      {/* working with the best  */}
      <section className="aboutus-container section-content">
        <div className="flex-display large-gap full-width three-quarters-width">
          <div className="half-width flex-display column-direction medium-gap">
            <div className="height-400">
              <img
                src="/public/about-us/teamwork-2.jpg"
                alt="Team collaboration"
                className="full-width height-400 cover-image extra-rounded-corners"
              />
            </div>
            <div className="flex-display medium-gap">
              <img
                src="/public/about-us/6a0fa8af-1b1a-4f25-aa51-3ae2579d4e95[1].jpg"
                alt="Business meeting"
                className="half-width height-190 cover-image extra-rounded-corners"
              />
              <img
                src="/public/about-us/depositphotos_110757274-stock-photo-buiness-team-brainstorming.jpg"
                alt="Office workspace"
                className="half-width height-190 cover-image extra-rounded-corners"
              />
            </div>
          </div>
          <div className="half-width flex-display column-direction center-justify">
            <div className="margin-bottom-medium">
              <h2 className="semi-bold-text text-40 margin-bottom-medium dark-gray-text">
                We’re Only Working With The Best
              </h2>
              <p className="text-18 relaxed-line-height light-gray-text">
                We're committed to delivering top-notch quality, working with
                the best talent and resources to ensure excellence in everything
                we do.
              </p>
            </div>
            <div className="flex-display flex-wrap large-gap full-width three-quarters-width">
              <div className="flex-display medium-gap full-width center-items justify-between">
                <div className="padding-large flex-display center-items center-justify medium-gap padding-right-large">
                  <FaAward className="w-8 h-8 green-text" />
                  <h3 className="semi-bold-text large-text black-text">
                    Quality Job
                  </h3>
                </div>
                <div className="padding-large flex-display center-items center-justify medium-gap">
                  <PiReadCvLogoBold className="w-10 h-10 green-text" />
                  <h3 className="semi-bold-text large-text black-text">
                    Resume builder
                  </h3>
                </div>
              </div>
              <div className="flex-display medium-gap full-width justify-between">
                <div className="padding-large flex-display center-items center-justify medium-gap">
                  <ImTrophy className="w-8 h-8 green-text" />
                  <h3 className="semi-bold-text large-text black-text">
                    Top Companies
                  </h3>
                </div>
                <div className="padding-large flex-display center-items center-justify medium-gap">
                  <CiMedal className="w-10 h-10 green-text" />
                  <h3 className="semi-bold-text large-text black-text">
                    Top Talents
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog section  */}
      <Blog />
    </>
  );
};

export default Aboutus;
