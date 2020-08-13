import React from "react";
import fadeIn from "../../../animation/Fade";
import "./Projects.css";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import Powerpoint from "../../../powerpoint/Powerpoint";
import Youtube from "../../../youtube/Youtube";

export default function Projects(props) {
  function onChangeSlide(a) {
    console.log(a);
  }
  const CarouselSlide = (props) => {
    return (
      <div>
        <div className="carousel-slide">
          <div className="carousel-slide-title">{props.title}</div>
          <div className="carousel-slide-description">{props.description}</div>
          <div className="content-slide-media powerpoint">{props.children}</div>
          <div className="carousel-slide-footer">Slide for more</div>
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
        Featured Projects
      </div>
      <Carousel afterChange={onChangeSlide}>
        <CarouselSlide
          title="Fast-food Restaurant Simulation"
          description="January 2020 ~ June 2020"
        >
          <Powerpoint
            source="https://onedrive.live.com/embed?cid=3B22741FC877A3FD&amp;resid=3B22741FC877A3FD%2110824&amp;authkey=APGCzYysoIG9vH0&amp;em=2&amp;wdAr=1.7777777777777777"
            title="Simulation"
          />
        </CarouselSlide>
        <CarouselSlide
          title="Whitman Store Consulting"
          description="January 2020 ~ April 2020"
        >
          <Youtube videoId="VzXZ1Fkthjw" />
        </CarouselSlide>
        <CarouselSlide
          title="Uniumbrella"
          description="January 2020 ~ June 2020"
        >
          <Powerpoint
            source="https://onedrive.live.com/embed?cid=3B22741FC877A3FD&amp;resid=3B22741FC877A3FD%2110829&amp;authkey=APnX8LRSBFoXApc&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaa=1"
            title="Uniumbrella"
          />
        </CarouselSlide>
        <CarouselSlide
          title="Library Overcrowding Analysis"
          description="January 2018 ~ May 2018"
        >
          <Youtube videoId="8Xm0QCO69Zw" />
        </CarouselSlide>
      </Carousel>
    </motion.div>
  );
}
