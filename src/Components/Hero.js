import React from "react";
import HeroImg from "../assets/hero-img.png";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <section className="bg-dark px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">A</span>fsheen Shaik<br />
            Computer Science Engineering student.
          </h1>

          <p className="py-5">
            I am beginner in JavaScript, React.js, Bootstrap and CSS
          </p>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;