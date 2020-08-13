import React from "react";
import { Link } from "react-router-dom";
export default function SkillItem(props) {
  const Subcontent = (props) => {
    // console.log(props.list);
    return (
      <div className="skills-subcontent">
        <div className="skills-subtitle">{props.title}</div>
        <div className="skills-list-content">
          {props.list !== undefined &&
            props.list.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    );
  };
  const DownloadContent = (props) => {
    return (
      <div className="skills-subcontent">
        <div className="skills-subtitle">{props.title}</div>
        <div className="skills-list-content">
          {props.list !== undefined &&
            props.list.map((item) => (
              <React.Fragment key={item.name}>
                {item.file !== undefined ? (
                  <Link
                    to={`/media/${item.file}`}
                    target="_blank"
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>{item.name}</>
                )}
              </React.Fragment>
            ))}
        </div>
      </div>
    );
  };
  // console.log(props);
  return (
    <div className="skills">
      <div className="skills-title">
        {props.children}
        {props.title}
      </div>
      <div className="skills-description">{props.description}</div>
      <Subcontent title="Relevant Topics" list={props.topics} />
      <Subcontent title="Tools/Softwares" list={props.tools} />
      <DownloadContent title="Academic Projects" list={props.projects} />
      <div className="skills-comment">
        **
        {props.language === "en" && "Click on each project to view documents"}
        {props.language === "spa" &&
          "Haga clic en los proyectos para los documentos"}
      </div>
    </div>
  );
}
