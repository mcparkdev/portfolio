import React from "react";
import fadeIn from "../../../animation/Fade";
import "./Projects.css";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import Powerpoint from "../../../powerpoint/Powerpoint";
import Youtube from "../../../youtube/Youtube";

// const contentByLanguage = {
//   en:{

//   },
//   spa:{

//   }
// }
// const { language } = props;
// const content = contentByLanguage[language];

export default function Projects(props) {
  function onChangeSlide(a) {
    console.log(a);
  }
  const contentByLanguage = {
    en: {
      title: "Featured Projects",
      slides: {
        simulation: {
          title: "Fast-food Restaurant Simulation",
          description: "January 2020 ~ June 2020",
        },
        logistics: {
          title: "Consulting - Logistics",
          description: "January 2020 ~ April 2020",
        },
        organization: {
          title: "Uniumbrella",
          description: "January 2020 ~ June 2020",
        },
        probability: {
          title: "Library Overcrowding Analysis",
          description: "January 2018 ~ May 2018",
        },
      },
    },
    spa: {
      title: "Proyectos Destacados",
      slides: {
        simulation: {
          title: "Simulación de un restaurante de comida rápida",
          description: "Enero 2020 ~ Junio 2020",
        },
        logistics: {
          title: "Consultoría - Logística",
          description: "Enero 2020 ~ Abril 2020",
        },
        organization: {
          title: "Uniumbrella",
          description: "Enero 2020 ~ Junio 2020",
        },
        probability: {
          title: "Análisis de Hacinimiento de biblioteca",
          description: "Enero 2018 ~ Mayo 2018",
        },
      },
    },
  };
  const { language } = props;
  const content = contentByLanguage[language];
  const CarouselSlide = (props) => {
    return (
      <div>
        <div className="carousel-slide">
          <div className="carousel-slide-title">{props.title}</div>
          <div className="carousel-slide-description">{props.description}</div>
          <div className="content-slide-media powerpoint">{props.children}</div>
          <div className="carousel-slide-footer">
            <div>
              {language === "en" && "There may be some loading time"}
              {language === "spa" && "Puede haber un tiempo de carga"}
            </div>
            <div>
              <strong>
                {language === "en" && "Slide for more"}
                {language === "spa" && "Deslice para más"}
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn(0.6, 0, 0)}
      className="engineer-projects content-full"
      style={{ height: "calc(100vh - 82px - 53px)" }}
    >
      <div id="projects" style={{ display: "hidden" }} />
      <div className="engineer-projects-content-header content-header">
        {content.title}
      </div>
      <Carousel afterChange={onChangeSlide}>
        <CarouselSlide {...content.slides.simulation}>
          <Powerpoint
            source="https://onedrive.live.com/embed?cid=3B22741FC877A3FD&amp;resid=3B22741FC877A3FD%2110824&amp;authkey=APGCzYysoIG9vH0&amp;em=2&amp;wdAr=1.7777777777777777"
            title="Simulation"
          />
        </CarouselSlide>
        <CarouselSlide {...content.slides.logistics}>
          <Youtube videoId="VzXZ1Fkthjw" />
        </CarouselSlide>
        <CarouselSlide {...content.slides.organization}>
          <Powerpoint
            source="https://onedrive.live.com/embed?cid=3B22741FC877A3FD&amp;resid=3B22741FC877A3FD%2110829&amp;authkey=APnX8LRSBFoXApc&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaa=1"
            title="Uniumbrella"
          />
        </CarouselSlide>
        <CarouselSlide {...content.slides.probability}>
          <Youtube videoId="8Xm0QCO69Zw" />
        </CarouselSlide>
      </Carousel>
    </motion.div>
  );
}
