import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience.jsx";
import Portfolio from "./components/portfolio";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact";

const App = () => {
    return (
        <>
            <NavBar/>
            <Home/>
            <Experience/>
            <Portfolio/>
            <Skills/>
            <Contact/>
            <SocialLinks/>
        </>
    );
};

export default App;
