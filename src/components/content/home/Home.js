import React from "react";
import "./Home.css";
import {
  DesktopOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import LinkButton from "../linkButton/LinkButton";
import { motion } from "framer-motion";
import fadeIn from "../../animation/Fade";
import stagger from "../../animation/Stagger";

export default function Home(props) {
  const initialContentStyle = {
    transition: "none",
    transform: "translateX(0)",
  };
  const contentStyle = {
    transition: "all 0.3s ease-in-out",
    transform: "translateX(40vw)",
  };
  const motionProps = {
    initial: "initial",
    animate: "animate",
    exit: { x: -30, opacity: 0 },
    variants: fadeIn(0.6, 0, 60),
  };

  const currentStyle = () => {
    if (props.isSiderVisible) return contentStyle;
    else return initialContentStyle;
  };
  return (
    <motion.div
      variants={stagger}
      initial={initialContentStyle}
      animate={currentStyle}
      className="home"
      // style={props.isSiderVisible ? contentStyle : {}}
    >
      <motion.div {...motionProps} className="home-greeting">
        Hi, I'm Min Chang Park
      </motion.div>
      <motion.div {...motionProps} className="home-jobs">
        <div className="home-job">
          {props.width > 768 && (
            <div style={{ marginRight: 16 }}>Industrial</div>
          )}
          <div style={{ color: "#1890ff" }}>Engineer,</div>
        </div>
        <div className="home-job">
          {props.width > 768 && (
            <div style={{ marginRight: 16 }}>Full Stack</div>
          )}
          <div style={{ color: "#1890ff" }}>Developer</div>
        </div>
      </motion.div>
      <motion.div {...motionProps} className="home-description">
        I like to <strong>create</strong> and <strong>solve</strong>. My major
        is <strong>Production & Logistics</strong> and my programming abilites
        extend from <strong>Data Science</strong> (R & Python) to{" "}
        <strong>Web Development</strong> (full-stack) to give the best user
        experience.
      </motion.div>
      <motion.div {...motionProps} className="home-links">
        <LinkButton to="/engineer">
          <FundProjectionScreenOutlined />
          Industrial Engineer
        </LinkButton>
        <LinkButton to="/developer">
          <DesktopOutlined />
          Full-stack Developer
        </LinkButton>
      </motion.div>
    </motion.div>
  );
}
