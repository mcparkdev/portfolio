import React from "react";
// import fadeIn from "../../../animation/Fade";
import "./Skills.css";
import SkillItem from "./SkillItem";
import { motion } from "framer-motion";
import {
  ClusterOutlined,
  BranchesOutlined,
  RadarChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
export default function Skills(props) {
  const skills = {
    organization: {
      title: "Organization",
      description:
        "I design organizational structures and strategies to maximize the organization's performance",
      topics: ["Organization Strategy", "System Dynamics"],
      tools: ["Vensim"],
      projects: [
        { name: "Uniumbrella", file: "Uniumbrella.pptx" },
        { name: "Organ Transplant Dynamics", file: "Organ Dynamics.docx" },
      ],
    },
    logistics: {
      title: "Production & Logistics",
      description:
        "I implement different coordinations and strategies to optimize the logistic costs",
      topics: ["Order Coordination", "Routing"],
      tools: ["R, Python, Excel"],
      projects: [
        { name: "Consulting - Logistics", file: "Logistics.pptx" },
        { name: "Consulting - Inventory", file: "Control.docx" },
        { name: "Consulting - Production", file: "Fundpro.pptx" },
      ],
    },
    statistics: {
      title: "Operation Investigation & Statistics",
      description: "I retrieve data and analyze them to offer viable solutions",
      topics: ["Simulation", "Data Analysis", "Probability & Statistics"],
      tools: ["R, Python, Simio, Power BI, Excel"],
      projects: [
        { name: "Fast-food Restaurant Simulation", file: "Simulation.pptx" },
        { name: "Library Overcrowding Approachment", file: "Modelos.docx" },
        { name: "Inquiry Data Analysis" },
        { name: "ANOVA Project", file: "ANOVA.docx" },
      ],
    },
    financing: {
      title: "Econometry and Financing",
      description:
        "I analyze a company's financial statements for financial and investment decision making",
      topics: ["Financial Statements", "Financial & Investment Decisions"],
      tools: ["Excel, CrystalBall"],
      projects: [{ name: "Financial Statement Analysis" }],
    },
  };
  return (
    <motion.div
      // initial="initial"
      // animate="animate"
      // exit={{ x: -30, opacity: 0 }}
      // variants={fadeIn(0.6, 60, 0)}
      className="engineer-skills content-full"
    >
      <div id="skills" style={{ display: "hidden" }} />
      <div className="skills-bg"></div>
      <div className="content-header">Skills I've developed</div>
      <div className="skills-content">
        <SkillItem {...skills.organization}>
          <ClusterOutlined />
        </SkillItem>
        <SkillItem {...skills.logistics}>
          <BranchesOutlined />
        </SkillItem>
        <SkillItem {...skills.statistics}>
          <RadarChartOutlined />
        </SkillItem>
        <SkillItem {...skills.financing}>
          <LineChartOutlined />
        </SkillItem>
      </div>
    </motion.div>
  );
}
