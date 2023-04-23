import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
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
    
    </div>
  );
}

const Root = () => {
  return (
    <>
      <App />  
    </>
  );
};

export default Root;
