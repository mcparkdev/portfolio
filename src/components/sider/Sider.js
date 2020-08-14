import React, { useState, useEffect } from "react";
import {
  CloseOutlined,
  WhatsAppOutlined,
  MailOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import fadeIn from "../animation/Fade";
import stagger from "../animation/Stagger";
import { Typography } from "antd";

import "./Sider.css";

const { TabPane } = Tabs;
const { Paragraph } = Typography;

function callback(key) {
  // console.log(key);
}

export default function Sider(props) {
  const [siderTransform, setSiderTransform] = useState("translateX(-100vw)");
  const [siderWidth, setSiderWidth] = useState("40vw");

  useEffect(() => {
    // console.log(props.width);
    if (props.width > 768) setSiderWidth("40vw");
    else setSiderWidth("100vw");

    if (props.isSiderVisible) setSiderTransform("translateX(0)");
    else setSiderTransform("translateX(-100vw)");
  }, [props.width, props.isSiderVisible]);
  // console.log(props);
  const about = (language) => {
    return (
      <>
        {language === "en" && (
          <>
            {" "}
            Hi, I am Min Chang Park and I'm currently at the 4th year of
            bachelor in Industrial Engineering in the University of los Andes
            and I always look forward to keep improving my abilities. My
            interests as an Engineer are principally focused on{" "}
            <strong>Logistics</strong> and <strong>Statistics</strong>.
            <br />
            <br /> Throughout my career, I noticed my interests were based on
            programming. Therefore, since early 2020s, I've started to broaden
            my career as a developer. I'm aiming to be able to improve my
            front-end skills in the latter and make a whole new awesome,
            unforgettable portfolio.
            <br />
            <br />
          </>
        )}
        {language === "spa" && (
          <>
            {" "}
            Hola, Soy Min Chang Park y actualmente estoy cursando el séptimo
            semestre de pregrado de Ingeniería Industrial. Siempre estoy
            dispuesto a seguir mejorando mis habilidades. Mis intereses como
            ingeniero están concentrados en la <strong>
              Logísticas
            </strong> y <strong>Estadística</strong>.
            <br />
            <br />
            Durante mi carrera, me he dado cuenta que mis intereses se han
            basado en la programación, de modo que desde este año, he empezado a
            extender mi carrera como un desarrollador de Web. Busco mejorar mis
            habilidades de front-end próximamente y recrear un nuevo portafolio
            asombroso e inolvidable.
            <br />
            <br />
          </>
        )}
      </>
    );
  };

  const contentByLanguage = {
    en: {
      language: {
        en: "English",
        spa: "Spanish",
      },

      tabs: {
        about: {
          name: "About me",
          content: about("en"),
        },
        contact: {
          name: "Contact",
        },
        resume: {
          name: "Resume",
          content: "Available soon",
        },
      },
      clipboard: {
        hover: "Copy",
        click: "Copied to clipboard",
      },
    },
    spa: {
      language: {
        en: "Inglés",
        spa: "Español",
      },
      tabs: {
        about: {
          name: "Sobre mi",
          content: about("spa"),
        },
        contact: {
          name: "Contacto",
        },
        resume: {
          name: "Hoja de vida",
          content: "¡Disponible pronto!",
        },
      },
      clipboard: {
        hover: "Copiar",
        click: "Copiado a tus portapapeles",
      },
    },
  };

  const { language } = props;
  const content = contentByLanguage[language];
  const copyMessage = () => {
    const copy = content.clipboard;
    return { tooltips: [copy.hover, copy.click] };
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className="sider"
        style={{ transform: siderTransform, width: siderWidth }}
      >
        <motion.div variants={stagger} className="sider-content">
          <motion.div
            className="sider-close"
            onClick={() => props.setIsSiderVisible(!props.isSiderVisible)}
          >
            <CloseOutlined /> Close
          </motion.div>
          {props.isSiderVisible && (
            <>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeIn(0.6, 0, 120, 0.3)}
                className="sider-content-header"
              >
                mcparkdev
              </motion.div>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeIn(0.6, 0, 60, 0.4)}
                className="sider-language"
              >
                <div className="sider-language-content">
                  <div onClick={() => props.setLanguage("en")}>
                    {content.language.en}
                  </div>
                  <div onClick={() => props.setLanguage("spa")}>
                    {content.language.spa}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeIn(0.6, 0, 60, 0.5)}
                className="sider-content-tabs"
              >
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab={content.tabs.about.name} key="1">
                    {content.tabs.about.content}
                  </TabPane>
                  <TabPane tab={content.tabs.contact.name} key="2">
                    <Paragraph copyable={copyMessage}>
                      <MailOutlined /> mc.park@uniandes.edu.co
                    </Paragraph>
                    <Paragraph copyable={copyMessage}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://api.whatsapp.com/send?phone=573204164939&text=&source=&data=&app_absent="
                      >
                        <WhatsAppOutlined /> (+57) 320 416 4939
                      </a>{" "}
                    </Paragraph>
                    <Paragraph copyable={copyMessage}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/mcparkdev"
                      >
                        <GithubOutlined /> https://github.com/mcparkdev
                      </a>
                    </Paragraph>
                  </TabPane>
                  <TabPane tab={content.tabs.resume.name} key="3">
                    {content.tabs.resume.content}
                  </TabPane>
                </Tabs>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
