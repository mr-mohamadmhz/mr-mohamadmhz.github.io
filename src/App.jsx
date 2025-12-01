import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience.jsx";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/portfolio";
import Skills from "./components/Skills.jsx";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks />
    </>
  );
};

export default App;
