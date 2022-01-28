import React from "react";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import IconFramework from "./elements/IconFramework";
import IconSkill from "./elements/IconSkill";
import IconTools from "./elements/IconTools";

const About = () => {
  return (
    <section
      className="section bg-gray-100 dark:text-gray-100 dark:bg-zinc-900"
      id="about--section"
    >
      <div className="section-container items-start pt-16">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-8 divide-y divide-dashed divide-zinc-700 md:divide-none">
          <div className="head--about pb-2">
            <div className="typography--name">
              <h1 className="logo--typography text-3xl md:text-5xl font-bold tracking-wider">
                Khoerul Rizal
              </h1>
              <p className="text-[16px] md:text-[25px] font-[200]">
                Full-Stack Web Developer
              </p>
            </div>
            <div className="sosmed--icon">
              <a href="https://www.instagram.com/rzl_trimelry/" target="_blank" rel="noreferrer" className="bg-sosmed--icon">
                <AiFillInstagram className="sosmed-icon" />
              </a>
              <a href="https://github.com/rizalthewebdev" target="_blank" rel="noreferrer" className="bg-sosmed--icon">
                <AiFillGithub className="sosmed-icon" />
              </a>
              <a href="https://www.linkedin.com/in/khoerul-rizal-8aa75b219/" target="_blank" rel="noreferrer" className="bg-sosmed--icon">
                <AiFillLinkedin className="sosmed-icon" />
              </a>
              <a href="https://twitter.com/RzlTrimelry" target="_blank" rel="noreferrer" className="bg-sosmed--icon">
                <AiOutlineTwitter className="sosmed-icon" />
              </a>
            </div>
          </div>
          <div className="body--about">
            <div className="hidden md:flex flex-col gap-[10px]">
              <div className="about--group">
                <h1 className="about--title text-[20px]">About Me</h1>
                <p className="text-[18px] max-w-xs text-center md:text-left font-[100]">
                  Learn programming self-taught. <br/> Focus in Javascript programming language.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <div className="about--group items-center md:hidden pb-1">
                <h1 className="about--title">About Me</h1>
                <p className="text-sm max-w-xs text-center md:text-left font-[100]">
                  Learn programming self-taught.<br/>  Focus in Javascript programming language.
                </p>
              </div>
              <div className="about--group">
                <h1 className="about--title">Skills</h1>
                <div className="skills-tools">
                  <IconSkill />
                </div>
              </div>
              <div className="about--group">
                <h1 className="about--title">Tools</h1>
                <div className="skills-tools">
                  <IconTools />
                </div>
              </div>
              <div className="about--group">
                <h1 className="about--title">Framework</h1>
                <div className="skills-tools">
                  <IconFramework />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
