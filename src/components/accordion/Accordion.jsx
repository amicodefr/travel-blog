import { useState } from "react";
import "./Accordion.css";

export const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item">
      <div className={`accordion-title ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem 
        title="What is Travel Explorer?" 
        content="Travel Explorer is an interactive travel blog built with React. Explore destinations, filter them, and save your favorites!" 
      />
      <AccordionItem 
        title="Technologies Used" 
        content="React, React Router, Material UI, Swiper.js, localStorage, CSS animations." 
      />
      <AccordionItem 
        title="How to Use the Blog" 
        content="Browse destinations, filter by continent and price, click ❤️ to add to Favorites, and enjoy exploring!" 
      />
    </div>
  );
};
