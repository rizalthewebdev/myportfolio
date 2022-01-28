import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home--section"
      className="w-screen bg-gray-100 dark:bg-zinc-900 dark:text-gray-100 text-gray-900"
    >
      <div className="section-container relative">
        <div className="title-page--home">
          <h1>Build a Simple, Responsive, and Interactive Website</h1>
        </div>
        <div className="content-page--home"></div>
      </div>
      <div className="arrow--bounce bottom-2">
        <Link to="about--section" smooth={true} delay={500} spy={true}>
          <IoIosArrowDown className="text-xl md:text-3xl cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
