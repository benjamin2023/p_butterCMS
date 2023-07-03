import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import "./App.css"

export default function App() { 
  return (
    <main>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
    </main>
  );
}
