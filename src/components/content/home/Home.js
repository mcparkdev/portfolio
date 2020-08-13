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

  const contentByLanguage = {
    en: {
      greeting: "Hi, I'm Min Chang Park",
      jobs: {
        engineer: {
          prefix: "Industrial",
          name: "Engineer",
        },
        developer: {
          prefix: "Full Stack",
          name: "Developer",
        },
      },
    },
    spa: {
      greeting: "Hola, soy Min Chang Park",
      jobs: {
        engineer: {
          prefix: "Industrial",
          name: "Ingeniero",
        },
        developer: {
          prefix: "Full Stack",
          name: "Desarrollador",
        },
      },
    },
  };
  const { language } = props;
  const content = contentByLanguage[language];

  const Job = () => {
    return (
      <>
        {language === "en" && (
          <>
            <div className="home-job">
              {props.width > 768 && (
                <div style={{ marginRight: 16 }}>
                  {content.jobs.engineer.prefix}
                </div>
              )}
              <div style={{ color: "#1890ff" }}>
                {content.jobs.engineer.name},
              </div>
            </div>
            <div className="home-job">
              {props.width > 768 && (
                <div style={{ marginRight: 16 }}>
                  {content.jobs.developer.prefix}
                </div>
              )}
              <div style={{ color: "#1890ff" }}>
                {content.jobs.developer.name}
              </div>
            </div>
          </>
        )}
        {language === "spa" && (
          <>
            <div className="home-job">
              <div style={{ color: "#1890ff", marginRight: 16 }}>
                {content.jobs.engineer.name}
              </div>
              {props.width > 768 && <div>{content.jobs.engineer.prefix},</div>}
            </div>
            <div className="home-job">
              <div style={{ marginRight: 16, color: "#1890ff" }}>
                {content.jobs.developer.name}
              </div>
              {props.width > 768 && <div>{content.jobs.developer.prefix}</div>}
            </div>
          </>
        )}
      </>
    );
  };
  const Description = () => (
    <>
      {language === "en" && (
        <>
          I like to <strong>create</strong> and <strong>solve</strong>. My major
          is <strong>Production & Logistics</strong> and my programming abilites
          extend from <strong>Data Science</strong> (R & Python) to{" "}
          <strong>Web Development</strong> (full-stack) to give the best user
          experience.
        </>
      )}
      {language === "spa" && (
        <>
          Tengo pasión por <strong>crear</strong> y <strong>solucionar</strong>.
          Mi enfoque es <strong>Producción & Logística</strong> y mis
          habilidades de programación van desde <strong>Data Science</strong> (R
          & Python) hasta <strong>Desarrollo Web</strong> (full-stack) para dar
          el mejor experiencia de usuario.
        </>
      )}
    </>
  );
  const EngineerButton = () => (
    <>
      {language === "en" && <>Industrial Engineer</>}
      {language === "spa" && <>Ingeniero Industrial</>}
    </>
  );
  const DeveloperButton = () => (
    <>
      {language === "en" && <>Full Stack Developer</>}
      {language === "spa" && <>Desarrollador Full Stack</>}
    </>
  );
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
        <Job />
      </motion.div>
      <motion.div {...motionProps} className="home-description">
        <Description />
      </motion.div>
      <motion.div {...motionProps} className="home-links">
        <LinkButton to="/engineer">
          <FundProjectionScreenOutlined />
          <EngineerButton />
        </LinkButton>
        <LinkButton to="/developer">
          <DesktopOutlined />
          <DeveloperButton />
        </LinkButton>
      </motion.div>
    </motion.div>
  );
}
