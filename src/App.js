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
  const [scaleClass, setScaleClass] = useState("app-wrap");

  // hooks
  useEffect(() => {
    let jsonData = require("./project.json");
    setProjects(jsonData.projects);
    console.log(cardSrc);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (showNav) {
      setScaleClass("app-wrap scaleDown");
    } else {
      setScaleClass("app-wrap scaleUp");
    }
  }, [showNav]);

  // event listeners
  const toggleNavHandler = () => setShowNav(!showNav);

  return (
    <div className="App">
      <NavSm click={() => toggleNavHandler()} />
      {isLoaded && (
        <div className={scaleClass}>
          <Navbar click={toggleNavHandler} showNav={showNav} />
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
      )}
    </div>
  );
}

export default App;
