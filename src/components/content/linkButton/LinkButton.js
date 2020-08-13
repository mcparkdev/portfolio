import React from "react";
import { NavLink } from "react-router-dom";
export default function LinkButton(props) {
  return (
    <NavLink to={props.to}>
      <div className="links-item">{props.children}</div>
    </NavLink>
  );
}
