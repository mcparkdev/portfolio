import React, { useState, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import fadeIn from "../animation/Fade";
import stagger from "../animation/Stagger";
import "./Sider.css";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
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
                {/* <div className="sider-language-header">
                  Supported Languages:
                </div> */}
                <div className="sider-language-content">
                  <div>English</div>
                  <div>Spanish</div>
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
                  <TabPane tab="About me" key="1">
                    Hi, I am Min Chang Park and I'm both Korean and Colombian.
                    I'm currently at the 4th year of bachelor in Industrial
                    Engineering in the University of los Andes and I always look
                    forward to keep improving my abilities. <br />
                    <br />
                  </TabPane>
                  <TabPane tab="Contact" key="2">
                    Email: mc.park@uniandes.edu.co <br />
                    Phone Number: (+57) 320 416 4939 <br />
                    Github: https://github.com/mcparkdev
                  </TabPane>
                  <TabPane tab="Resume" key="3">
                    Available soon!
                  </TabPane>
                  <TabPane tab="This website" key="4">
                    This website was made with React.js. <br />
                    The code source can be found on my github repository <br />
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
