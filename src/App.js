import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import useWindowSize from "./WindowDimensions";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
import "antd/dist/antd.css";
import Sider from "./components/sider/Sider";

function App() {
  const { height, width } = useWindowSize();
  const [language, setLanguage] = useState("en");
  const [isSiderVisible, setIsSiderVisible] = useState(false);
  const appProps = {
    height,
    width,
    language,
    setLanguage,
    isSiderVisible,
    setIsSiderVisible,
  };
  // console.log(height, width);
  return (
    <div className="App">
      {/* <AnimatePresence exitBeforeEnter> */}
      <Router>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Navbar {...appProps} />
        <Content {...appProps} />
        <Sider {...appProps} />
        {/* {isSiderVisible && } */}
      </Router>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
