import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavSm from "./components/navbar/NavSm";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import CardWrap from "./components/card/CardWrap";
import FormWrap from "./components/form/formWrap";

import {useState, useEffect} from "react";
// import Card from "./components/card/card";

function App() {
  // state;
  const [showNav, setShowNav] = useState(false);
  const [projects, setProjects] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scaleStyle, setScaleStyle] = useState({
    transform: "translate(0, 0%)",
  });

  // hooks
  useEffect(() => {
    let jsonData = require("./assets/project.json");
    setProjects(jsonData.projects);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (showNav) {
      setScaleStyle({
        transform: "translate(-75vw, 5vh)",
        boxShadow: "6px 6px var(--sec-color)",
        borderRadius: "5px",
        top: "50%",
        overflowX: "hidden",
        overflowY: "auto",
        height: "90vh",
      });
    } else {
      setScaleStyle({
        height: "max-content",
        transform: "translate(0, 0%)",
        top: "0",
        overflow: "unset",
      });
    }
  }, [showNav]);

  // event listeners
  const toggleNavHandler = () => setShowNav(!showNav);

  return (
    <div className="App">
      <NavSm click={toggleNavHandler} />
      {isLoaded && (
        <div style={scaleStyle} className="app-wrap">
          <Navbar click={toggleNavHandler} showNav={showNav} />
          <div className="inner">
            <Header />
            <About />

            <CardWrap data={projects} />
            <FormWrap />
            <footer>
              <p>
                <span>Made with</span> <i className="fa fa-heart heart"></i>{" "}
                <span>by Tomiwa.</span>
              </p>
              <p>
                Design Inspiration by{" "}
                <a
                  style={{margin: "0 0.3rem", textDecoration: "underline"}}
                  href="https://dribbble.com/shots/14397179-Portfolio-Landing-Page-Dark-Mode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oguz Yagiz
                </a>{" "}
              </p>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
