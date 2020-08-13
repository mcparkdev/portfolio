import React from "react";
import LinkButton from "../linkButton/LinkButton";
import "./Developer.css";
import thumbnail from "./Projects-thumbnail.png";
import { motion } from "framer-motion";
import fadeIn from "../../animation/Fade";
export default function Developer(props) {
  const contentStyle = {
    transform: "translateX(40vw)",
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ x: -30, opacity: 0 }}
      variants={fadeIn(0.6, 60, 0)}
      className="projects content-left-right"
      name="projects"
      id="projects"
      style={props.isSiderVisible ? contentStyle : {}}
    >
      <div className="projects-left content-left">
        <div className="projects-title content-title">Full-stack Developer</div>
        <div className="projects-description content-description">
          I would like to share the projects I've enjoyed from various fields.
        </div>
        <div className="projects-links links">
          <LinkButton to="/developer">
            {/* <DesktopOutlined /> */}
            Coming Soon
          </LinkButton>
        </div>
        <div className="projects-bar content-bar"></div>
      </div>
      <div className="projects-right content-right">
        <img src={thumbnail} alt="projects" />
      </div>
    </motion.div>
  );
}
