import React from "react";
import "./Content.css";
import Home from "./home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Engineer from "./engineer/Engineer";
import Developer from "./developer/Developer";
import { AnimatePresence } from "framer-motion";
import Projects from "./engineer/projects/Projects";

export default function Content(props) {
  const location = useLocation();
  return (
    <div
      className="content"
      style={props.isSiderVisible ? { filter: "brightness(50%)" } : {}}
    >
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={({ match, history, location }) => (
              <Home
                {...props}
                match={match}
                history={history}
                location={location}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={({ match, history, location }) => (
              <Home
                {...props}
                match={match}
                history={history}
                location={location}
              />
            )}
          />
          <Route
            exact
            path="/engineer"
            render={({ match, history, location }) => (
              <Engineer
                {...props}
                match={match}
                history={history}
                location={location}
              />
            )}
          />
          <Route
            exact
            path="/engineer/projects"
            render={({ match, history, location }) => (
              <Projects
                {...props}
                match={match}
                history={history}
                location={location}
              />
            )}
          />

          <Route
            // exact
            path="/developer"
            render={({ match, history, location }) => (
              <Developer
                {...props}
                match={match}
                history={history}
                location={location}
              />
            )}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}
