import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

export default function Navbar(props) {
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
          About me <UserOutlined />
        </div>
      </div>
    </div>
  );
}
