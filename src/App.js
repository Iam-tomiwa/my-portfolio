import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavSm from "./components/navbar/NavSm";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import CardWrap from "./components/card/CardWrap";
import FormWrap from "./components/form/formWrap";

import {useState, useEffect} from "react";
import cardSrc from "./images/asset.png";
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
    let jsonData = require("./project.json");
    setProjects(jsonData.projects);
    console.log(cardSrc);
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
                Made with <i className="fa fa-heart heart"></i> by Tomiwa
              </p>
              <p>Design Inspiration by Paul</p>
              <p>Copyright: {new Date().getFullYear()}</p>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
