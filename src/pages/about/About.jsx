import React from "react";
import "./About.css";
import { Accordion } from "../../components/accordion/Accordion";

export default function About() {
  return (
    <div className="about-page">
      <h1>About Travel Explorer</h1>

      <p>
        Travel Explorer is a small React project created as a final assignment.
        The goal of this project is to practice working with React components,
        routing, hooks, and UI libraries.
      </p>
     <Accordion/>
      <h2>✨ Features</h2>
      <ul>
        <li>Browse travel destinations from different continents</li>
        <li>Filter destinations by continent and price</li>
        <li>Save favorite places using localStorage</li>
        <li>Responsive UI built with Material UI</li>
        <li>Image slider on the home page</li>
      </ul>

      <h2>🛠 Technologies</h2>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>React Hooks (useState, useEffect)</li>
        <li>Material UI</li>
        <li>Swiper</li>
      </ul>

      <p className="about-footer">
        This project demonstrates my understanding of modern frontend
        development with React.
      </p>
    </div>
  );
}
