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
  const contentByLanguage = {
    en: {
      title: "Skills I've developed",
      skills: {
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
          description:
            "I retrieve data and analyze them to offer viable solutions",
          topics: ["Simulation", "Data Analysis", "Probability & Statistics"],
          tools: ["R, Python, Simio, Power BI, Excel"],
          projects: [
            {
              name: "Fast-food Restaurant Simulation",
              file: "Simulation.pptx",
            },
            { name: "Library Overcrowding Analysis", file: "Modelos.docx" },
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
      },
    },
    spa: {
      title: "Habilidades que he desarrollado",
      skills: {
        organization: {
          title: "Organizaciones",
          description:
            "Diseño estructuras y estrategias organizacionales para sacar el máximo provecho de una organización",
          topics: ["Estrategia Organizacional", "Dinámica de Sistemas"],
          tools: ["Vensim"],
          projects: [
            { name: "Uniumbrella", file: "Uniumbrella.pptx" },
            {
              name: "Dinámica de trasplante de órganos",
              file: "Organ Dynamics.docx",
            },
          ],
        },
        logistics: {
          title: "Producción & Logística",
          description:
            "Implemento differentes coordinaciones y estrategias para optimizar los costos logísticos",
          topics: ["Coordinación de pedidos", "Ruteo"],
          tools: ["R, Python, Excel"],
          projects: [
            { name: "Consultoría - Logística", file: "Logistics.pptx" },
            { name: "Consultoría - Inventario", file: "Control.docx" },
            { name: "Consultoría - Producción", file: "Fundpro.pptx" },
          ],
        },
        statistics: {
          title: "Investigación de Operaciones & Estadística",
          description:
            "Recolecto datos, los análizalo y brinda soluciones y resultados viables",
          topics: [
            "Simulación",
            "Análisis de datos",
            "Probabilidad & Estadística",
          ],
          tools: ["R, Python, Simio, Power BI, Excel"],
          projects: [
            {
              name: "Simulación de Restaurante de comida rápida",
              file: "Simulation.pptx",
            },
            {
              name: "Análisis de Hacinación de bilbioteca",
              file: "Modelos.docx",
            },
            { name: "Análisis de datos de encuesta" },
            { name: "Proyecto de ANOVA", file: "ANOVA.docx" },
          ],
        },
        financing: {
          title: "Econometría y Finanzas",
          description:
            "Analizo estados financieros de la compañía para realizar tomas de decisiones financieras",
          topics: [
            "Estados Financieros",
            "Toma de Decisiones Financieros y de Inversión",
          ],
          tools: ["Excel, CrystalBall"],
          projects: [{ name: "Análisis de estado financiero" }],
        },
      },
    },
  };
  const { language } = props;
  const content = contentByLanguage[language];
  console.log(props);
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
      <div className="content-header">{content.title}</div>
      <div className="skills-content">
        <SkillItem {...props} {...content.skills.organization}>
          <ClusterOutlined />
        </SkillItem>
        <SkillItem {...props} {...content.skills.logistics}>
          <BranchesOutlined />
        </SkillItem>
        <SkillItem {...props} {...content.skills.statistics}>
          <RadarChartOutlined />
        </SkillItem>
        <SkillItem {...props} {...content.skills.financing}>
          <LineChartOutlined />
        </SkillItem>
      </div>
    </motion.div>
  );
}
