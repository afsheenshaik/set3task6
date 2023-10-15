import React from "react";
import AboutImg from "../assets/about-img.png";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Afsheen Shaik. I am a
            Computer Science Enginerring Student.
          </p>
          <p className="pb-5">
            I am beginer in Frontend skills like React.js, Bootstrap,
            Axios, CSS, and many more.
          </p>

          <p>In backend I know Node.js, Javascript, and MongoDB</p>

          <p>
            In my spare time I create basic web designs.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
