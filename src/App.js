import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="#" element={<WelcomePage />} />
        <Route path="#about" element={<AboutMe />} />
        <Route path="#projects" element={<Projects />} />
        <Route path="#contact" element={<Contact />} />
      </Routes>
      <WelcomePage />
      <AboutMe />
      <Projects />
      <Contact />
    </BrowserRouter>
  );
}

const Root = () => {
  return (
    <>
      <App />
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <circle cx="625" cy="200" r="100" fill="#4CAF50" />
        <circle cx="700" cy="500" r="60" fill="#4CAF50" />
        <circle cx="750" cy="350" r="80" fill="#4CAF50" />
      </svg>

      <div className="corner-shape">
        <svg
          viewBox="0 0 900 600"
          width="900"
          height="600"
          className="svg-curly-shape"
        >
          <g transform="translate(55.73991191171626 599.4108960601251)">
            <path
              d="M164.9 -263.2C200.5 -233.8 206.8 -165.6 214.4 -109.5C222 -53.4 230.8 -9.5 229.7 36.6C228.7 82.8 217.9 131.1 190.5 168.1C163.1 205 119.2 230.6 69.6 252C20 273.5 -35.2 290.7 -86.9 282C-138.6 273.2 -186.8 238.4 -233.6 196C-280.4 153.6 -325.8 103.5 -337.9 46.1C-349.9 -11.2 -328.7 -75.8 -293.1 -125.5C-257.4 -175.2 -207.4 -210 -156.1 -232.3C-104.9 -254.5 -52.4 -264.3 6.1 -273.8C64.7 -283.3 129.4 -292.7 164.9 -263.2"
              fill="#4CAF50"
            ></path>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Root;
