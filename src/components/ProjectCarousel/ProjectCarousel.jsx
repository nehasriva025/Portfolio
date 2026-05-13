import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./ProjectCarousel.css";
import NewPC from "../NewPC/NewPC";

const VISIBLE = 3;

export default function ProjectCarousel({ projects }) {
  const [current, setCurrent] = useState(0);
  const pages = Math.ceil(projects.length / VISIBLE);
  console.log(pages);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(pages - 1, c + 1));

  // each card is 1/projects.length of the total track width
  // one page = VISIBLE cards, so shift by (VISIBLE / projects.length * 100)%
  const shift = current * (VISIBLE / projects.length) * 100;

  return (
    <div className="carousel-wrap">
      <div className="carousel-overflow">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${shift}%)` }}
        >
          {projects.map((project, i) => (
            <div className="carousel-item" key={i}>
              <NewPC
                projectTitle={project.title}
                projectDesc={project.description}
                projectSkills={project.skills}
                icon={project.icon}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <div className="carousel-dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`dot${i === current ? "-active" : "-inactive"}`}
              // className={`dot ${i === current ? "active" : ""}`}
              // className="dot"
              onClick={() => setCurrent(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
        <div className="carousel-btns">
          <button onClick={prev} disabled={current === 0}><BsChevronLeft /></button>
          <button onClick={next} disabled={current === pages - 1}><BsChevronRight /></button>
        </div>
      </div>
    </div>
  );
}