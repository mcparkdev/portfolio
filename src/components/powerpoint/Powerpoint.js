import React from "react";

export default function Powerpoint(props) {
  return (
    <iframe
      src={props.source}
      style={{ objectFit: "contain", width: "100%", height: "100%" }}
      frameBorder="0"
      title={props.title}
    >
      포함된{" "}
      <a rel="noopener noreferrer" target="_blank" href="https://office.com">
        Microsoft Office
      </a>{" "}
      프레젠테이션, 제공:{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://office.com/webapps"
      >
        Office
      </a>
    </iframe>
  );
}
