import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import coding from "./coding.png";
import "./Engineer.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { ToTopOutlined } from "@ant-design/icons";

import fadeIn from "../../animation/Fade";
import Skills from "./skills/Skills";
// import Projects from "./projects/Projects";
// import { Link } from "react-scroll";

export default function Engineer(props) {
  const contentStyle = {
    transform: "translateX(40vw)",
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn(0.6, 60, 0)}
      className="engineer"
      name="engineer"
      id="engineer"
      style={props.isSiderVisible ? contentStyle : {}}
    >
      <div id="top"></div>
      <div
        className="engineer-content-left-right content-left-right"
        style={props.isSiderVisible ? contentStyle : {}}
      >
        <div className="engineer-left content-left">
          <div className="engineer-title content-title">
            Industrial Engineer
          </div>
          <div className="engineer-description content-description">
            As an <strong>Industrial Engineer</strong>, I aim to detect and
            solve problems relying on my knowledge and coding skills.
          </div>
          <div className="engineer-links links">
            <Link to="#skills" smooth>
              Skills
            </Link>
            <NavLink to="/engineer/projects">Projects</NavLink>
          </div>
          <div className="engineer-bar content-bar"></div>
        </div>
        <div className="engineer-right content-right">
          <img src={coding} alt="coding" />
        </div>
      </div>
      <Skills />
      <Link to="#top" smooth>
        <div className="scrollToTop">
          <ToTopOutlined />
        </div>
      </Link>
    </motion.div>
  );
}
