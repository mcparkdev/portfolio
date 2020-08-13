import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

export default function Navbar(props) {
  const contentByLanguage = {
    en: {
      about: "About me",
    },
    spa: {
      about: "Sobre mi",
    },
  };
  const { language } = props;
  const content = contentByLanguage[language];
  return (
    <div
      className="nav"
      style={props.isSiderVisible ? { filter: "brightness(50%)" } : {}}
    >
      <div className="nav-left">
        <NavLink to="/home">
          <div className="nav-left-title">mcparkdev</div>
        </NavLink>
      </div>
      <div className="nav-right">
        <div
          className="sider-button"
          onClick={() => props.setIsSiderVisible(!props.isSiderVisible)}
        >
          {content.about} <UserOutlined />
        </div>
      </div>
    </div>
  );
}
