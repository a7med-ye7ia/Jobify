import React from "react";
import "./Blog.css"; // Import the CSS file

const Blog = () => {
  return (
    <>
      <section className="blog-section">
        <div className="blog-header">
          <div className="text-center">
            <h1 className="bold-text">News and Blog</h1>
            <p className="normal-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              iure.
            </p>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-item">
            <img
              src="/public/about-us/Blogging.jpg"
              alt="blog"
              className="blog-image"
            />
            <p className="date-text">30 March 2024</p>
            <p className="title-text">
              How to avoid the top six most common job interview mistakes.
            </p>
            <a
              href="https://www.theguardian.com/careers/careers-blog/2015/may/28/how-to-avoid-the-top-five-most-common-job-interview-mistakes"
              className="read-more-link"
            >
              Read more...
            </a>
          </div>

          <div className="blog-item">
            <img
              src="/public/about-us/Employee-Morale.png"
              alt="blog"
              className="blog-image"
            />
            <p className="date-text">30 May 2024</p>
            <p className="title-text">
              Revitalizing Workplace Morale: Innovative Tactics for Boosting
              Employee Engagement in 2024.
            </p>
            <a
              href="https://blog.catchafire.org/5-employee-engagement-strategies-to-boost-workplace-morale"
              className="read-more-link"
            >
              Read more...
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
