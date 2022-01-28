import React from "react";
import { useState } from "react";
import SliderProject from "./SliderProject";

const Project = () => {
  const [imageIndex, setImageIndex] = useState(0)
  return (
    <section className="section" id="project--section">
      <div className="section-container flex-col justify-start pt-20 md:pt-24 gap-5 md:gap-8">
        <div className="title-page--project">
          <h1 className="logo--typography">My Selected Projects</h1>
        </div>
        <SliderProject imageIndex={imageIndex} setImageIndex={setImageIndex}/>
      </div>
    </section>
  );
};

export default Project;
