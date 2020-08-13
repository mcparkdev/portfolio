import React from "react";
import "./Content.css";
import Home from "./home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Engineer from "./engineer/Engineer";
import Developer from "./developer/Developer";
import stagger from "../animation/Stagger";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./engineer/projects/Projects";
export default function Content(props) {
  const location = useLocation();
  return (
    <motion.div
      variants={stagger}
      // exit={{ opacity: 0 }}
      // initial="initial"
      // animate="animate"
      className="content"
      style={props.isSiderVisible ? { filter: "brightness(50%)" } : {}}
    >
      {/* <div
        className="content-ghost"
        style={
          props.isSiderVisible
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-40vw)" }
        }
      /> */}
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
    </motion.div>
  );
}
